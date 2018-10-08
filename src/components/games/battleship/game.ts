import { Game } from 'boardgame.io/core';

export interface IShip {
  player: number;
  cells: ICell[];
  sunk: boolean;
}

export interface ICell {
  x: number;
  y: number;
}

export interface ISalvo {
  player: number;
  cell: ICell;
  hit: boolean;
  hitShip?: number;
}

export interface IBattleshipState {
  ships: IShip[];
  salvos: ISalvo[];
}

interface ICtx {
  currentPlayer: string;
}

const VALID_SHIPS_COUNT = {
  5: 1,
  4: 1,
  3: 2,
  2: 1,
};

export const BattleshipGame = Game({
  setup: (): IBattleshipState => ({ ships: [], salvos: [] }),

  moves: {
    setShips(G: IBattleshipState, ctx: ICtx, ships: IShip[]) {
      validateShips(parseInt(ctx.currentPlayer, 10), ships);
      return { ...G, ships: [...G.ships, ...ships] };
    },
    salvo(G: IBattleshipState, ctx: ICtx, x: number, y: number) {
      const player = parseInt(ctx.currentPlayer, 10);
      // Avoid another salvo if the last was a miss.
      if (G.salvos.length > 0 &&
          G.salvos[G.salvos.length - 1].player ===  player &&
          !G.salvos[G.salvos.length - 1].hit) {
        return { ...G };
      }
      const shipIndex = findShipWithCell(G.ships, {x, y});
      if (shipIndex === -1) { // Miss
        return { ...G, salvos: [...G.salvos, { player, hit: false, cell: { x, y }}] };
      }
      // Hit
      const newShips = [ ... G.ships ];
      if (countShipHits(G.salvos, shipIndex) + 1 === G.ships[shipIndex].cells.length) {
        newShips[shipIndex].sunk = true;
      }
      return { ...G,
               ships: newShips,
               salvos: [...G.salvos, { player, hit: true, cell: { x, y }, hitShip: shipIndex}],
             };
      },
    },
  };
})

// PRIVATE FUNCTIONS
function findShipWithCell(ships: IShip[], cell: ICell): number {
  return ships.findIndex(
    (ship) => ship.cells.findIndex(
      (c) => c.x === cell.x && c.y === cell.y,
    ) !== -1,
  );
}

function countShipHits(salvos: ISalvo[], shipIndex: number): number {
  return salvos.filter((s) => s.hitShip === shipIndex).length;
}

function validateShips(player: number, ships: IShip[]) {
  validateShipsCount(ships);
  validateShipsOwnership(player, ships);
  validateShipsContinuity(ships);
  validateShipsNotOutOfBounds(ships);
  validateShipsNotOverlapping(ships);
}

function validateShipsCount(ships: IShip[]) {
  const shipsLength = ships.map((ship: IShip) => (ship.cells.length));
  const count: {[key: number]: number} = {...VALID_SHIPS_COUNT};
  for (const length of shipsLength) {
    if (!(length in count)) {
      throw new Error(`Invalid ship length: ${length}`);
    }
    count[length]--;
  }
  for (const length of Object.values(count)) {
    if (length !== 0) {
      throw new Error('Invalid ships sizes.');
    }
  }
}

function validateShipsOwnership(player: number, ships: IShip[]) {
  const owners = ships.map((ship: IShip) => (ship.player));
  for (const owner of owners) {
    if (owner !== player) {
      throw new Error(`Invalid player owner: ${owner} should be: ${player}`);
    }
  }
}

function validateShipsContinuity(ships: IShip[]) {
  for (const ship of ships) {
    if (ship.cells.length < 2) {
      continue;
    }
    let lastICell: ICell = ship.cells[0];
    const vector: ICell = getCellVector(ship.cells[1], ship.cells[0]);
    if (!((Math.abs(vector.x) === 1 && Math.abs(vector.y) === 0) ||
         (Math.abs(vector.x) === 0 && Math.abs(vector.y) === 1))) {
      throw new Error('IShip is not spaced right!');
    }
    for (let i = 1; i < ship.cells.length; i++) {
      const cell = ship.cells[i];
      const newVector = getCellVector(cell, lastICell);
      if (newVector.x !== vector.x || newVector.y !== vector.y) {
        throw new Error('IShip is not continuous!');
      }
      lastICell = cell;
    }
  }
}

function getCellVector(a: ICell, b: ICell): ICell {
  return {x: a.x - b.x, y: a.y - b.y};
}

function validateShipsNotOutOfBounds(ships: IShip[]) {
  for (const ship of ships) {
    for (const cell of ship.cells) {
      if (cell.x < 0 || cell.x > 9 ||
          cell.y < 0 || cell.y > 9) {
        throw new Error('IShip out of bounds!');
      }
    }
  }
}

function validateShipsNotOverlapping(ships: IShip[]) {
  const cellsUsed: {[x: number]: {[y: number]: boolean}} = {};
  for (const ship of ships) {
    for (const cell of ship.cells) {
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
