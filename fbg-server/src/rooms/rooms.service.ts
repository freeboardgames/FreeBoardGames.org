import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Room } from '../dto/rooms/Room';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { RoomEntity } from './db/Room.entity';
import { UserEntity } from '../users/db/User.entity';
import { roomEntityToRoom } from './RoomUtil';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
    private usersService: UsersService,
    private connection: Connection
  ) { }

  async newRooom(room: Room): Promise<string> {
    const roomEntity = new RoomEntity();
    roomEntity.capacity = room.capacity;
    roomEntity.gameCode = room.gameCode;
    roomEntity.isPublic = room.isPublic;
    await this.roomRepository.save(roomEntity);
    return roomEntity.id;
  }

  async getRoom(roomId: string): Promise<Room> {
    const roomEntity = await this.getRoomEntity(roomId);
    return roomEntityToRoom(roomEntity);
  }

  async joinRoom(userId: string, roomId: string): Promise<void> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const roomEntity = await this.getRoomEntity(roomId);
      if (this.isFull(roomEntity)) {
        throw new HttpException(
          `Room id "${roomId}" is already full`, HttpStatus.BAD_REQUEST);
      }
      const userEntity = await this.usersService.getUserEntity(userId);
      if (this.isAlreadyInRoom(userEntity, roomEntity)) {
        throw new HttpException(
          `Room id "${roomId}" already has user id "${userId}"`, HttpStatus.BAD_REQUEST);
      }
      await queryRunner.manager.save(this.newMembership(userEntity, roomEntity));
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async getRoomEntity(roomId: string): Promise<RoomEntity> {
    const roomEntity = await this.roomRepository.findOne({
      where: { id: roomId },
      relations: ['userMemberships', 'userMemberships.user'],
    });
    if (!roomEntity) {
      throw new HttpException(
        `Room id "${roomId}" does not exist`, HttpStatus.BAD_REQUEST);
    }
    return roomEntity;
  }

  private newMembership(userEntity: UserEntity, roomEntity: RoomEntity) {
    const newMembership = new RoomMembershipEntity();
    newMembership.user = userEntity;
    newMembership.room = roomEntity;
    newMembership.lastSeen = Date.now();
    return newMembership;
  }

  private isFull(roomEntity: RoomEntity) {
    return roomEntity.userMemberships.length >= roomEntity.capacity;
  }

  private isAlreadyInRoom(userEntity: UserEntity, roomEntity: RoomEntity) {
    const userIds = roomEntity.userMemberships.map((membership) => membership.user.id);
    return userIds.includes(userEntity.id);
  }
}
