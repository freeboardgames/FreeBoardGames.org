/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: NewUser
// ====================================================

export interface NewUser_newUser {
  __typename: "User";
  jwtToken: string | null;
}

export interface NewUser {
  newUser: NewUser_newUser;
}

export interface NewUserVariables {
  nickname: string;
}
