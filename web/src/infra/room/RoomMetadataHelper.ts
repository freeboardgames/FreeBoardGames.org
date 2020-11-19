import { JoinRoom_joinRoom, JoinRoom_joinRoom_userMemberships } from 'gqlTypes/JoinRoom';

export function getCreator(metadata: JoinRoom_joinRoom) {
  return metadata.userMemberships.find((membership) => membership.isCreator);
}

export function isCreator(metadata: JoinRoom_joinRoom, userId: number) {
  return getCreator(metadata).user.id === userId;
}

export function getPlayerIds(memberships: JoinRoom_joinRoom_userMemberships[]) {
  return memberships.flatMap((m) => m.user.id);
}

export function getPlayerNicknames(memberships: JoinRoom_joinRoom_userMemberships[]) {
  return memberships.flatMap((m) => m.user.nickname);
}
