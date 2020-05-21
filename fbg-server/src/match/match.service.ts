import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MatchEntity } from '../match/db/Match.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Match } from '../dto/match/Match';
import { matchEntityToMatch } from './MatchUtil';
import { roomEntityToRoom } from '../rooms/RoomUtil';
import { RoomsService } from '../rooms/rooms.service';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private matchRepository: Repository<MatchEntity>,
    private roomsService: RoomsService,
    private connection: Connection,
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
        'nextRoom',
      ],
    });

    if (!matchEntity) {
      throw new HttpException(
        `Match id "${matchId}" does not exist`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return matchEntity;
  }

  /** Gets next room players should go if they want to play again. */
  async getNextRoom(matchId: string): Promise<string> {
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
}
