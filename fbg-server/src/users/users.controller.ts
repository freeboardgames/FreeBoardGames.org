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
import { UpdateUserRequest } from '../dto/users/UpdateUserRequest';
import { NewUserRequest } from '../dto/users/NewUserRequest';
import { NewUserResponse } from '../dto/users/NewUserResponse';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('new')
  async newUser(@Body() req: NewUserRequest): Promise<NewUserResponse> {
    // curl -X POST http://localhost:3001/users/new -d '{"user": { "nickname": "foo"}}' -H "Content-Type: application/json"
    const userId = await this.usersService.newUser(req.user);
    const payload: JwtPayload = { userId };
    return { jwtPayload: this.jwtService.sign(payload) };
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  async update(@Request() req, @Body() body: UpdateUserRequest) {
    // curl -X POST http://localhost:3001/users/update -H "Authorization: Bearer <<JWT>>" -d '{"user": { "nickname": "foo"}}'
    const user = { ...body.user, id: req.user.id };
    await this.usersService.updateUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    // curl http://localhost:3001/users/profile -H "Authorization: Bearer <<JWT>>""
    return req.user;
  }
}
