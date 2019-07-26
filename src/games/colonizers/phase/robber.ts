import { IGameFlowPhase, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { IG } from '../game';
import { Phase } from './index';

export const robberPhase: IGameFlowPhase = {
  movesPerTurn: 1,
  allowedMoves: ['moveRobber'],
  onMove: (_, ctx) => ctx.events.endPhase({ next: Phase.Game }),
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
