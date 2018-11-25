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

export interface ISeabattleState {
  ships: IShip[];
  salvos: ISalvo[];
}

interface ICtx {
  currentPlayer: string;
}

const VALID_SHIPS_SIZES: number[] = [5, 4, 3, 2];
const VALID_SHIPS_COUNT: {[size: number]: number} = {
  5: 1,
  4: 1,
  3: 2,
  2: 1,
};

export const SeabattleGame = Game({
  setup: (): ISeabattleState => ({ ships: [], salvos: [] }),

  moves: {
    setShips(G: ISeabattleState, ctx: ICtx, ships: IShip[]) {
      const validation = validateShips(parseInt(ctx.currentPlayer, 10), ships);
      if (!validation.valid) {
        throw new Error(validation.error);
      }
      return { ...G, ships: [...G.ships, ...ships] };
    },
    salvo(G: ISeabattleState, ctx: ICtx, x: number, y: number) {
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
});

// Helper function for generating random ships positioning.
export function generateRandomShips(player: number): IShip[] {
  let result: IShip[];
  do {
    result = [];
    for (const shipSize of VALID_SHIPS_SIZES) {
      const count: number = VALID_SHIPS_COUNT[shipSize];
      for (let i = 0; i < count; i++) {
        result.push(randomlyGetShip(player, shipSize));
      }
    }
  } while (!validateShips(player, result).valid);
  return result;
}

// PRIVATE FUNCTIONS
function randomlyGetShip(player: number, shipSize: number): IShip {
  const cell: ICell = {x: getRandomInt(10), y: getRandomInt(10)};
  const direction = getRandomInt(2) === 1 ? 'H' : 'V';
  const ship: IShip = {player,  cells: [], sunk: false};
  for (let i = 0; i < shipSize; i++) {
    if (direction === 'H') { // Constant y
      ship.cells.push({...cell, x: (cell.x + i)});
    } else { // Constant x
      ship.cells.push({...cell, y: (cell.y + i)});
    }
  }
  return ship;
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

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

interface IShipsValidationResult {
  valid: boolean;
  error?: string;
}

function validateShips(player: number, ships: IShip[]): IShipsValidationResult {
  const validations = [validateShipsCount(ships),
                 validateShipsOwnership(player, ships),
                 validateShipsContinuity(ships),
                 validateShipsNotOutOfBounds(ships),
                 validateShipsNotOverlapping(ships)];
  for (const validation of validations) {
    if (!validation.valid) {
      return validation;
    }
  }
  return {valid: true};
}

function validateShipsCount(ships: IShip[]): IShipsValidationResult {
  const shipsLength = ships.map((ship: IShip) => (ship.cells.length));
  const count: {[key: number]: number} = {...VALID_SHIPS_COUNT};
  for (const length of shipsLength) {
    if (!(length in count)) {
      return {valid: false, error: `Invalid ship length: ${length}`};
    }
    count[length]--;
  }
  for (const length of Object.values(count)) {
    if (length !== 0) {
      return {valid: false, error: 'Invalid ships sizes.'};
    }
  }
  return {valid: true};
}

function validateShipsOwnership(player: number, ships: IShip[]): IShipsValidationResult {
  const owners = ships.map((ship: IShip) => (ship.player));
  for (const owner of owners) {
    if (owner !== player) {
      return {valid: false, error: `Invalid player owner: ${owner} should be: ${player}`};
    }
  }
  return {valid: true};
}

function validateShipsContinuity(ships: IShip[]): IShipsValidationResult {
  for (const ship of ships) {
    if (ship.cells.length < 2) {
      continue;
    }
    let lastICell: ICell = ship.cells[0];
    const vector: ICell = getCellVector(ship.cells[1], ship.cells[0]);
    if (!((Math.abs(vector.x) === 1 && Math.abs(vector.y) === 0) ||
         (Math.abs(vector.x) === 0 && Math.abs(vector.y) === 1))) {
      return {valid: false, error: `IShip is not spaced right!`};
    }
    for (let i = 1; i < ship.cells.length; i++) {
      const cell = ship.cells[i];
      const newVector = getCellVector(cell, lastICell);
      if (newVector.x !== vector.x || newVector.y !== vector.y) {
        return {valid: false, error: `IShip is not continuous!`};
      }
      lastICell = cell;
    }
  }
  return {valid: true};
}

function getCellVector(a: ICell, b: ICell): ICell {
  return {x: a.x - b.x, y: a.y - b.y};
}

function validateShipsNotOutOfBounds(ships: IShip[]): IShipsValidationResult {
  for (const ship of ships) {
    for (const cell of ship.cells) {
      if (cell.x < 0 || cell.x > 9 ||
          cell.y < 0 || cell.y > 9) {
        return {valid: false, error: `IShip out of bounds!`};
      }
    }
  }
  return {valid: true};
}

function validateShipsNotOverlapping(ships: IShip[]): IShipsValidationResult {
  const cellsUsed: {[x: number]: {[y: number]: boolean}} = {};
  for (const ship of ships) {
    for (const cell of ship.cells) {
      if (!(cell.x in cellsUsed)) {
        cellsUsed[cell.x] = {};
      }
      if (cellsUsed[cell.x][cell.y]) {
        return {valid: false, error: `Overlapping ships!`};
      }
      cellsUsed[cell.x][cell.y] = true;
    }
  }
  return {valid: true};
}
