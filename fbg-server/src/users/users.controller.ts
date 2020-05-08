import {
  Controller,
  Post,
  Get,
  UseGuards,
  Request,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from './jwt-auth-guard';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './definitions';
import { User } from '../dto/users/User';
import { NewUserRequest } from '../dto/users/NewUserRequest';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('users/new')
  async newUser(@Body() req: NewUserRequest) {
    // curl -X POST http://localhost:3001/users/new -d '{"user": { "nickname": "foo"}}' -H "Content-Type: application/json"
    if (!req.user || !req.user.nickname || req.user.nickname.length < 3) {
      throw new HttpException('Invalid nickname', HttpStatus.BAD_REQUEST);
    }
    const userId = await this.usersService.newUser(req.user);
    const payload: JwtPayload = { userId };
    return { jwtPayload: this.jwtService.sign(payload) };
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/profile')
  getProfile(@Request() req) {
    // curl http://localhost:3001/users/profile -H "Authorization: Bearer <<JWT>>""
    return req.user;
  }
}
