import { MatchEntity } from './db/Match.entity';
import { Match } from '../dto/match/Match';
import { userEntityToUser } from '../users/UserUtil';

export function matchEntityToMatch(entity: MatchEntity, userId: number): Match {
  const memberships = [...entity.playerMemberships];
  memberships.sort((a, b) => a.bgioPlayerId - b.bgioPlayerId);
  const match: Match = {
    gameCode: entity.gameCode,
    bgioServerUrl: entity.bgioServerUrl,
    bgioMatchId: entity.bgioMatchId,
    players: memberships.map((membership) => userEntityToUser(membership.user)),
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
