import {
  Injectable,
  HttpStatus,
  HttpException,
  HttpService,
} from '@nestjs/common';
import { Room, CHECKIN_PERIOD } from '../dto/rooms/Room';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, MoreThan, QueryRunner } from 'typeorm';
import { RoomEntity } from './db/Room.entity';
import { roomEntityToRoom, getBgioServerUrl } from './RoomUtil';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { UsersService } from '../users/users.service';
import shortid from 'shortid';
import { MatchEntity } from '../match/db/Match.entity';
import { MatchMembershipEntity } from '../match/db/MatchMembership.entity';
import { CheckinRoomResponse } from 'src/dto/rooms/CheckinRoomResponse';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
    @InjectRepository(RoomMembershipEntity)
    private roomMembershipRepository: Repository<RoomMembershipEntity>,
    private usersService: UsersService,
    private connection: Connection,
    private httpService: HttpService,
  ) {}

  /** Creates a new room. */
  async newRoom(room: Room, queryRunner?: QueryRunner): Promise<RoomEntity> {
    const roomEntity = new RoomEntity();
    roomEntity.id = shortid.generate();
    roomEntity.capacity = room.capacity;
    roomEntity.gameCode = room.gameCode;
    roomEntity.isPublic = room.isPublic;
    if (!queryRunner) {
      await this.roomRepository.save(roomEntity);
    } else {
      await queryRunner.manager.save(RoomEntity, roomEntity);
    }
    return roomEntity;
  }

  /** Gets a room. */
  async getRoom(roomId: string): Promise<Room> {
    const roomEntity = await this.getRoomEntity(roomId, Date.now());
    return roomEntityToRoom(roomEntity);
  }

  /** Checks-in user and if room gets full starts the match. Returns match id, if any. */
  async checkin(userId: number, roomId: string): Promise<CheckinRoomResponse> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const now = Date.now();
    try {
      let room = await this.getShallowRoomEntity(roomId);
      if (room.match) {
        // Already started.
        await queryRunner.commitTransaction();
        return { room: roomEntityToRoom(room), matchId: room.match.id };
      }
      await this.updateMembership(queryRunner, userId, roomId, now);
      room = await this.getRoomEntity(roomId, now);
      if (room.capacity === room.userMemberships.length) {
        const matchId = await this.startMatch(queryRunner, room);
        return { room: roomEntityToRoom(room), matchId };
      }
      await queryRunner.commitTransaction();
      return { room: roomEntityToRoom(room) };
    } catch (err) {
      console.error(err);
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

  /** Starts a new match given a room. */
  private async startMatch(
    queryRunner: QueryRunner,
    room: RoomEntity,
  ): Promise<string> {
    const bgioServerUrl = getBgioServerUrl();
    console.log('bgio server url', bgioServerUrl);
    const bgioMatchId = await this.createBgioMatch(
      bgioServerUrl.internal,
      room,
    );
    const id = shortid.generate();
    const newMatch = new MatchEntity();
    newMatch.id = id;
    newMatch.room = room;
    newMatch.gameCode = room.gameCode;
    newMatch.bgioServerInternalUrl = bgioServerUrl.internal;
    newMatch.bgioServerExternalUrl = bgioServerUrl.external;
    newMatch.bgioMatchId = bgioMatchId;
    await queryRunner.manager.insert(MatchEntity, newMatch);
    await Promise.all(
      room.userMemberships.map((membership, index) =>
        this.roomToMatchMembership(
          membership,
          newMatch,
          index,
        ).then((membership) =>
          queryRunner.manager.insert(MatchMembershipEntity, membership),
        ),
      ),
    );
    room.match = newMatch;
    await queryRunner.manager.save(room);
    await queryRunner.commitTransaction();
    return id;
  }

  private async createBgioMatch(
    bgioServerUrl: string,
    room: RoomEntity,
  ): Promise<string> {
    const response = await this.httpService
      .post(`${bgioServerUrl}/games/${room.gameCode}/create`, {
        numPlayers: room.capacity,
      })
      .toPromise();
    return response.data.gameID;
  }

  private async roomToMatchMembership(
    roomMembership: RoomMembershipEntity,
    match: MatchEntity,
    playerID: number,
  ): Promise<MatchMembershipEntity> {
    const newMembership = new MatchMembershipEntity();
    newMembership.bgioSecret = await this.joinBgioMatch(
      roomMembership,
      match,
      playerID,
    );
    newMembership.user = roomMembership.user;
    newMembership.match = match;
    newMembership.bgioPlayerId = playerID;
    return newMembership;
  }

  private async joinBgioMatch(
    roomMembership: RoomMembershipEntity,
    match: MatchEntity,
    playerID: number,
  ): Promise<string> {
    const response = await this.httpService
      .post(
        `${match.bgioServerInternalUrl}/games/${match.gameCode}/${match.bgioMatchId}/join`,
        { playerID, playerName: roomMembership.user.nickname },
      )
      .toPromise();
    return response.data.playerCredentials;
  }
}
