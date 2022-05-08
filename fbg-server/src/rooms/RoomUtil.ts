import { RoomEntity } from './db/Room.entity';
import { Room } from './gql/Room.gql';
import { userEntityToUser } from '../users/UserUtil';
import { RoomMembershipEntity } from './db/RoomMembership.entity';
import { RoomMembership } from './gql/RoomMembership.gql';

export function lobbyToGql(lobby: RoomEntity[]): Room[] {
  return lobby.map(roomEntityToRoom);
}

export function roomEntityToRoom(roomEntity: RoomEntity): Room {
  return {
    capacity: roomEntity.capacity,
    id: roomEntity.id,
    matchId: roomEntity.match?.id,
    gameCode: roomEntity.gameCode,
    isPublic: roomEntity.isPublic,
    userMemberships: roomEntity.userMemberships.map((membership) =>
      roomMembershipEntityToRoomMembership(membership),
    ),
  };
}

export function roomMembershipEntityToRoomMembership(
  roomMembershipEntity: RoomMembershipEntity,
): RoomMembership {
  return {
    isCreator: roomMembershipEntity.isCreator,
    position: roomMembershipEntity.position,
    user: roomMembershipEntity.user
      ? userEntityToUser(roomMembershipEntity.user)
      : undefined,
  };
}
