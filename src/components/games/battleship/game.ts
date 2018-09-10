import { Game } from 'boardgame.io/core';

export interface Ship {
  player: number;
  cells: Cell[];
}

export interface Cell {
  x: number;
  y: number;
}

export interface Salvo {
  player: number;
  cell: Cell;
  hit: boolean;
  sunk: boolean;
}

export interface BattleshipState {
  ships: Ship[];
  salvos: Salvo[];
}

const VALID_SHIPS_COUNT = {
  5: 1,
  4: 1,
  3: 2,
  2: 1
};

export const BattleshipGame = Game({
  setup: () => ({ ships: [], salvos: [] }),

  moves: {
    setShips(G, ctx, ships: Ship[]) {
      validateShips(parseInt(ctx.currentPlayer), ships); 
      return { ...G, ships: [...G.ships, ...ships] };
    },
    salvo(G, ctx, x, y) {
      return { ...G };
    },
  },
});


// PRIVATE FUNCTIONS
function validateShips(player: number, ships: Ship[]) {
  validateShipsCount(ships);
  validateShipsOwnership(player, ships);
  validateShipsContinuity(ships);
  validateShipsNotOutOfBounds(ships);
  validateShipsNotOverlapping(ships);
}

function validateShipsCount(ships: Ship[]) {
  const shipsLength = ships.map((ship: Ship) => (ship.cells.length));
  const count = {...VALID_SHIPS_COUNT};
  for (const length of shipsLength) {
    if (!(length in count)) {
      throw new Error('Invalid ship length: ' + length);
    }
    count[length]--;
  }
  for (const length of Object.values(count)) {
    if (length !== 0) {
      throw new Error('Invalid ships sizes.');
    }
  }
}

function validateShipsOwnership(player: number, ships: Ship[]) {
  const owners = ships.map((ship: Ship) => (ship.player));
  for (const owner of owners) {
    if (owner !== player) {
      throw new Error('Invalid player owner: ' + owner + ', should be: ' + player);
    }
  }
}

function validateShipsContinuity(ships: Ship[]) {
  for (let ship of ships) {
    if (ship.cells.length < 2) {
      continue;
    }
    let lastCell: Cell = ship.cells[0];
    let vector: Cell = getCellVector(ship.cells[1], ship.cells[0]);
    if (!((Math.abs(vector.x) === 1 && Math.abs(vector.y) === 0) || 
         (Math.abs(vector.x) === 0 && Math.abs(vector.y) === 1))) {
      throw new Error('Ship is not spaced right!');
    }
    for (let i = 1; i < ships.cells; i++) {
      const newVector = getCellVector(cell, lastCell);
      if (newVector.x !== vector.x || newVector.y != vector.y) {
        throw new Error('Ship is not continuous!');
      }
      lastCell = cell;
    }
  }
}

function getCellVector(a: Cell, b: Cell): Cell {
  return {x: a.x - b.x, y: a.y - b.y};
}

function validateShipsNotOutOfBounds(ships: Ship[]) {
  for (let ship of ships) {
    for (let cell of ship.cells) {
      if (cell.x < 0 || cell.x > 9 ||
          cell.y < 0 || cell.y > 9) {
        throw new Error('Ship out of bounds!');
      }
    }
  }
}

function validateShipsNotOverlapping(ships: Ship[]) {
  let cellsUsed = {};
  for (let ship of ships) {
    for (let cell of ship.cells) {
      if (!(cell.x in cellsUsed)) {
        cellsUsed[cell.x] = {};
      }
      if (cellsUsed[cell.x][cell.y]) {
        throw new Error('Overlapping ships!');
      }
      cellsUsed[cell.x][cell.y] = true;
    }
  }
}

