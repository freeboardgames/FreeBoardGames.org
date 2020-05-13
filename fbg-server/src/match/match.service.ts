import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MatchEntity } from '../match/db/Match.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from '../dto/match/Match';
import { userEntityToUser } from '../users/UserUtil';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private matchRepository: Repository<MatchEntity>,
  ) {}

  async getMatch(matchId: string, userId: number): Promise<Match> {
    const entity = await this.getMatchEntity(matchId);
    const memberships = [...entity.playerMemberships];
    memberships.sort((a, b) => a.bgioPlayerId - b.bgioPlayerId);
    const match: Match = {
      gameCode: entity.gameCode,
      bgioServerUrl: entity.bgioServerUrl,
      bgioMatchId: entity.bgioMatchId,
      players: memberships.map((membership) =>
        userEntityToUser(membership.user),
      ),
    };
    const userMembership = entity.playerMemberships.find(
      (membership) => membership.user.id === userId,
    );
    if (userMembership) {
      match.bgioSecret = userMembership.bgioSecret;
      match.bgioPlayerId = `${userMembership.bgioPlayerId}`;
    }
    return match;
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
