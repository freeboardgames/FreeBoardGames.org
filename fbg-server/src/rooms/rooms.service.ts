import { Injectable } from '@nestjs/common';
import { Room } from '../dto/rooms/Room';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomEntity } from './db/Room.entity';
import { roomEntityToRoom } from './RoomUtil';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
  ) {}

  async newRooom(room: Room): Promise<string> {
    const roomEntity = new RoomEntity();
    roomEntity.capacity = room.capacity;
    roomEntity.gameCode = room.gameCode;
    roomEntity.isPublic = room.isPublic;
    await this.roomRepository.save(roomEntity);
    return roomEntity.id;
  }

  async getRoom(roomId: string): Promise<Room | undefined> {
    const roomEntity = await this.roomRepository.findOne({
      where: { id: roomId },
      relations: ['userMemberships'],
    });
    if (!roomEntity) {
      return;
    }
    return roomEntityToRoom(roomEntity);
  }

  private translateUser;
}
