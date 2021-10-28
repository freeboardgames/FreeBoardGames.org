import { Ctx } from 'boardgame.io';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { isPlayersTurn } from 'gamesShared/helpers/GameUtil';
import { useCurrentGameTranslation, useTranslation } from 'infra/i18n';
import { set, unset } from 'lodash';
import sound from './notification.mp3';
import { notify } from './notify';
import { staticContext } from './Provider';

const notifications = {};

type UseNotificationsHandlerNamedArgs = {
  matchID: string;
  playerID: string;
  mode: GameMode;
  game: IGameDef;
};

export const useNotificationsHandler = ({ matchID, playerID, mode, game }: UseNotificationsHandlerNamedArgs) => {
  const notify = useNotify();

  const handleBeginTurn = (G: any, ctx: Ctx) => {
    const notifications = new Notifications(ctx, game, matchID, playerID, mode);
    notifications.reset();
    if (notifications.canBeNotified()) {
      notify();
      notifications.markAsNotified();
    }
  };

  return { handleBeginTurn };
};

function useNotify() {
  const { translate } = useCurrentGameTranslation();
  const [t] = useTranslation('notifications');

  return async () => {
    const title = t('your_turn', { name: translate('name') });
    const notification = await notify(title, {});

    if (!notification) return;

    const audio = new Audio(sound);
    audio.play();

    notification.onclick = function focusBrowserTab() {
      parent.focus();
      window.focus();
      this.close();
    };
  };
}

class Notifications {
  private gameName: string;
  private isYourTurn: boolean;
  private muted: boolean;
  private turn: number;

  constructor(ctx: Ctx, game: any, private matchID: string, playerID: string, private mode: GameMode) {
    this.gameName = game.name;
    this.isYourTurn = isPlayersTurn(playerID, ctx);
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
    const isNotAlreadyNotified = notifications[this.getTurnKey()] == null;
    const isScreenActive = !document.hasFocus();
    const isAllowedGameMode = [GameMode.OnlineFriend, GameMode.AI].includes(this.mode);
    return isNotAlreadyNotified && this.isYourTurn && isScreenActive && isAllowedGameMode && !this.muted;
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
