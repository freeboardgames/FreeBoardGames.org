/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubscribeToLobby
// ====================================================

export interface SubscribeToLobby_lobbyMutated_rooms_userMemberships {
  __typename: "RoomMembership";
  isCreator: boolean;
  position: number;
}

export interface SubscribeToLobby_lobbyMutated_rooms {
  __typename: "Room";
  id: string | null;
  gameCode: string;
  capacity: number;
  userMemberships: SubscribeToLobby_lobbyMutated_rooms_userMemberships[];
}

export interface SubscribeToLobby_lobbyMutated {
  __typename: "Lobby";
  rooms: SubscribeToLobby_lobbyMutated_rooms[];
}

export interface SubscribeToLobby {
  lobbyMutated: SubscribeToLobby_lobbyMutated;
}
