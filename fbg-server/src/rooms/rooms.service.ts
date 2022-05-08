import { Injectable, HttpStatus, HttpException, Inject, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, QueryRunner } from 'typeorm';
import { RoomEntity } from './db/Room.entity';
import { UserEntity } from '../users/db/User.entity';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { UsersService } from '../users/users.service';
import shortid from 'shortid';
import { inTransaction } from '../util/TypeOrmUtil';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { PubSub } from 'graphql-subscriptions';
import { roomEntityToRoom } from './RoomUtil';
import { LobbyService } from './lobby.service';
import { UpdateRoomInput } from './gql/UpdateRoomInput.gql';
import { FBG_PUB_SUB } from '../internal/FbgPubSubModule';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
    private usersService: UsersService,
    private lobbyService: LobbyService,
    private connection: Connection,
    private httpService: HttpService,
    @Inject(FBG_PUB_SUB) private pubSub: PubSub,
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
    const user = await this.usersService.getUserEntity(userId);
    if (!queryRunner) {
      await inTransaction(this.connection, async (queryRunner) => {
        await this.saveNewRoom(queryRunner, user, roomEntity);
      });
      if (room.isPublic) {
        // Cant do this inside a transaction as we need the new room in the notification.
        await this.lobbyService.notifyLobbyUpdate();
        this.maybeNotifyDiscord(user, roomEntity).catch((err) => {
          console.error(err);
        }); // Fire and forget
      }
    } else {
      await this.saveNewRoom(queryRunner, user, roomEntity);
    }
    return roomEntity;
  }

  private async saveNewRoom(
    queryRunner: QueryRunner,
    user: UserEntity,
    roomEntity: RoomEntity,
  ) {
    await queryRunner.manager.save(RoomEntity, roomEntity);
    await this.addMembership(queryRunner, user, roomEntity);
  }

  /** Checks-in user and if room gets full starts the match. Returns match id, if any. */
  async joinRoom(userId: number, roomId: string): Promise<RoomEntity> {
    const room = await inTransaction(this.connection, async (queryRunner) => {
      const user = await this.usersService.getUserEntity(userId);
      const room = await this.getRoomEntity(roomId);
      if (room.match) {
        return room;
      }
      await this.addMembership(queryRunner, user, room);
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
  async removeFromRoom(
    userIdOfCaller: number,
    userIdToBeRemoved: number,
    roomId: string,
  ): Promise<RoomEntity> {
    return await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.getRoomEntity(roomId);
      if (room.match) {
        return room;
      }
      await this.checkIsOwner(userIdOfCaller, room);
      await this.removeMembership(queryRunner, userIdToBeRemoved, room);
      if (room.isPublic) {
        await this.lobbyService.notifyLobbyUpdate();
      }
      return room;
    });
  }

  /** Moves user up one position in players list. */
  async moveUserUp(
    userIdOfCaller: number,
    userIdToBeMovedUp: number,
    roomId: string,
  ): Promise<RoomEntity> {
    return await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.getRoomEntity(roomId);
      if (room.match) {
        return room;
      }
      await this.checkIsOwner(userIdOfCaller, room);
      await this.moveUpMembership(queryRunner, userIdToBeMovedUp, room);
      return room;
    });
  }

  /** Shuffles the list of players. */
  async shuffleUsers(
    userIdOfCaller: number,
    roomId: string,
  ): Promise<RoomEntity> {
    return await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.getRoomEntity(roomId);
      if (room.match) {
        return room;
      }
      await this.checkIsOwner(userIdOfCaller, room);
      await this.shuffleMemberships(queryRunner, room);
      return room;
    });
  }

  /** Updates room metadata (capacity and game). */
  async updateRoom(
    userIdOfCaller: number,
    updateRoomInput: UpdateRoomInput
  ): Promise<void> {
    await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.getRoomEntity(updateRoomInput.roomId);
      if (room.match) {
        throw new HttpException(
          'Game already started for this Room',
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.checkIsOwner(userIdOfCaller, room);
      room.capacity = updateRoomInput.capacity;
      room.gameCode = updateRoomInput.gameCode;
      await queryRunner.manager.save(room);
      await this.notifyRoomUpdate(room);
      if (room.isPublic) {
        await this.lobbyService.notifyLobbyUpdate();
      }
    });
  }

  private async checkIsOwner(userId, room: RoomEntity) {
    const userMembership = room.userMemberships.find(
        (membership) => membership.user.id === userId,
    );
    if (!userMembership?.isCreator) {
      throw new HttpException(
        'You must be the creator of the room',
        HttpStatus.BAD_REQUEST,
      );
    }
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

  /** Notifies all rooms that a given user had their info updated. */
  async notifyUserUpdated(userId: number): Promise<void> {
    const rooms = await this.getRoomsUserIsMember(userId);
    for (const roomId of rooms) {
      await this.notifyRoomUpdate(await this.getRoomEntity(roomId));
    }
  }

  async notifyRoomUpdate(room: RoomEntity): Promise<void> {
    await this.pubSub.publish(`room/${room.id}`, {
      roomMutated: roomEntityToRoom(room),
    });
  }

  private async addMembership(
    queryRunner: QueryRunner,
    user: UserEntity,
    room: RoomEntity,
  ) {
    const memberships = room.userMemberships || [];
    const userMembership = memberships.find((m) => m.user.id === user.id);
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

    let lastPosition = 0;
    if (memberships.length > 0) {
      lastPosition = Math.max(...memberships.map((m) => m.position));
    }
    const membership = new RoomMembershipEntity();
    membership.user = user;
    membership.room = room;
    membership.lastSeen = Date.now();
    membership.isCreator = memberships.length === 0;
    membership.position = lastPosition + 1;
    await queryRunner.manager.save(membership);
    room.userMemberships = [...memberships, membership];
    await this.notifyRoomUpdate(room);
  }

  private async shuffleMemberships(
    queryRunner: QueryRunner,
    room: RoomEntity,
  ) {
    const memberships = room.userMemberships || [];
    if (memberships.length <= 1) {
      // nothing to do
      return;
    }
    let newPositions = Array(memberships.length).fill(0).map((_, i) => i);
    shuffleArray(newPositions);
    memberships.forEach((m, i) => {
        m.position = newPositions[i];
    });
    memberships.sort((m1, m2) => m1.position - m2.position);
    await queryRunner.manager.save(memberships);
    room.userMemberships = memberships;
    await this.notifyRoomUpdate(room);
  }

  private async moveUpMembership(
    queryRunner: QueryRunner,
    userId: number,
    room: RoomEntity,
  ) {
    const memberships = room.userMemberships || [];
    memberships.sort((m1, m2) => m1.position - m2.position);
    const userMembershipPos = memberships.findIndex((m) => m.user.id === userId);
    if (userMembershipPos <= 0) {
      // user already in top position (or not in room)
      return;
    }
    const userMembership = memberships[userMembershipPos];
    const prevMembership = memberships[userMembershipPos - 1];
    [userMembership.position,
     prevMembership.position] = [
     prevMembership.position,
     userMembership.position];
    memberships.sort((m1, m2) => m1.position - m2.position);
    room.userMemberships = memberships;
    await queryRunner.manager.save([userMembership, prevMembership]);
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

  private async getRoomsUserIsMember(userId: number): Promise<string[]> {
    const rooms = await this.roomRepository
      .createQueryBuilder('room')
      .leftJoinAndSelect('room.match', 'match')
      .leftJoinAndSelect('room.userMemberships', 'userMemberships')
      .leftJoinAndSelect('userMemberships.user', 'user')
      .where('user.id = :userId', { userId })
      .andWhere('room.match IS NULL')
      .orderBy({
        'userMemberships.position': 'ASC',
      })
      .getMany();
    return rooms.map(r => r.id);
  }

  private async maybeNotifyDiscord(user: UserEntity, roomEntity: RoomEntity) {
    const webhookUrl = process.env.DISCORD_LETS_PLAY_WEBHOOK;
    if (!webhookUrl) {
      return;
    }
    const gameCode = roomEntity.gameCode;
    const nickname = user.nickname;
    const gameName = gameCode.charAt(0).toUpperCase() + gameCode.substring(1);
    await this.httpService.post(
      webhookUrl,
      {
        "content": null,
        "embeds": [
          {
            "title": `Join  \`${nickname}\` on a public **${gameName}** match`,
            "description": `\`${nickname}\` wants to play **${gameName}**, click on the link above to join and play now!`,
            "url": `https://www.freeboardgames.org/en/room/${roomEntity.id}`,
            "color": 65280
          }
        ]
      }
    ).toPromise();
  }
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
