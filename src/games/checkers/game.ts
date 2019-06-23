import { Game, IGameCtx } from '@freeboardgame.org/boardgame.io/core';

export interface IG {
  count: number;
}

export const CheckersGame = Game({
  name: 'checkers',

  setup: () => ({ count: 0 }),

  moves: {
    plusone(G: IG) {
      return { count: G.count + 1 };
    },
  },

  flow: {
    movesPerTurn: 1,
  },
});
