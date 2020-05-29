import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Room } from './gql/Room.gql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, MoreThan, QueryRunner } from 'typeorm';
import { RoomEntity } from './db/Room.entity';
import { roomEntityToRoom } from './RoomUtil';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { UsersService } from '../users/users.service';
import shortid from 'shortid';
import { inTransaction } from '../util/TypeOrmUtil';
import { NewRoomInput } from './gql/NewRoomInput.gql';

const CHECKIN_PERIOD = 5; // 5 seconds, see web/src/pages/room/[roomId]/Room.tsx

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
    @InjectRepository(RoomMembershipEntity)
    private roomMembershipRepository: Repository<RoomMembershipEntity>,
    private usersService: UsersService,
    private connection: Connection,
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
    await this.updateMembership(queryRunner, userId, roomEntity, true);
  }

  /** Gets a room. */
  async getRoom(roomId: string): Promise<Room> {
    const roomEntity = await this.getRoomEntity(roomId);
    return roomEntityToRoom(roomEntity);
  }

  /** Checks-in user and if room gets full starts the match. Returns match id, if any. */
  async checkin(userId: number, roomId: string): Promise<Room> {
    return await inTransaction(this.connection, async (queryRunner) => {
      let room = await this.getRoomEntity(roomId);
      if (room.match) {
        return { ...roomEntityToRoom(room), matchId: room.match.id };
      }
      await this.updateMembership(queryRunner, userId, room);
      return { ...roomEntityToRoom(room), userId };
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

  private async updateMembership(
    queryRunner: QueryRunner,
    userId: number,
    room: RoomEntity,
    isCreator: boolean = false,
  ) {
    let membership = (room.userMemberships || []).find(
      (membership) => membership.user.id === userId,
    );
    if (membership) {
      membership.lastSeen = Date.now();
    } else {
      if ((room.userMemberships || []).length >= room.capacity) {
        throw new HttpException('Room is full!', HttpStatus.BAD_REQUEST);
      }
      membership = new RoomMembershipEntity();
      membership.user = await this.usersService.getUserEntity(userId);
      membership.room = room;
      membership.lastSeen = Date.now();
      membership.isCreator = isCreator;
      room.userMemberships = [...(room.userMemberships || []), membership];
    }
    await queryRunner.manager.save(membership);
  }
}
