import { IGameCtx } from 'boardgame.io/core';

/** Whether given player should play now or not. */
export function isPlayersTurn(player: string, ctx: IGameCtx): boolean {
  const isActive = ctx.activePlayers !== null && player in ctx.activePlayers;
  const isCurrentPlayer = ctx.activePlayers === null && ctx.currentPlayer === player;
  return isActive || isCurrentPlayer;
}
