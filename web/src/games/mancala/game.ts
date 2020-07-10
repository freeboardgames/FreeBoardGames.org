import { numOfHoles, numOfSeedsPerHole } from './constants';
// import { Ctx } from 'boardgame.io';

function generatePlayerHoles() {
  const holes = [];
  for (let i = 0; i < numOfHoles; i++) {
    holes.push(numOfSeedsPerHole);
  }
  return holes;
}

export interface IG {
  playerHoles: Array<Array<number>>;
  playerStoreCount: Array<number>;
}

export const MancalaGame = {
  name: 'mancala',
  setup: () => {
    return {
      playerHoles: [generatePlayerHoles(), generatePlayerHoles()],
      playerStoreCount: [0, 0],
    };
  },
  moves: {
    sowSeeds(G, ctx, playerId, id) {
      if (playerId == ctx.currentPlayer) {
        let seedCount = G.playerHoles[ctx.currentPlayer][id];
        G.playerHoles[ctx.currentPlayer][id] = 0;

        let sowToHoleId = id + 1;

        for (var seedsInHandCount = seedCount; seedsInHandCount >= 0; seedsInHandCount--) {
          G.playerHoles[ctx.currentPlayer][sowToHoleId] += 1;
          ++sowToHoleId;
        }
      }
    },
  },
  flow: {
    movesPerTurn: 1,
  },
};
