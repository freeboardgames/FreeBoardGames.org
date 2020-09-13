import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from './db/Room.entity';
import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { Repository } from 'typeorm';
import { lobbyToGql } from './RoomUtil';
import { EXPIRE_MEMBERSHIP_AFTER_MS } from './constants';

@Injectable()
export class LobbyService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
    private pubSub: PubSub,
  ) {}

  /** Gets list of open public rooms. */
  async getLobby(): Promise<RoomEntity[]> {
    return (
      (await this.roomRepository
        .createQueryBuilder('room')
        .innerJoinAndSelect('room.userMemberships', 'userMemberships')
        .where('room.isPublic')
        .andWhere('userMemberships.lastSeen >= :timeout', {
          timeout: Date.now() - EXPIRE_MEMBERSHIP_AFTER_MS,
        })
        .andWhere('room.match IS NULL')
        .orderBy({
          'room.id': 'DESC',
        })
        .getMany()) || []
    ).filter(this.filterFullRooms);
  }

  /** Issue pub/sub event when lobby changes. */
  public async notifyLobbyUpdate() {
    await this.pubSub.publish(`lobby`, {
      lobbyMutated: { rooms: lobbyToGql(await this.getLobby()) },
    });
  }

  private filterFullRooms(room: RoomEntity) {
    return room.userMemberships.length < room.capacity;
  }
}
