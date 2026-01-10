import * as Types from '../../../gqlTypes/generated';

export type NewUserMutationVariables = Types.Exact<{
  user: Types.NewUserInput;
}>;


export type NewUserMutation = { __typename?: 'Mutation', newUser: { __typename?: 'NewUser', jwtToken: string } };

export type GetMatchQueryVariables = Types.Exact<{
  matchId: Types.Scalars['String']['input'];
}>;


export type GetMatchQuery = { __typename?: 'Query', match: { __typename?: 'Match', gameCode: string, bgioServerUrl: string, bgioMatchId: string, bgioSecret?: string | null, bgioPlayerId?: string | null, playerMemberships: Array<{ __typename?: 'MatchMembership', user: { __typename?: 'User', id?: number | null, nickname: string } }> } };

export type StartMatchMutationVariables = Types.Exact<{
  roomId: Types.Scalars['String']['input'];
  shuffleUsers: Types.Scalars['Boolean']['input'];
  setupData: Types.Scalars['String']['input'];
}>;


export type StartMatchMutation = { __typename?: 'Mutation', startMatch: string };

export type NewRoomMutationVariables = Types.Exact<{
  room: Types.NewRoomInput;
}>;


export type NewRoomMutation = { __typename?: 'Mutation', newRoom: { __typename?: 'NewRoom', roomId: string } };

export type UpdateUserMutationVariables = Types.Exact<{
  user: Types.NewUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: boolean };

export type UpdateRoomMutationVariables = Types.Exact<{
  room: Types.UpdateRoomInput;
}>;


export type UpdateRoomMutation = { __typename?: 'Mutation', updateRoom: boolean };

export type JoinRoomMutationVariables = Types.Exact<{
  roomId: Types.Scalars['String']['input'];
}>;


export type JoinRoomMutation = { __typename?: 'Mutation', joinRoom: { __typename?: 'Room', gameCode: string, capacity: number, isPublic: boolean, matchId?: string | null, userId?: number | null, userMemberships: Array<{ __typename?: 'RoomMembership', isCreator: boolean, position: number, user: { __typename?: 'User', id?: number | null, nickname: string } }> } };

export type LeaveRoomMutationVariables = Types.Exact<{
  roomId: Types.Scalars['String']['input'];
}>;


export type LeaveRoomMutation = { __typename?: 'Mutation', leaveRoom: boolean };

export type RemoveUserFromRoomMutationVariables = Types.Exact<{
  roomId: Types.Scalars['String']['input'];
  userIdToBeRemoved: Types.Scalars['Int']['input'];
}>;


export type RemoveUserFromRoomMutation = { __typename?: 'Mutation', removeFromRoom: boolean };

export type MoveUserUpMutationVariables = Types.Exact<{
  roomId: Types.Scalars['String']['input'];
  userIdToBeMovedUp: Types.Scalars['Int']['input'];
}>;


export type MoveUserUpMutation = { __typename?: 'Mutation', moveUserUp: boolean };

export type ShuffleUsersMutationVariables = Types.Exact<{
  roomId: Types.Scalars['String']['input'];
}>;


export type ShuffleUsersMutation = { __typename?: 'Mutation', shuffleUsers: boolean };

export type NextRoomMutationVariables = Types.Exact<{
  matchId: Types.Scalars['String']['input'];
}>;


export type NextRoomMutation = { __typename?: 'Mutation', nextRoom: string };

export type GetLobbyQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLobbyQuery = { __typename?: 'Query', lobby: { __typename?: 'Lobby', rooms: Array<{ __typename?: 'Room', id?: string | null, gameCode: string, capacity: number, userMemberships: Array<{ __typename?: 'RoomMembership', isCreator: boolean, position: number }> }> } };

export type SendMessageMutationVariables = Types.Exact<{
  channelType: Types.Scalars['String']['input'];
  channelId: Types.Scalars['String']['input'];
  message: Types.Scalars['String']['input'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: boolean };
