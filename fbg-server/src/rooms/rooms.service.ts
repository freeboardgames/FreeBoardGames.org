import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Room, CHECKIN_PERIOD } from '../dto/rooms/Room';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, MoreThan, QueryRunner } from 'typeorm';
import { RoomEntity } from './db/Room.entity';
import { UserEntity } from '../users/db/User.entity';
import { roomEntityToRoom, getBgioServerUrl } from './RoomUtil';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { UsersService } from '../users/users.service';
import shortid from 'shortid';
import { MatchEntity } from '../match/db/Match.entity';
import { MatchMembershipEntity } from '../match/db/MatchMembership.entity';

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
  async newRooom(room: Room): Promise<string> {
    const roomEntity = new RoomEntity();
    roomEntity.id = shortid.generate();
    roomEntity.capacity = room.capacity;
    roomEntity.gameCode = room.gameCode;
    roomEntity.isPublic = room.isPublic;
    await this.roomRepository.save(roomEntity);
    return roomEntity.id;
  }

  /** Gets a room. */
  async getRoom(roomId: string): Promise<Room> {
    const roomEntity = await this.getRoomEntity(roomId, Date.now());
    return roomEntityToRoom(roomEntity);
  }

  /** Checks-in user and if room gets full starts the match. Returns match id, if any. */
  async checkin(userId: number, roomId: string): Promise<string | undefined> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const now = Date.now();
    try {
      let room = await this.getShallowRoomEntity(roomId);
      if (room.match) {
        // Already started.
        await queryRunner.commitTransaction();
        return room.match.id;
      }
      await this.updateMembership(queryRunner, userId, roomId, now);
      room = await this.getRoomEntity(roomId, now);
      if (room.capacity === room.userMemberships.length) {
        await queryRunner.commitTransaction();
        return await this.startMatch(queryRunner, room);
      }
      await queryRunner.commitTransaction();
      return;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  /** Gets a raw RoomMembershipEntity. */
  async getMembership(
    userId: number,
    roomId: string,
  ): Promise<RoomMembershipEntity | undefined> {
    return this.roomMembershipRepository.findOne({
      where: { room: { id: roomId }, user: { id: userId } },
      relations: ['room', 'user'],
    });
  }

  /** Gets a raw RoomEntity, only with the match relation populated. */
  async getShallowRoomEntity(roomId: string): Promise<RoomEntity> {
    const roomEntity = await this.roomRepository.findOne({
      where: { id: roomId },
      relations: ['match'],
    });
    if (!roomEntity) {
      throw new HttpException(
        `Room id "${roomId}" does not exist`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return roomEntity;
  }

  /** Gets a raw RoomEntity, with user information populated. */
  async getRoomEntity(roomId: string, now: number): Promise<RoomEntity> {
    const roomEntity = await this.roomRepository.findOne({
      where: {
        id: roomId,
        userMemberships: { lastSeen: MoreThan(now - CHECKIN_PERIOD * 3) },
      },
      relations: ['userMemberships', 'userMemberships.user'],
    });
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
    roomId: string,
    now: number,
  ) {
    let membership = await this.getMembership(userId, roomId);
    if (membership) {
      membership.lastSeen = now;
    } else {
      membership = new RoomMembershipEntity();
      membership.user = await this.usersService.getUserEntity(userId);
      membership.room = await this.getShallowRoomEntity(roomId);
      membership.lastSeen = now;
    }
    await queryRunner.manager.save(membership);
  }

  private async startMatch(
    queryRunner: QueryRunner,
    room: RoomEntity,
  ): Promise<string> {
    const bgioMatchId = await this.createBgioMatch(room);
    const id = shortid.generate();
    const newMatch = new MatchEntity();
    newMatch.id = id;
    newMatch.room = room;
    newMatch.gameCode = room.gameCode;
    newMatch.bgioServerUrl = getBgioServerUrl();
    newMatch.bgioMatchId = bgioMatchId;
    newMatch.playerMemberships = await Promise.all(
      room.userMemberships.map((membership, index) =>
        this.roomToMatchMembership(membership, newMatch, index),
      ),
    );
    await queryRunner.manager.save(newMatch);
    return id;
  }

  private async createBgioMatch(room: RoomEntity): Promise<string> {
    // TODO: send post request to bgio server with game code and room capacity, return bgio match id.
    return 'newBgioMatch';
  }

  private async roomToMatchMembership(
    roomMembership: RoomMembershipEntity,
    match: MatchEntity,
    playerID: number,
  ): Promise<MatchMembershipEntity> {
    const newMembership = new MatchMembershipEntity();
    newMembership.bgioSecret = await this.joinBgioMatch(match, playerID);
    newMembership.user = roomMembership.user;
    return newMembership;
  }

  private async joinBgioMatch(
    match: MatchEntity,
    playerID: number,
  ): Promise<string> {
    // TODO: send post request to bgio server to join match with:
    // - game code (from match object)
    // - match id (from match object)
    // - playerID
    // returns the bgio secret
    return 'bgio secret';
  }
}
