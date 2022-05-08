/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: RoomMutated
// ====================================================

export interface RoomMutated_roomMutated_userMemberships_user {
  __typename: "User";
  id: number | null;
  nickname: string;
}

export interface RoomMutated_roomMutated_userMemberships {
  __typename: "RoomMembership";
  isCreator: boolean;
  position: number;
  user: RoomMutated_roomMutated_userMemberships_user;
}

export interface RoomMutated_roomMutated {
  __typename: "Room";
  gameCode: string;
  capacity: number;
  isPublic: boolean;
  matchId: string | null;
  userId: number | null;
  userMemberships: RoomMutated_roomMutated_userMemberships[];
}

export interface RoomMutated {
  roomMutated: RoomMutated_roomMutated;
}

export interface RoomMutatedVariables {
  roomId: string;
}
