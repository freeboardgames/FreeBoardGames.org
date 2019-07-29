import { IGameFlowPhase, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { IG } from '../game';
import { Phase } from './index';

export const robberPhase: IGameFlowPhase = {
  movesPerTurn: 1,
  allowedMoves: ['moveRobber'],
  onMove: (G: IG, ctx) =>
    ctx.events.endPhase({
      next: G.players.some(player => player.resources.reduce((acc, resource) => acc + resource, 0) > 7)
        ? Phase.Discard
        : Phase.Game,
    }),
};

export function moveRobber(G: IG, _: IGameCtx, index: number): IG | string {
  if (G.robber === index) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    robber: index,
  };
}
