import * as Types from '../../gqlTypes/generated';

export type SubscribeToLobbySubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type SubscribeToLobbySubscription = { __typename?: 'Subscription', lobbyMutated: { __typename?: 'Lobby', rooms: Array<{ __typename?: 'Room', id?: string | null, gameCode: string, capacity: number, userMemberships: Array<{ __typename?: 'RoomMembership', isCreator: boolean, position: number }> }> } };
