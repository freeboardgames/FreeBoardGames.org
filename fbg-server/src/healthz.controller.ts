import { Controller, Get, HttpService } from '@nestjs/common';
import { PORT } from './constants';

const LOBBY_QUERY = `
  query GetLobby { 
    lobby { 
      rooms { 
        gameCode, 
        capacity, 
        userMemberships { 
          isCreator, 
          __typename 
        }, 
        __typename 
      }, 
      __typename 
    }
  }
`;

@Controller('healthz')
export class HealthzController {
  constructor(private httpService: HttpService) {}

  @Get()
  async healthz(): Promise<string> {
    const postData = {
      query: LOBBY_QUERY
    };
    await this.httpService.post(`http://localhost:${PORT}/graphql`, postData).toPromise();
    return 'OK';
  }
}
