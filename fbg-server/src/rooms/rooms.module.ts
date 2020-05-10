import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { RoomEntity } from './db/Room.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomMembershipEntity, RoomEntity]),
    UsersModule
  ],
  providers: [RoomsService],
  exports: [
    RoomsService,
    TypeOrmModule.forFeature([RoomMembershipEntity, RoomEntity]),
  ]
})
export class RoomsModule { }
