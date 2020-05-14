import { Controller, Get, UseGuards, Param, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../users/jwt-auth-guard';
import { Match } from '../dto/match/Match';
import { MatchService } from './match.service';

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
}
