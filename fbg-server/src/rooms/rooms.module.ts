import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { RoomEntity } from './db/Room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomMembershipEntity, RoomEntity])],
  providers: [RoomsService],
})
export class RoomsModule {}
