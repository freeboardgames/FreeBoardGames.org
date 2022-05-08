import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { MatchService } from './match.service';
import { CurrentUser, GqlAuthGuard } from '../internal/auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { Match } from './gql/Match.gql';
import { User } from '../users/gql/User.gql';

@Resolver(() => Match)
export class MatchResolver {
  constructor(private matchService: MatchService) {}

  @Query(() => Match)
  @UseGuards(GqlAuthGuard)
  async match(
    @CurrentUser() currentUser: User,
    @Args({ name: 'id', type: () => String }) matchId: string,
  ): Promise<Match> {
    return await this.matchService.getMatch(matchId, currentUser.id);
  }

  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async nextRoom(
    @CurrentUser() currentUser: User,
    @Args({ name: 'matchId', type: () => String }) matchId: string,
  ): Promise<string> {
    return this.matchService.getNextRoom(matchId, currentUser.id);
  }

  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async startMatch(
    @CurrentUser() currentUser: User,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
    @Args({ name: 'shuffleUsers', type: () => Boolean }) shuffleUsers: boolean,
    @Args({ name: 'setupData', type: () => String }) setupData: string,
  ): Promise<string> {
    return this.matchService.startMatch(roomId, currentUser.id, shuffleUsers, setupData);
  }
}
