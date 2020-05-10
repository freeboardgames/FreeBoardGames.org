import { RoomEntity } from './db/Room.entity';
import { CHECKIN_PERIOD, Room } from '../dto/rooms/Room';
import { userEntityToUser } from '../users/UserUtil';

export function roomEntityToRoom(roomEntity: RoomEntity): Room {
  const users = roomEntity.userMemberships
    .filter(
      memberships => memberships.lastSeen >= Date.now() - CHECKIN_PERIOD * 3,
    )
    .map(membership => userEntityToUser(membership.user));
  return {
    id: roomEntity.id,
    capacity: roomEntity.capacity,
    gameCode: roomEntity.gameCode,
    isPublic: roomEntity.isPublic,
    users,
  };
}
