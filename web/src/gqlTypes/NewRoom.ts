/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewRoomInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: NewRoom
// ====================================================

export interface NewRoom_newRoom {
  __typename: "NewRoom";
  roomId: string;
}

export interface NewRoom {
  newRoom: NewRoom_newRoom;
}

export interface NewRoomVariables {
  room: NewRoomInput;
}
