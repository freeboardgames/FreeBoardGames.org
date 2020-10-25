import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { Lobby } from './gql/Lobby.gql';
import { PubSub } from 'graphql-subscriptions';
import { LobbyService } from './lobby.service';
import { roomEntityToRoom, lobbyToGql } from './RoomUtil';

@Resolver((of) => Lobby)
export class LobbyResolver {
  constructor(private lobbyService: LobbyService, private pubSub: PubSub) {}

  @Query((returns) => Lobby)
  async lobby() {
    return { rooms: lobbyToGql(await this.lobbyService.getLobby()) };
  }

  @Subscription((returns) => Lobby)
  lobbyMutated() {
    return this.pubSub.asyncIterator('lobby');
  }
}
