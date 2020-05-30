/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMatch
// ====================================================

export interface GetMatch_match_playerMemberships_user {
  __typename: "User";
  id: number | null;
  nickname: string;
}

export interface GetMatch_match_playerMemberships {
  __typename: "MatchMembership";
  user: GetMatch_match_playerMemberships_user;
}

export interface GetMatch_match {
  __typename: "Match";
  gameCode: string;
  bgioServerUrl: string;
  bgioMatchId: string;
  bgioSecret: string | null;
  bgioPlayerId: string | null;
  playerMemberships: GetMatch_match_playerMemberships[];
}

export interface GetMatch {
  match: GetMatch_match;
}

export interface GetMatchVariables {
  matchId: string;
}
