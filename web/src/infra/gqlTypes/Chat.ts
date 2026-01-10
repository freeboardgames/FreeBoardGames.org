import * as Types from '../../gqlTypes/generated';

export type ChatMutatedSubscriptionVariables = Types.Exact<{
  channelType: Types.Scalars['String']['input'];
  channelId: Types.Scalars['String']['input'];
}>;


export type ChatMutatedSubscription = { __typename?: 'Subscription', chatMutated: { __typename?: 'Message', userId: number, userNickname: string, isoTimestamp: string, message: string } };
