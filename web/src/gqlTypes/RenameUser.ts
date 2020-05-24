/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RenameUser
// ====================================================

export interface RenameUser_updateUserNickname {
  __typename: "User";
  nickname: string;
}

export interface RenameUser {
  updateUserNickname: RenameUser_updateUserNickname;
}

export interface RenameUserVariables {
  nickname: string;
}
