import { Game } from 'boardgame.io';
import { IGameState } from './definitions';
import { shuffleArray } from './utils';

export const BingoGame: Game<IGameState> = {
  name: 'bingo',
  setup: (ctx) => {
    const playerNumbers = {};
    for (let i = 0; i < ctx.numPlayers; i++) {
      // generate the grid numbers
      let gridNumbers = [];
      for (let s = 0; s < 5; s++) {
        gridNumbers = [
          ...gridNumbers,
          ...shuffleArray(new Array(15).fill(0).map((n, idx) => idx + 1 + s * 15)).slice(0, 5),
        ];
      }
      // assign number to players
      playerNumbers[i] = gridNumbers.map((n, idx) => ({
        id: idx,
        value: n,
        marked: false,
        missed: false,
      }));
    }

    return {
      playerNumbers,
      callQueue: shuffleArray(new Array(15 * 5).fill(0).map((n, idx) => idx + 1)),
      callRef: 0,
    };
  },
  moves: {
    incrementCallRef: (G: IGameState) => {
      G.callRef = G.callRef + 1;
      return G;
    },
  },
  endIf: () => {},
};
