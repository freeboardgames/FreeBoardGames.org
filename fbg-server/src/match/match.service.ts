import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpService,
} from '@nestjs/common';
import { MatchEntity } from '../match/db/Match.entity';
import { MatchMembershipEntity } from '../match/db/MatchMembership.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, QueryRunner } from 'typeorm';
import { Match } from '../dto/match/Match';
import { matchEntityToMatch, getBgioServerUrl } from './MatchUtil';
import { roomEntityToRoom } from '../rooms/RoomUtil';
import { RoomsService } from '../rooms/rooms.service';
import { RoomEntity } from '../rooms/db/Room.entity';
import { RoomMembershipEntity } from '../rooms/db/RoomMembership.entity';
import shortid from 'shortid';
import { inTransaction } from '../util/TypeOrmUtil';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private matchRepository: Repository<MatchEntity>,
    private roomsService: RoomsService,
    private connection: Connection,
    private httpService: HttpService,
  ) {}

  /** Gets match match information for a given user. */
  async getMatch(matchId: string, userId: number): Promise<Match> {
    const entity = await this.getMatchEntity(matchId);
    return matchEntityToMatch(entity, userId);
  }

  /** Gets a MatchEntity with players populated. */
  async getMatchEntity(matchId: string): Promise<MatchEntity> {
    const matchEntity = await this.matchRepository.findOne({
      where: { id: matchId },
      relations: [
        'playerMemberships',
        'playerMemberships.user',
        'room',
        'room.userMemberships',
        'room.userMemberships.user',
        'nextRoom',
      ],
    });

    if (!matchEntity) {
      throw new HttpException(
        `Match id "${matchId}" does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return matchEntity;
  }

  /** Gets next room players should go if they want to play again. */
  async getNextRoom(matchId: string, userId: number): Promise<string> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const entity = await this.getMatchEntity(matchId);
      if (entity.nextRoom) {
        await queryRunner.commitTransaction();
        return entity.nextRoom.id;
      }
      const room = await this.roomsService.newRoom(
        roomEntityToRoom(entity.room),
        userId,
        queryRunner,
      );
      entity.nextRoom = room;
      await queryRunner.manager.save(MatchEntity, entity);
      await queryRunner.commitTransaction();
      return room.id;
    } catch (err) {
      console.error(err);
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  /** Starts a new match given a room. */
  public async startMatch(roomId: string, userId: number): Promise<string> {
    return await inTransaction(this.connection, async (queryRunner) => {
      const room = await this.roomsService.getRoomEntity(roomId);
      const userMembership = room.userMemberships.find(
        (membership) => membership.user.id === userId,
      );
      if (!userMembership || !userMembership.isCreator) {
        throw new HttpException(
          'You must be the creator of the room',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (room.capacity !== room.userMemberships.length) {
        throw new HttpException('Room is not full yet', HttpStatus.BAD_REQUEST);
      }
      return await this.createMatch(queryRunner, room);
    });
  }

  private async createMatch(
    queryRunner: QueryRunner,
    room: RoomEntity,
  ): Promise<string> {
    const bgioServerUrl = getBgioServerUrl();
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
