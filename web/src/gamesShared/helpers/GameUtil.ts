import { Ctx } from 'boardgame.io';

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
