import { Client } from 'boardgame.io/react';
import { IAIConfig, IGameConfig, IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { Downloading, FailedDownload, GameNotFound, InvalidGameMode } from 'infra/common/factories/MessagePage';
import { useSettingsService } from 'infra/settings/SettingsService';
import { TGameCode } from 'infra/types';
import React, { VFC } from 'react';
import { getGameDefinition } from '.';
import { getPlayerID, validateMode } from './helper';
import { useConfigBuilder } from './hooks/useConfigBuilder';
import { useRequest } from './hooks/useRequest';
import { Match } from './types';

type OnlineGameProps = { match?: Match };
type AIOrLocalGameProps = { gameCode?: TGameCode; mode?: GameMode.AI | GameMode.LocalFriend };

export type IGameProps = OnlineGameProps & AIOrLocalGameProps;

const configsRequest = (gameDef: IGameDef, mode: GameMode) => async (): Promise<[IAIConfig, IGameConfig]> => {
  const configs = [mode === GameMode.AI ? gameDef.aiConfig() : null, gameDef.config()];
  return Promise.all(configs).then((configs) => {
    const [aiConfig, gameConfig] = configs;
    return [aiConfig?.default, gameConfig?.default];
  });
};

export type ClientConfig = Parameters<typeof Client>[0];

export const Game: VFC<IGameProps> = (props) => {
  const { settingsService } = useSettingsService();
  const buildConfig = useConfigBuilder();

  const mode = props.match ? GameMode.OnlineFriend : props.mode;
  const gameCode = props.match?.gameCode ?? props.gameCode;
  const gameDef = getGameDefinition(gameCode);
  const isValidMode = validateMode(gameDef, mode);
  const { status, data: configs } = useRequest<[IAIConfig, IGameConfig]>(configsRequest(gameDef, mode));

  if (!gameDef) return <GameNotFound />;
  if (!isValidMode) return <InvalidGameMode />;
  if (status === 'loading' || status === 'idle') return <Downloading name={gameDef.name} />;
  if (status === 'error') return <FailedDownload name={gameDef.name} />;

  const [aiConfig, rawConfig] = configs;
  const matchCode = props.match?.bgioMatchId;
  const playerID = getPlayerID(props.match, mode);
  const serverUrl = props.match?.bgioServerUrl;
  const credentials = mode === GameMode.OnlineFriend ? props.match?.bgioSecret : null;

  const config = buildConfig(
    aiConfig,
    rawConfig,
    credentials,
    gameCode,
    props.match,
    matchCode,
    mode,
    serverUrl,
    settingsService,
  );

  const App = Client(config);
  return <App matchID={matchCode} playerID={playerID} credentials={credentials} />;
};

export default Game;
