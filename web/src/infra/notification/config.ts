import { Ctx } from 'boardgame.io';
import { Client } from 'boardgame.io/react';
import { GameMode } from 'gamesShared/definitions/mode';
import { useCurrentGameTranslation, useTranslation } from 'infra/i18n';
import { set, unset } from 'lodash';
import { notify } from './notify';
import { staticContext } from './Provider';

const notifications = {};

type Config = Parameters<typeof Client>[0] & { matchID?: string };

export const useNotificationsConfigModifier = (params: { config: Config; playerID: string; mode: GameMode }) => {
  const { config } = params;

  const notify = useNotify();

  const gameName = config.game.name;

  const handleBeginTurn = (G: any, ctx: Ctx) => {
    config.game.turn?.onBegin?.(G, ctx);

    const firstTurn = ctx.turn === 1;
    if (firstTurn) resetNotifications({ gameName });

    if (canBeNotified({ ...params, ...ctx, ...config, gameName, muted: staticContext.muted })) {
      notify();
      markAsNotified({ ...ctx, ...config, gameName });
    }
  };

  const turn = { ...config.game.turn, onBegin: handleBeginTurn };
  const game = { ...config.game, turn };
  const extendedConfig = { ...config, game };

  return extendedConfig;
};

function useNotify() {
  const { translate } = useCurrentGameTranslation();
  const [t] = useTranslation('notifications');

  return async () => {
    const title = t('your_turn', { name: translate('name') });
    const notification = await notify(title, {});

    const sound = new Audio(require('./notification.mp3'));
    sound.play();

    notification.onclick = function focusBrowserTab() {
      parent.focus();
      window.focus();
      this.close();
    };
  };
}

function resetNotifications({ gameName }: { gameName: string }) {
  // Considering the user plays a single game per browser tab,
  // we mark all notifications as unread
  unset(notifications, gameName);
}

function canBeNotified(params: {
  gameName: string;
  matchID?: string;
  turn: number;
  currentPlayer: string;
  playerID: string;
  mode: GameMode;
  muted: boolean;
}) {
  const { mode, currentPlayer, playerID, muted } = params;
  const isYourTurn = playerID === currentPlayer;
  const isNotAlreadyNotified = notifications[getTurnKey(params)] == null;
  const isScreenActive = !document.hasFocus();
  const isAllowedGameMode = [GameMode.OnlineFriend, GameMode.AI].includes(mode);
  return isNotAlreadyNotified && isYourTurn && isScreenActive && isAllowedGameMode && !muted;
}

function markAsNotified(params: { gameName: string; matchID?: string; turn: number }) {
  set(notifications, getTurnKey(params), true);
}

function getTurnKey(params: { gameName: string; matchID?: string; turn: number }) {
  const { turn } = params;
  return `${getMatchKey(params)}."${turn}"`;
}

function getMatchKey(params: { gameName: string; matchID?: string }) {
  const { gameName, matchID } = params;
  return `${gameName}.${matchID}`;
}
