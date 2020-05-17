import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { JwtAuthGuard } from '../users/jwt-auth-guard';
import { NewRoomRequest } from '../dto/rooms/NewRoomRequest';
import { CheckinRoomRequest } from '../dto/rooms/CheckinRoomRequest';
import { CheckinRoomResponse } from '../dto/rooms/CheckinRoomResponse';
import { NewRoomResponse } from '../dto/rooms/NewRoomResponse';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('new')
  async newRoom(@Body() req: NewRoomRequest): Promise<NewRoomResponse> {
    // curl -X POST http://localhost:3001/rooms/new -H "Authorization: Bearer <<JWT>>" -d '{"room": {"capacity": 2, "gameCode": "chess", "isPublic": false}}' -H "Content-Type: application/json"
    const roomId = await this.roomsService.newRoom(req.room);
    return { roomId };
  }

  @UseGuards(JwtAuthGuard)
  @Post('checkin')
  async checkinRoom(
    @Request() req,
    @Body() body: CheckinRoomRequest,
  ): Promise<CheckinRoomResponse> {
    // curl -X POST http://localhost:3001/rooms/checkin -H "Authorization: Bearer <<JWT>>" -d '{"roomId": <<<ROOM ID>>>}' -H "Content-Type: application/json"
    const userId = req.user.id;
    const roomId = body.roomId;
    return this.roomsService.checkin(userId, roomId);
  }
}
