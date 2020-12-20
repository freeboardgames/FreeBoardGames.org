import { Module } from '@nestjs/common';
import { MatchModule } from '../match/match.module';
import { RoomsModule } from '../rooms/rooms.module';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';
import { PubSub } from 'graphql-subscriptions';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    RoomsModule,
    MatchModule,
    UsersModule,
  ],
  providers: [ChatResolver, ChatService, PubSub],
})
export class ChatModule {}

