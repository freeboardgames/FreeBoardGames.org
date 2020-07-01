import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, MoreThan, QueryRunner } from 'typeorm';
import { RoomEntity } from './db/Room.entity';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { UsersService } from '../users/users.service';
import shortid from 'shortid';
import { inTransaction } from '../util/TypeOrmUtil';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { PubSub } from 'graphql-subscriptions';
import { roomEntityToRoom } from './RoomUtil';
import { LobbyService } from './lobby.service';
import { EXPIRE_MEMBERSHIP_AFTER_MS } from './constants';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
    private usersService: UsersService,
    private lobbyService: LobbyService,
    private connection: Connection,
    private pubSub: PubSub,
  ) {}

  /** Creates a new room. */
  async newRoom(
    room: NewRoomInput,
    userId: number,
    queryRunner?: QueryRunner,
  ): Promise<RoomEntity> {
    const roomEntity = new RoomEntity();
    roomEntity.id = shortid.generate();
    roomEntity.capacity = room.capacity;
    roomEntity.gameCode = room.gameCode;
    roomEntity.isPublic = room.isPublic;
    if (!queryRunner) {
      await inTransaction(this.connection, async (queryRunner) => {
        await this.saveNewRoom(queryRunner, userId, roomEntity);
      });
      if (room.isPublic) {
        // Cant do this inside a transaction as we need the new room in the notification.
        await this.lobbyService.notifyLobbyUpdate();
      }
    } else {
      await this.saveNewRoom(queryRunner, userId, roomEntity);
    }
    return roomEntity;
  }

  private async saveNewRoom(
    queryRunner: QueryRunner,
    userId: number,
    roomEntity: RoomEntity,
  ) {
    await queryRunner.manager.save(RoomEntity, roomEntity);
    await this.addMembership(queryRunner, userId, roomEntity);
  }

  /** Checks-in user and if room gets full starts the match. Returns match id, if any. */
  async joinRoom(userId: number, roomId: string): Promise<RoomEntity> {
    const room = await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.getRoomEntity(roomId);
      if (room.match) {
        return room;
      }
      await this.addMembership(queryRunner, userId, room);
      return room;
    });
    if (room.isPublic) {
      await this.lobbyService.notifyLobbyUpdate();
    }
    return room;
  }

  /** Removes user from room. */
  async leaveRoom(userId: number, roomId: string): Promise<RoomEntity> {
    return await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.getRoomEntity(roomId);
      if (room.match) {
        return room;
      }
      await this.removeMembership(queryRunner, userId, room);
      if (room.isPublic) {
        await this.lobbyService.notifyLobbyUpdate();
      }
      return room;
    });
  }

  /** Forcefully removes user from room. */
  async removeFromRoom(userIdOfCaller: number, userIdToBeRemoved: number, roomId: string): Promise<RoomEntity> {
    return await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.getRoomEntity(roomId);
      if (room.match) {
        return room;
      }

      const userMembership = room.userMemberships.find(
        (membership) => membership.user.id === userIdOfCaller,
      );

      if (!userMembership || !userMembership.isCreator) {
        throw new HttpException(
          'You must be the creator of the room',
          HttpStatus.BAD_REQUEST,
        );
      }

      await this.removeMembership(queryRunner, userIdToBeRemoved, room);

      if (room.isPublic) {
        await this.lobbyService.notifyLobbyUpdate();
      }

      return room;
    });
  }


  /** Gets a raw RoomEntity, with user information populated. */
  async getRoomEntity(roomId: string): Promise<RoomEntity> {
    const roomEntity = await this.roomRepository
      .createQueryBuilder('room')
      .leftJoinAndSelect('room.match', 'match')
      .leftJoinAndSelect('room.userMemberships', 'userMemberships')
      .leftJoinAndSelect('userMemberships.user', 'user')
      .where('room.id = :roomId', { roomId })
      .orderBy({
        'userMemberships.id': 'ASC',
      })
      .getOne();
    if (!roomEntity) {
      throw new HttpException(
        `Room id "${roomId}" does not exist`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return roomEntity;
  }

  async notifyRoomUpdate(room: RoomEntity) {
    await this.pubSub.publish(`room/${room.id}`, {
      roomMutated: roomEntityToRoom(room),
    });
  }

  private async addMembership(
    queryRunner: QueryRunner,
    userId: number,
    room: RoomEntity,
  ) {
    const memberships = room.userMemberships || [];
    const userMembership = memberships.find((m) => m.user.id === userId);
    if (userMembership) {
      // user already in room
      userMembership.lastSeen = Date.now();
      await queryRunner.manager.save(userMembership);
      return;
    }
    if (memberships.length >= room.capacity) {
      // room at capacity
      return;
    }
    const membership = new RoomMembershipEntity();
    membership.user = await this.usersService.getUserEntity(userId);
    membership.room = room;
    membership.lastSeen = Date.now();
    membership.isCreator = memberships.length === 0;
    await queryRunner.manager.save(membership);
    room.userMemberships = [...memberships, membership];
    await this.notifyRoomUpdate(room);
  }

  private async removeMembership(
    queryRunner: QueryRunner,
    userId: number,
    room: RoomEntity,
  ) {
    const memberships = room.userMemberships || [];
    const userMembership = memberships.find((m) => m.user.id === userId);
    if (!userMembership) {
      // user not in room
      return;
    }
    const newMemberships = room.userMemberships.filter(
      (membership) => membership.user.id !== userId,
    );
    if (userMembership.isCreator && newMemberships.length > 0) {
      newMemberships[0].isCreator = true;
      await queryRunner.manager.save(newMemberships[0]);
    }
    room.userMemberships = [...newMemberships];
    await queryRunner.manager.delete(RoomMembershipEntity, {
      user: { id: userId },
      room: { id: room.id },
    });
    await this.notifyRoomUpdate(room);
  }
}
