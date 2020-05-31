import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { MatchService } from './match.service';
import { CurrentUser, GqlAuthGuard } from '../users/gql-auth-guard';
import { UseGuards } from '@nestjs/common';
import { Match } from './gql/Match.gql';

@Resolver((of) => Match)
export class MatchResolver {
  constructor(private matchService: MatchService) {}

  @Query((returns) => Match)
  @UseGuards(GqlAuthGuard)
  async match(
    @CurrentUser() currentUser,
    @Args({ name: 'id', type: () => String }) matchId: string,
  ) {
    return await this.matchService.getMatch(matchId, currentUser.id);
  }

  @Mutation((returns) => String)
  @UseGuards(GqlAuthGuard)
  async nextRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'matchId', type: () => String }) matchId: string,
  ) {
    return this.matchService.getNextRoom(matchId, currentUser.id);
  }

  @Mutation((returns) => String)
  @UseGuards(GqlAuthGuard)
  async startMatch(
    @CurrentUser() currentUser,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ) {
    return this.matchService.startMatch(roomId, currentUser.id);
  }
}
