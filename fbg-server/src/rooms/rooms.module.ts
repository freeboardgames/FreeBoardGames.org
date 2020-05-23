import { Module, HttpModule } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { RoomEntity } from './db/Room.entity';
import { UsersModule } from '../users/users.module';
import { RoomsController } from './rooms.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomMembershipEntity, RoomEntity]),
    UsersModule,
    HttpModule,
  ],
  providers: [RoomsService],
  controllers: [RoomsController],
  exports: [RoomsService],
})
export class RoomsModule {}
