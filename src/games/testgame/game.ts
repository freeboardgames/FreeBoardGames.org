/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Game } from '@freeboardgame.org/boardgame.io/core';

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

  for (const pos of positions) {
    // find the first non-wildcard character in winning positions array
    let symbol = cells[pos[0]];
    for (const j in pos) {
      if (cells[pos[j]] !== '2') {
        symbol = cells[pos[j]];
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
    if (winner != null) {
      return true;
    }
  }

  return false;
}

export const TictactoeGame = Game({
  name: 'tictactoe',

  setup: () => ({
    cells: Array(16).fill(null),
  }),

  moves: {
    clickCell(G: any, ctx: any, id: number) {
      const cells = [...G.cells];

      if (cells[id] === null) {
        if (Math.random() > 0.3 && cells.filter(v => v === '2').length < 3) {
          cells[id] = '2';
        } else {
          cells[id] = ctx.currentPlayer;
        }
        return { ...G, cells };
      }
    },
  },

  flow: {
    movesPerTurn: 1,

    endGameIf: (G, ctx) => {
      if (isVictory(G.cells)) {
        return { winner: ctx.currentPlayer };
      }
      if (G.cells.filter((c: any) => c === null).length === 0) {
        return { draw: true };
      }
    },
  },
});
