import { numOfHoles, numOfSeedsPerHole, allowCapture } from './constants';
import { INVALID_MOVE } from 'boardgame.io/core';
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
      if (playerId != ctx.currentPlayer) return INVALID_MOVE;

      let seedCount = G.playerHoles[ctx.currentPlayer][id];

      if (!seedCount) return INVALID_MOVE;

      G.playerHoles[ctx.currentPlayer][id] = 0; // remove all seeds from the chosen hole

      let sowToHoleId = id + 1;
      let sowToPlayerId = ctx.currentPlayer;

      let lastHoleId;
      let lastPlayerId;

      for (var seedsInHandCount = seedCount; seedsInHandCount > 0; --seedsInHandCount) {
        lastHoleId = sowToHoleId;
        lastPlayerId = sowToPlayerId;
        if (sowToPlayerId === ctx.currentPlayer && sowToHoleId === 6) {
          // placing 1 in own stash
          G.playerStoreCount[ctx.currentPlayer] += 1;
          sowToPlayerId = sowToPlayerId === '0' ? '1' : '0';
          sowToHoleId = 0;
        } else {
          G.playerHoles[sowToPlayerId][sowToHoleId] += 1;
          if (sowToPlayerId !== ctx.currentPlayer && sowToHoleId === 5) {
            // last hole on oponent side
            sowToPlayerId = sowToPlayerId === '0' ? '1' : '0';
            sowToHoleId = 0;
          } else {
            ++sowToHoleId;
          }
        }
      }

      // capture oponent seeds when last seed sowed is on own side & only one in the hole
      if (
        allowCapture &&
        lastPlayerId === ctx.currentPlayer &&
        lastHoleId < 6 &&
        G.playerHoles[lastPlayerId][lastHoleId] === 1
      ) {
        let otherPlayerId = lastPlayerId === '0' ? '1' : '0';
        let stolenSeedsCount = G.playerHoles[otherPlayerId][5 - lastHoleId];
        if (stolenSeedsCount > 0) {
          G.playerHoles[lastPlayerId === '0' ? '1' : '0'][5 - lastHoleId] = 0;
          G.playerHoles[lastPlayerId][lastHoleId] = 0;
          G.playerStoreCount[ctx.currentPlayer] += stolenSeedsCount + 1;
        }
      }
      if (sowToPlayerId === ctx.currentPlayer || sowToHoleId !== 0) {
        // if our last seed was not in own stash
        ctx.events.endTurn();
      }
    },
  },
  flow: {
    movesPerTurn: 1,
  },
  endIf: (G) => {
    let boardEmpty = !G.playerHoles['0'].reduce((a, b) => a + b) || !G.playerHoles['1'].reduce((a, b) => a + b);
    if (boardEmpty) {
      if (G.playerStoreCount['0'] === G.playerStoreCount['1']) return { draw: true };
      return {
        winner: G.playerStoreCount['0'] > G.playerStoreCount['1'] ? '0' : '1',
      };
    }
  },
};
