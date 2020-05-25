/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: RenameUser
// ====================================================

export interface RenameUser_updateUser {
  __typename: "User";
  nickname: string;
}

export interface RenameUser {
  updateUser: RenameUser_updateUser;
}

export interface RenameUserVariables {
  user: UserInput;
}
