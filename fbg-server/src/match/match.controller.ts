import {
  Controller,
  Get,
  UseGuards,
  Param,
  Request,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from '../users/jwt-auth-guard';
import { Match } from '../dto/match/Match';
import { MatchService } from './match.service';
import { NextRoomRequest } from '../dto/match/NextRoomRequest';
import { StartMatchRequest } from '../dto/match/StartMatchRequest';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getMatch(@Param() params, @Request() req): Promise<Match> {
    const userId = req.user.id;
    const matchId = params.id;
    return await this.matchService.getMatch(matchId, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async getNextRoom(
    @Request() request,
    @Body() body: NextRoomRequest,
  ): Promise<string> {
    const matchId = body.matchId;
    const userId = request.user.id;
    const match = await this.matchService.getMatch(matchId, userId);
    if (!match.bgioSecret) {
      throw new HttpException(
        'You need to be a player in order to play again',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.matchService.getNextRoom(matchId, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('start')
  async startMatch(
    @Request() request,
    @Body() body: StartMatchRequest,
  ): Promise<string> {
    const roomId = body.roomId;
    const userId = request.user.id;
    return await this.matchService.startMatch(roomId, userId);
  }
}
