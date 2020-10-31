import { INVALID_MOVE } from 'boardgame.io/core';
import { IG } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveChosePriest(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
  if (G.mayorID == id) {
    return INVALID_MOVE;
  }
  if (G.deadIDs.includes(id)) {
    return INVALID_MOVE;
  }
  if (G.specialElection == -1){
    if (G.lastPriestID == id) {
      return INVALID_MOVE;
    }
  }

  if (
    G.specialElection == -1 &&
    G.lastMayorID == id &&
    ctx.numPlayers -
      G.deadIDs.reduce((prev, curr) => {
        return curr == -1 ? prev : 1 + prev;
      }, 0) >
      5
  ) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    voting: true,
    priestID: id,
    log: [...G.log, 'Player ' + me.toString() + ' moveChosePriest ' + id.toString()],
  };
}
