import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'fbg-games/gamesShared/definitions/game';
import { isOnlineGame, isAIGame } from './gameMode';

/** Whether given player should play now or not. */
export function isPlayersTurn(player: string, ctx: Ctx): boolean {
  const isActive = ctx.activePlayers !== null && player in ctx.activePlayers;
  const isCurrentPlayer = ctx.activePlayers === null && ctx.currentPlayer === player;
  return isActive || isCurrentPlayer;
}

/** Whether user is spectating the match. */
export function isSpectator(playerID: string | null) {
  return playerID === null;
}

/** Whether the whole view is for a single player of the game.  */
export function isFirstPersonView(gameArgs: IGameArgs, playerID: string | null) {
  return (isOnlineGame(gameArgs) || isAIGame(gameArgs)) && !isSpectator(playerID);
}