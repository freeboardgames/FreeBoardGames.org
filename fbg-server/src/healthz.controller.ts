import { Controller, Get } from '@nestjs/common';
import { LobbyService } from './rooms/lobby.service';

@Controller('healthz')
export class HealthzController {
  constructor(private lobbyService: LobbyService) {}

  @Get()
  async healthz(): Promise<string> {
    await this.lobbyService.getLobby();
    return 'OK';
  }
}
