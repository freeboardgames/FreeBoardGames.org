import { IGameCtx } from 'boardgame.io/core';

export interface IG {
  count: number;
}

export const FooBarGame = Game ({
  name: 'foobar',

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