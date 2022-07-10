/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export function isVictory(cells: number[]) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pos of positions) {
    const symbol = cells[pos[0]];
    let winner:number|null = symbol;
    for (const i of pos) {
      if (cells[i] !== symbol) {
        winner = null;
        break;
      }
    }
    if (winner != null) {
      return true;
    }
  }

  return false;
}

export const TictactoeGame = {
  name: 'tictactoe',

  setup: () => ({
    cells: Array(9).fill(null),
  }),

  moves: {
    clickCell(G: any, ctx: any, id: number) {
      const cells = [...G.cells];

      if (cells[id] === null) {
        cells[id] = ctx.currentPlayer;
        return { ...G, cells };
      }
    },
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  endIf: (G: any, ctx: any) => {
    if (isVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (G.cells.filter((c: any) => c === null).length === 0) {
      return { draw: true };
    }
  },
};

export default TictactoeGame;