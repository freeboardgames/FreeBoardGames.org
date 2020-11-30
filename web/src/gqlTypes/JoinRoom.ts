/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinRoom
// ====================================================

export interface JoinRoom_joinRoom_userMemberships_user {
  __typename: "User";
  id: number | null;
  nickname: string;
}

export interface JoinRoom_joinRoom_userMemberships {
  __typename: "RoomMembership";
  isCreator: boolean;
  user: JoinRoom_joinRoom_userMemberships_user;
}

export interface JoinRoom_joinRoom {
  __typename: "Room";
  gameCode: string;
  capacity: number;
  isPublic: boolean;
  matchId: string | null;
  userId: number | null;
  userMemberships: JoinRoom_joinRoom_userMemberships[];
}

export interface JoinRoom {
  joinRoom: JoinRoom_joinRoom;
}

export interface JoinRoomVariables {
  roomId: string;
}
