import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MatchEntity } from '../match/db/Match.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from '../dto/match/Match';
import { matchEntityToMatch } from './MatchUtil';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private matchRepository: Repository<MatchEntity>,
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
      relations: ['playerMemberships', 'playerMemberships.user'],
    });

    if (!matchEntity) {
      throw new HttpException(
        `Match id "${matchId}" does not exist`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return matchEntity;
  }
}
