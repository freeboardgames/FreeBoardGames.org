import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { User } from '../models/User.model';
import { UserInput } from '../models/UserInput.model';
import { UsersService } from './users.service';
import { JwtPayload } from './definitions';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser, JwtAuthGuard } from './gql-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Mutation((returns) => User)
  async newUser(
    @Args({ name: 'user', type: () => UserInput }) userInput: UserInput,
  ) {
    const user: User = { nickname: userInput.nickname };
    const userId = await this.usersService.newUser(user);
    const payload: JwtPayload = { userId };
    const jwtToken = this.jwtService.sign(payload);
    const createdUser: User = { ...user, id: userId, jwtToken };
    return createdUser;
  }

  @Mutation((returns) => User)
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @CurrentUser() user: User,
    @Args({ name: 'user', type: () => UserInput }) userInput: UserInput,
  ) {
    const newUser: User = { id: user.id, nickname: userInput.nickname };
    await this.usersService.updateUser(newUser);
    return newUser;
  }

  @Query((returns) => User)
  @UseGuards(JwtAuthGuard)
  async user(@CurrentUser() user: User) {
    return this.usersService.getById(user.id);
  }
}
