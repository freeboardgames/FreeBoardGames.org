/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLobby
// ====================================================

export interface GetLobby_lobby_rooms_userMemberships {
  __typename: "RoomMembership";
  isCreator: boolean;
}

export interface GetLobby_lobby_rooms {
  __typename: "Room";
  id: string | null;
  gameCode: string;
  capacity: number;
  userMemberships: GetLobby_lobby_rooms_userMemberships[];
}

export interface GetLobby_lobby {
  __typename: "Lobby";
  rooms: GetLobby_lobby_rooms[];
}

export interface GetLobby {
  lobby: GetLobby_lobby;
}
