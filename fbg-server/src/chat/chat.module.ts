import { Module } from '@nestjs/common';
import { MatchModule } from '../match/match.module';
import { RoomsModule } from '../rooms/rooms.module';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';
import { UsersModule } from '../users/users.module';
import { FbgPubSubModule } from '../internal/FbgPubSubModule';

@Module({
  imports: [
    RoomsModule,
    MatchModule,
    UsersModule,
    FbgPubSubModule
  ],
  providers: [ChatResolver, ChatService],
})
export class ChatModule {}

