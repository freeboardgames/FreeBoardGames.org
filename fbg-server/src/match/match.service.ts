import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MatchEntity } from '../match/db/Match.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private matchRepository: Repository<MatchEntity>,
  ) {}

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
