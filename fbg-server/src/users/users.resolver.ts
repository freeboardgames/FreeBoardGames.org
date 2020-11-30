import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { User } from './gql/User.gql';
import { NewUserInput } from './gql/NewUserInput.gql';
import { NewUser } from './gql/NewUser.gql';
import { UsersService } from './users.service';
import { CurrentUser, GqlAuthGuard } from '../internal/auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { FbgJwtService } from '../internal/auth/FbgJwtService';
import { RoomsService } from '../rooms/rooms.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private roomsService: RoomsService,
    private readonly fbgJwtService: FbgJwtService,
  ) {}

  @Mutation(() => NewUser)
  async newUser(
    @Args({ name: 'user', type: () => NewUserInput }) userInput: NewUserInput,
  ): Promise<NewUser> {
    const userId = await this.usersService.newUser(userInput);
    const jwtToken = this.fbgJwtService.getToken({ userId });
    const newUser: NewUser = { jwtToken };
    return newUser;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @CurrentUser() currentUser: User,
    @Args({ name: 'user', type: () => NewUserInput }) userInput: NewUserInput,
  ): Promise<boolean> {
    await this.usersService.updateUser(currentUser.id, userInput);
    await this.roomsService.notifyUserUpdated(currentUser.id);
    return true;
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async user(@CurrentUser() user: User): Promise<User> {
    return this.usersService.getById(user.id);
  }
}
