import { forwardRef, Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { RoomEntity } from './db/Room.entity';
import { UsersModule } from '../users/users.module';
import { RoomsResolver } from './rooms.resolver';
import { PubSub } from 'graphql-subscriptions';
import { AuthModule } from '../internal/auth/auth.module';
import { LobbyResolver } from './lobby.resolver';
import { LobbyService } from './lobby.service';
import { FbgPubSubModule } from '../internal/FbgPubSubModule';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomMembershipEntity, RoomEntity]),
    forwardRef(() => UsersModule),
    AuthModule,
    FbgPubSubModule,
  ],
  providers: [RoomsResolver, RoomsService, LobbyResolver, LobbyService, PubSub],
  exports: [RoomsService, LobbyService],
})
export class RoomsModule {}
