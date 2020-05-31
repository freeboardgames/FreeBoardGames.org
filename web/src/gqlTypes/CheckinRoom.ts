/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CheckinRoom
// ====================================================

export interface CheckinRoom_checkinRoom_userMemberships_user {
  __typename: "User";
  id: number | null;
  nickname: string;
}

export interface CheckinRoom_checkinRoom_userMemberships {
  __typename: "RoomMembership";
  isCreator: boolean;
  user: CheckinRoom_checkinRoom_userMemberships_user;
}

export interface CheckinRoom_checkinRoom {
  __typename: "Room";
  gameCode: string;
  capacity: number;
  isPublic: boolean;
  matchId: string | null;
  userId: number | null;
  userMemberships: CheckinRoom_checkinRoom_userMemberships[];
}

export interface CheckinRoom {
  checkinRoom: CheckinRoom_checkinRoom;
}

export interface CheckinRoomVariables {
  roomId: string;
}
