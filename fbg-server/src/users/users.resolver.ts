import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { User } from '../models/User.model';
import { UsersService } from './users.service';
import { JwtPayload } from './definitions';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser, JwtAuthGuard } from './jwt-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Mutation((returns) => User)
  async newUser(
    @Args({ name: 'nickname', type: () => String }) nickname: string,
  ) {
    const user: User = { nickname };
    const userId = await this.usersService.newUser(user);
    const payload: JwtPayload = { userId };
    const jwtToken = this.jwtService.sign(payload);
    const createdUser: User = { ...user, id: userId, jwtToken };
    return createdUser;
  }

  @Query((returns) => User)
  @UseGuards(JwtAuthGuard)
  async user(@CurrentUser() user: User) {
    return this.usersService.getById(user.id);
  }
}
