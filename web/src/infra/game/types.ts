import { Client } from 'boardgame.io/react';
import { GetMatchQuery } from 'gqlTypes/generated';
import { TGameCode, TBgioMatchId, TBgioSecret, TBgioPlayerId, TBgioServerUrl } from 'infra/types';

type GraphQLMatch = NonNullable<GetMatchQuery['match']>;

export interface Match extends GraphQLMatch {
  gameCode: TGameCode;
  bgioMatchId: TBgioMatchId;
  bgioPlayerId: TBgioPlayerId;
  bgioServerUrl: TBgioServerUrl;
  bgioSecret: TBgioSecret;
}

export type ClientConfig = Parameters<typeof Client>[0];
