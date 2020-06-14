import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { User } from './gql/User.gql';
import { NewUserInput } from './gql/NewUserInput.gql';
import { NewUser } from './gql/NewUser.gql';
import { UsersService } from './users.service';
import { JwtPayload } from '../internal/auth/definitions';
import { CurrentUser, GqlAuthGuard } from '../internal/auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { FbgJwtService } from '../internal/auth/FbgJwtService';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private readonly fbgJwtService: FbgJwtService,
  ) {}

  @Mutation((returns) => NewUser)
  async newUser(
    @Args({ name: 'user', type: () => NewUserInput }) userInput: NewUserInput,
  ) {
    const userId = await this.usersService.newUser(userInput);
    const jwtToken = this.fbgJwtService.getToken({ userId });
    const newUser: NewUser = { jwtToken };
    return newUser;
  }

  @Mutation((returns) => Boolean)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @CurrentUser() currentUser,
    @Args({ name: 'user', type: () => NewUserInput }) userInput: NewUserInput,
  ) {
    await this.usersService.updateUser(currentUser.id, userInput);
    return true;
  }

  @Query((returns) => User)
  @UseGuards(GqlAuthGuard)
  async user(@CurrentUser() user: User) {
    return this.usersService.getById(user.id);
  }
}
