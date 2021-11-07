import { Ctx } from 'boardgame.io';
import { Debug } from 'boardgame.io/debug';
import { Local, SocketIO } from 'boardgame.io/multiplayer';
import { IAIConfig, IGameArgs, IGameConfig } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { Connecting } from 'infra/common/factories/MessagePage';
import { useTranslation } from 'infra/i18n';
import { SettingsService } from 'infra/settings/SettingsService';
import { TGameCode, TBgioMatchId, TBgioSecret, TBgioServerUrl } from 'infra/types';
import { applyMiddleware } from 'redux';
import DEFAULT_ENHANCERS from '../../common/enhancers';
import { gameBoardWrapper } from '../GameBoardWrapper';
import { ClientConfig, Match } from '../types';

type GameArgs = IGameArgs & { credentials?: TBgioSecret };

export function useConfigBuilder() {
  const [t] = useTranslation('Game');

  return (
    aiConfig: IAIConfig,
    config: IGameConfig,
    credentials: TBgioSecret,
    gameCode: TGameCode,
    match: Match,
    matchCode: TBgioMatchId,
    mode: GameMode,
    serverUrl: TBgioServerUrl,
    settingsService: SettingsService,
  ): ClientConfig => {
    const buildGame = (gameAI) => {
      if (mode === GameMode.OnlineFriend) return config.bgioGame;

      const customizations = settingsService.getGameSetting('customization', gameCode);
      const customization = customizations?.[mode];

      return {
        ...config.bgioGame,
        ai: gameAI,
        setup: (ctx: Ctx) => config.bgioGame.setup?.(ctx, customization),
      };
    };

    const buildDebug = () => {
      return config.debug ? { impl: Debug } : false;
    };

    const buildPlayers = () => {
      switch (mode) {
        case GameMode.OnlineFriend:
          return match.playerMemberships.map((membership, index) => ({
            playerID: index,
            name: membership.user.nickname,
          }));
        case GameMode.AI:
          return [
            { playerID: 0, name: t('computer') },
            { playerID: 1, name: t('you') },
          ];
        case GameMode.LocalFriend:
          return [
            { playerID: 0, name: t('player_1') },
            { playerID: 1, name: t('player_2') },
          ];
      }
    };

    const buildGameArgs = (): GameArgs => {
      return {
        gameCode: gameCode,
        mode: mode,
        credentials: credentials,
        matchCode: matchCode,
        players: buildPlayers(),
      };
    };

    const buildEnhancer = (gameArgs: GameArgs) => {
      const allEnhancers = [...(config.enhancers ?? []), ...DEFAULT_ENHANCERS];
      const enhancers = allEnhancers.map((enhancer) => enhancer(gameArgs));
      const middleware = applyMiddleware(...enhancers) as unknown;
      return middleware as ClientConfig['enhancer'];
    };

    const buildAi = () => {
      const customizations = settingsService.getGameSetting('customization', gameCode);
      const customization = customizations?.[mode];
      const gameAIConfig = aiConfig?.bgioAI(customization);
      const gameAI = gameAIConfig?.ai || gameAIConfig?.bot || gameAIConfig;
      const gameAIType = gameAIConfig?.type || gameAI;
      return { gameAI, gameAIType };
    };

    const buildMultiplayer = (gameAIType) => {
      switch (mode) {
        case GameMode.OnlineFriend:
          return SocketIO({ server: serverUrl });
        case GameMode.AI:
          return Local({ bots: { '0': gameAIType } });
      }
    };

    const gameArgs = buildGameArgs();
    const { gameAI, gameAIType } = buildAi();

    return {
      game: buildGame(gameAI),
      debug: buildDebug(),
      loading: Connecting,
      board: gameBoardWrapper({ board: config.bgioBoard, gameArgs }),
      enhancer: buildEnhancer(gameArgs),
      multiplayer: buildMultiplayer(gameAIType),
    };
  };
}
