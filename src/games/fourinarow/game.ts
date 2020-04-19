import { numOfColumns, numOfRows, neededToWin } from './constants';
import { Game } from 'boardgame.io';

function checkCellForVictory(grid: number[][], colId: any, rowId: any, player: any) {
  let fourCells = new Array(neededToWin);

  // check horizontally
  for (var i = 0; i < neededToWin; i++) {
    try {
      fourCells[i] = grid[colId][rowId + i];
    } catch (e) {
      fourCells[i] = null;
    }
  }
  if (
    fourCells.every(function (val) {
      return val === player;
    })
  ) {
    return true;
  }

  // check vertically
  for (var i = 0; i < neededToWin; i++) {
    try {
      fourCells[i] = grid[colId + i][rowId];
    } catch (e) {
      fourCells[i] = null;
    }
  }
  if (
    fourCells.every(function (val) {
      return val === player;
    })
  ) {
    return true;
  }

  // check diagonally-downwards
  for (var i = 0; i < neededToWin; i++) {
    try {
      fourCells[i] = grid[colId + i][rowId + i];
    } catch (e) {
      fourCells[i] = null;
    }
  }
  if (
    fourCells.every(function (val) {
      return val === player;
    })
  ) {
    return true;
  }

  // check diagonally-upwards
  for (var i = 0; i < neededToWin; i++) {
    try {
      fourCells[i] = grid[colId - i][rowId + i];
    } catch (e) {
      fourCells[i] = null;
    }
  }
  if (
    fourCells.every(function (val) {
      return val === player;
    })
  ) {
    return true;
  }
}

export function isVictory(grid: number[][], player: any) {
  for (var colId = 0; colId < numOfColumns; colId++) {
    for (var rowId = 0; rowId < numOfRows; rowId++) {
      if (checkCellForVictory(grid, colId, rowId, player)) {
        return true;
      }
    }
  }
  return false;
}

export function isDraw(grid: number[][]) {
  for (var colIdx = numOfColumns - 1; colIdx >= 0; colIdx--) {
    for (var rowIdx = numOfRows - 1; rowIdx >= 0; rowIdx--) {
      if (grid[colIdx][rowIdx] === null) {
        return false;
      }
    }
  }
  return true;
}

export function generateGrid() {
  const grid: any = {};
  for (var rowIdx = 0; rowIdx < numOfColumns; rowIdx++) {
    grid[rowIdx] = Array(numOfRows).fill(null);
  }
  return grid;
}

export const ConnectFourGame: Game = {
  name: 'fourinarow',

  setup: () => {
    return { grid: generateGrid() };
  },

  moves: {
    selectColumn(G, ctx, id) {
      const colId = Math.floor(id / 10);
      for (var rowID = numOfRows - 1; rowID >= 0; rowID--) {
        if (G.grid[colId][rowID] === null) {
          G.grid[colId][rowID] = ctx.currentPlayer;
          return;
        }
      }
      // return { ...G, grid };
    },
  },
  turn: {
    moveLimit: 1,
  },
  endIf: (G, ctx) => {
    if (isVictory(G.grid, ctx.currentPlayer)) {
      return { winner: ctx.currentPlayer };
    }
    if (isDraw(G.grid)) {
      return { draw: true };
    }
  },
};
