import { RoomEntity } from './db/Room.entity';
import { CHECKIN_PERIOD, Room } from '../dto/rooms/Room';
import { userEntityToUser } from '../users/UserUtil';

export function roomEntityToRoom(roomEntity: RoomEntity): Room {
  return {
    id: roomEntity.id,
    capacity: roomEntity.capacity,
    gameCode: roomEntity.gameCode,
    isPublic: roomEntity.isPublic,
    users: (roomEntity.userMemberships || [])
      .map((membership) => userEntityToUser(membership.user))
      .sort((a, b) =>
        a.nickname.toLowerCase().localeCompare(b.nickname.toLowerCase()),
      ),
  };
}

export interface BgioServers {
  internal: string;
  external: string;
}

export function getBgioServerUrl(): BgioServers {
  const internalServers =
    process.env.BGIO_PRIVATE_SERVERS || 'http://localhost:8001';
  const externalServers =
    process.env.BGIO_PUBLIC_SERVERS || 'http://localhost:8001';
  const possibleInternalServers = internalServers.split(',');
  const possibleExternalervers = externalServers.split(',');

  // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  const pos = Math.floor(Math.random() * possibleInternalServers.length);
  return {
    internal: possibleInternalServers[pos],
    external: possibleExternalervers[pos],
  };
}
