import { Game } from 'boardgame.io';

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export function isVictory(cells: string[]) {
  const positions = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  const winCandidates = [];

  for (const pos of positions) {
    // find the first non-wildcard character in winning positions array
    let symbol = null;
    for (const i of pos) {
      if (cells[i] !== '2' && cells[i] !== null) {
        symbol = cells[i];
        break;
      }
    }

    let winner = symbol;
    for (const i of pos) {
      if (cells[i] !== '2') {
        if (cells[i] !== symbol) {
          winner = null;
          break;
        }
      }
    }
    if (winner != null && !winCandidates.includes(winner)) {
      winCandidates.push(winner);
    }
  }

  if (winCandidates.length === 1) {
    return { winner: winCandidates[0] };
  } else if (winCandidates.length === 2) {
    return { draw: true };
  }

  return false;
}

export const TictactoePlusGame: Game = {
  name: 'tictactoeplus',

  setup: () => ({
    cells: Array(16).fill(null),
  }),

  moves: {
    clickCell(G: any, ctx: any, id: number) {
      const cells = [...G.cells];

      if (cells[id] === null) {
        if (ctx.random.D6() === 6 && cells.filter((v) => v === '2').length < 3) {
          cells[id] = '2';
        } else {
          cells[id] = ctx.currentPlayer;
        }
        return { ...G, cells };
      }
    },
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  endIf: (G) => {
    const winner = isVictory(G.cells);
    if (winner) {
      return winner;
    }
    if (G.cells.filter((c: any) => c === null).length === 0) {
      return { draw: true };
    }
  },
};
