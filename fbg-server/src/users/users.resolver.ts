import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { User } from 'src/models/User.model';
import { UsersService } from './users.service';
import { JwtPayload } from './definitions';
import { JwtService } from '@nestjs/jwt';

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
  async user(@Args('id', { type: () => Int }) id: number) {
    const user = await this.usersService.getById(id);
    return user;
  }
}
