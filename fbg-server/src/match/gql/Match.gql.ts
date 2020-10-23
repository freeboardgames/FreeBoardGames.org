import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MatchMembership } from './MatchMembership.gql';

@ObjectType()
export class Match {
  @Field(() => Int, { nullable: true })
  id?: number;
  gameCode: string;
  bgioServerUrl: string;
  bgioMatchId: string;
  bgioSecret?: string;
  bgioPlayerId?: string;

  @Field(() => [MatchMembership])
  playerMemberships: MatchMembership[];
}
