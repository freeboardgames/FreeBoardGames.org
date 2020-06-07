import { Module, HttpModule } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { RoomEntity } from './db/Room.entity';
import { UsersModule } from '../users/users.module';
import { RoomsResolver } from './rooms.resolver';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomMembershipEntity, RoomEntity]),
    UsersModule,
  ],
  providers: [RoomsResolver, RoomsService, PubSub],
  exports: [RoomsService],
})
export class RoomsModule {}
