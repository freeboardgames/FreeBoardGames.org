import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from './jwt-auth-guard';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './definitions';
import { User } from './definitions';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('users/new')
  async newUser() {
    // curl -X POST http://localhost:3001/users/new
    // TODO(flamecoals): Read user from request.
    const user: User = { nickname: 'monkey' };
    const userId = await this.usersService.newUser(user);
    const payload: JwtPayload = { userId };
    return { jwtPayload: this.jwtService.sign(payload) };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    // TODO(flamecoals): delete, just an example.
    // curl http://localhost:3001/profile -H "Authorization: Bearer <<JWT>>""
    return req.user;
  }
}
