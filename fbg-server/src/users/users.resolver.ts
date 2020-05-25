import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { User } from './gql/User.gql';
import { UserInput } from './gql/UserInput.gql';
import { NewUser } from './gql/NewUser.gql';
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

  @Mutation((returns) => NewUser)
  async newUser(
    @Args({ name: 'user', type: () => UserInput }) userInput: UserInput,
  ) {
    const userId = await this.usersService.newUser(userInput);
    const payload: JwtPayload = { userId };
    const jwtToken = this.jwtService.sign(payload);
    const newUser: NewUser = { jwtToken };
    return newUser;
  }

  @Mutation((returns) => Boolean)
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @CurrentUser() currentUser,
    @Args({ name: 'user', type: () => UserInput }) userInput: UserInput,
  ) {
    await this.usersService.updateUser(currentUser.id, userInput);
    return true;
  }

  @Query((returns) => User)
  @UseGuards(JwtAuthGuard)
  async user(@CurrentUser() user: User) {
    return this.usersService.getById(user.id);
  }
}
