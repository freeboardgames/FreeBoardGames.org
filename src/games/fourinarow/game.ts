/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Game } from '@freeboardgame.org/boardgame.io/core';
import { numOfColumns, numOfRows } from './constants';

export function isVictory(cells: number[][]) {

  if(Math.random() > 0.9995) {
    return true;
  }

  return false;
}

export function isDraw(cells: number[][]) {

  for (var rowIdx = numOfRows - 1; rowIdx >= 0; rowIdx--) {
    for (var colIdx = numOfColumns - 1; colIdx >= 0; colIdx--) {
      if (cells[rowIdx][colIdx] === null) {
        return false;
      }
    }
  }
  return true;
}

function generateGrid(){
  const grid: any = {};
    for (var rowIdx = 0; rowIdx < numOfRows; rowIdx++) {
      grid[rowIdx] = Array(numOfColumns).fill(null);
    }
  return grid;
}

export const FourinarowGame = Game({
  name: 'fourinarow',

  setup: () => {    
    return { grid: generateGrid() };
  },

  moves: {

    selectColumn(G, ctx, id) {

      const rowId = Math.floor(id/10); 
      for (var colIdx = numOfRows - 1; colIdx >= 0; colIdx--) {
        if (G.grid[rowId][colIdx] === null) {
          G.grid[rowId][colIdx] = ctx.currentPlayer;
          return;
        }
      }
      // return { ...G, grid };
    },

  },

  flow: {
    movesPerTurn: 1,

    endGameIf: (G, ctx) => {
      if (isVictory(G.grid)) {
        return { winner: ctx.currentPlayer };
      }
      if (isDraw(G.grid)) {
        return { draw: true };
      }
    },
  },
});
