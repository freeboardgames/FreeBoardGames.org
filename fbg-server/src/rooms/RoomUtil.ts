import { RoomEntity } from './db/Room.entity';
import { CHECKIN_PERIOD, Room } from '../dto/rooms/Room';
import { userEntityToUser } from '../users/UserUtil';

export function roomEntityToRoom(roomEntity: RoomEntity): Room {
  return {
    id: roomEntity.id,
    capacity: roomEntity.capacity,
    gameCode: roomEntity.gameCode,
    isPublic: roomEntity.isPublic,
    users: roomEntity.userMemberships.map(membership =>
      userEntityToUser(membership.user),
    ),
  };
}

export function getBgioServerUrl(): string {
  const config = process.env.BGIO_SERVERS || 'http://localhost:8001';
  const possibleServers = config.split(',');
  // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  return possibleServers[Math.floor(Math.random() * possibleServers.length)];
}
