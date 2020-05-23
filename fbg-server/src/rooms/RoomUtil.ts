import { RoomEntity } from './db/Room.entity';
import { CHECKIN_PERIOD, Room } from '../dto/rooms/Room';
import { userEntityToUser } from '../users/UserUtil';

export function roomEntityToRoom(roomEntity: RoomEntity): Room {
  return {
    id: roomEntity.id,
    capacity: roomEntity.capacity,
    gameCode: roomEntity.gameCode,
    isPublic: roomEntity.isPublic,
    creator: userEntityToUser(roomEntity.userMemberships.find((membership) => membership.isCreator).user),
    users: roomEntity.userMemberships
      .map((membership) => userEntityToUser(membership.user))
      .sort((a, b) =>
        a.nickname.toLowerCase().localeCompare(b.nickname.toLowerCase()),
      ),
  };
}
