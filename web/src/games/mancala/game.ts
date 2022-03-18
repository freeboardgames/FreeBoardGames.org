import { numOfHoles, numOfSeedsPerHole, allowCapture } from './constants';
import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx, Game } from 'boardgame.io';

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

export const MancalaGame: Game<IG> = {
  name: 'mancala',
  setup: () => {
    return {
      playerHoles: [generatePlayerHoles(), generatePlayerHoles()],
      playerStoreCount: [0, 0],
    };
  },
  moves: {
    sowSeeds(G: IG, ctx: Ctx, playerId: string, holeId: number) {
      if (playerId != ctx.currentPlayer) return INVALID_MOVE;

      let seedCount = G.playerHoles[ctx.currentPlayer][holeId];

      if (!seedCount) return INVALID_MOVE;

      G.playerHoles[ctx.currentPlayer][holeId] = 0; // remove all seeds from the chosen hole

      let sowToHoleId = holeId + 1;
      let sowToPlayerId = ctx.currentPlayer;

      let lastHoleId: number;
      let lastPlayerId: string;

      for (var seedsInHandCount = seedCount; seedsInHandCount > 0; --seedsInHandCount) {
        lastHoleId = sowToHoleId;
        lastPlayerId = sowToPlayerId;
        if (sowToPlayerId === ctx.currentPlayer && sowToHoleId === numOfHoles) {
          // placing 1 in own stash
          G.playerStoreCount[ctx.currentPlayer] += 1;
          sowToPlayerId = sowToPlayerId === '0' ? '1' : '0';
          sowToHoleId = 0;
        } else {
          G.playerHoles[sowToPlayerId][sowToHoleId] += 1;
          if (sowToPlayerId !== ctx.currentPlayer && sowToHoleId === numOfHoles - 1) {
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
        lastHoleId < numOfHoles &&
        G.playerHoles[lastPlayerId][lastHoleId] === 1
      ) {
        let otherPlayerId = lastPlayerId === '0' ? '1' : '0';
        let stolenSeedsCount = G.playerHoles[otherPlayerId][numOfHoles - 1 - lastHoleId];
        if (stolenSeedsCount > 0) {
          G.playerHoles[lastPlayerId === '0' ? '1' : '0'][numOfHoles - 1 - lastHoleId] = 0;
          G.playerHoles[lastPlayerId][lastHoleId] = 0;
          G.playerStoreCount[ctx.currentPlayer] += stolenSeedsCount + 1;
        }
      }

      // if a player has run out of stones then move all stones off the board
      let totalStonesInPlayPlayer0 = G.playerHoles['0'].reduce((a, b) => a + b);
      let totalStonesInPlayPlayer1 = G.playerHoles['1'].reduce((a, b) => a + b);
      if (totalStonesInPlayPlayer0 < 1 || totalStonesInPlayPlayer1 < 1) {
        if (totalStonesInPlayPlayer0) {
          G.playerHoles['0'].fill(0);
          G.playerStoreCount['0'] += totalStonesInPlayPlayer0;
        }
        if (totalStonesInPlayPlayer1) {
          G.playerHoles['1'].fill(0);
          G.playerStoreCount['1'] += totalStonesInPlayPlayer1;
        }
      }

      // end the turn if our last seed was not in own stash
      if (sowToPlayerId === ctx.currentPlayer || sowToHoleId !== 0) {
        ctx.events.endTurn();
      }
    },
  },
  turn: {
    minMoves: 1,
  },
  endIf: (G) => {
    let totalStonesInPlayPlayer0 = G.playerHoles['0'].reduce((a, b) => a + b);
    let totalStonesInPlayPlayer1 = G.playerHoles['1'].reduce((a, b) => a + b);
    if (totalStonesInPlayPlayer0 < 1 || totalStonesInPlayPlayer1 < 1) {
      if (G.playerStoreCount['0'] === G.playerStoreCount['1']) return { draw: true };
      return {
        winner: G.playerStoreCount['0'] > G.playerStoreCount['1'] ? '0' : '1',
      };
    }
  },
};
