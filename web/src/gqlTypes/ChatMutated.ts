/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: ChatMutated
// ====================================================

export interface ChatMutated_chatMutated {
  __typename: "Message";
  userId: number;
  userNickname: string;
  isoTimestamp: string;
  message: string;
}

export interface ChatMutated {
  chatMutated: ChatMutated_chatMutated;
}

export interface ChatMutatedVariables {
  channelType: string;
  channelId: string;
}
