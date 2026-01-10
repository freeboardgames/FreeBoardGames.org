import * as Types from '../../gqlTypes/generated';

export type RoomMutatedSubscriptionVariables = Types.Exact<{
  roomId: Types.Scalars['String']['input'];
}>;


export type RoomMutatedSubscription = { __typename?: 'Subscription', roomMutated: { __typename?: 'Room', gameCode: string, capacity: number, isPublic: boolean, matchId?: string | null, userId?: number | null, userMemberships: Array<{ __typename?: 'RoomMembership', isCreator: boolean, position: number, user: { __typename?: 'User', id?: number | null, nickname: string } }> } };
