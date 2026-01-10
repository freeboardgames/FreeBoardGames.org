import { JoinRoomMutation } from 'gqlTypes/generated';

export function getCreator(metadata: JoinRoomMutation['joinRoom']) {
  return metadata.userMemberships.find((membership) => membership.isCreator);
}

export function isCreator(metadata: JoinRoomMutation['joinRoom'], userId: number) {
  return getCreator(metadata).user.id === userId;
}

export function getPlayerIds(memberships: JoinRoomMutation['joinRoom']['userMemberships']) {
  return memberships.flatMap((m) => m.user.id);
}

export function getPlayerNicknames(memberships: JoinRoomMutation['joinRoom']['userMemberships']) {
  return memberships.flatMap((m) => m.user.nickname);
}
