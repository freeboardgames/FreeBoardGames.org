import { Module, HttpModule } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { RoomEntity } from './db/Room.entity';
import { UsersModule } from '../users/users.module';
import { RoomsResolver } from './rooms.resolver';
import { PubSub } from 'graphql-subscriptions';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from '../users/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomMembershipEntity, RoomEntity]),
    UsersModule,
    JwtModule.register({
      secret: JWT_SECRET,
    }),
  ],
  providers: [RoomsResolver, RoomsService, PubSub],
  exports: [RoomsService],
})
export class RoomsModule {}
