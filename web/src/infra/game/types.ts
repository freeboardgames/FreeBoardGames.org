import { Client } from 'boardgame.io/react';
import { GetMatch_match } from 'gqlTypes/GetMatch';
import { TGameCode, TBgioMatchId, TBgioSecret, TBgioPlayerId, TBgioServerUrl } from 'infra/types';

export interface Match extends GetMatch_match {
  gameCode: TGameCode;
  bgioMatchId: TBgioMatchId;
  bgioPlayerId: TBgioPlayerId;
  bgioServerUrl: TBgioServerUrl;
  bgioSecret: TBgioSecret;
}

export type ClientConfig = Parameters<typeof Client>[0];
