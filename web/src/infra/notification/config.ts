import { Ctx } from 'boardgame.io';
import { Client } from 'boardgame.io/react';
import { GameMode } from 'gamesShared/definitions/mode';
import { useCurrentGameTranslation, useTranslation } from 'infra/i18n';
import { set, unset } from 'lodash';
import { notify } from './notify';
import { staticContext } from './Provider';

const notifications = {};

type IConfig = Parameters<typeof Client>[0] & { matchID?: string };

export const useNotificationsConfigModifier = ({
  config,
  playerID,
  mode,
}: {
  config: IConfig;
  playerID: string;
  mode: GameMode;
}) => {
  const notify = useNotify();

  const handleBeginTurn = (G: any, ctx: Ctx) => {
    config.game.turn?.onBegin?.(G, ctx);

    const notifications = new Notifications(ctx, config, playerID, mode);
    notifications.reset();
    if (notifications.canBeNotified()) {
      notify();
      notifications.markAsNotified();
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

    if (!notification) return;

    const sound = new Audio(require('./notification.mp3'));
    sound.play();

    notification.onclick = function focusBrowserTab() {
      parent.focus();
      window.focus();
      this.close();
    };
  };
}

class Notifications {
  private gameName: string;
  private matchID?: string;
  private currentPlayer: string;
  private muted: boolean;
  private turn: number;

  constructor(ctx: Ctx, config: IConfig, private playerID: string, private mode: GameMode) {
    this.gameName = config.game.name;
    this.matchID = config.matchID;
    this.currentPlayer = ctx.currentPlayer;
    this.muted = staticContext.muted;
    this.turn = ctx.turn;
  }

  reset() {
    // Considering the user plays a single game per browser tab,
    // we mark all notifications as unread
    const firstTurn = this.turn === 1;
    if (firstTurn) unset(notifications, this.gameName);
  }

  canBeNotified() {
    const isYourTurn = this.playerID === this.currentPlayer;
    const isNotAlreadyNotified = notifications[this.getTurnKey()] == null;
    const isScreenActive = !document.hasFocus();
    const isAllowedGameMode = [GameMode.OnlineFriend, GameMode.AI].includes(this.mode);
    return isNotAlreadyNotified && isYourTurn && isScreenActive && isAllowedGameMode && !this.muted;
  }

  markAsNotified() {
    set(notifications, this.getTurnKey(), true);
  }

  getTurnKey() {
    return `${this.getMatchKey()}."${this.turn}"`;
  }

  getMatchKey() {
    return `${this.gameName}.${this.matchID}`;
  }
}
