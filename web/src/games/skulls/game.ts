// import { Ctx } from 'boardgame.io';
//

export interface IG {
  count: number;
}

export const FooBarGame = {
  name: 'skulls',

  setup: () => ({ count: 0 }),

  moves: {
    plusone(G: IG) {
      return { count: G.count + 1 };
    },
  },

  flow: {
    movesPerTurn: 1,
  },
};
