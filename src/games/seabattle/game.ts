import { Game, TurnOrder } from '@freeboardgame.org/boardgame.io/core';
import { VALID_SETUP_PLAYER_LOST0, VALID_SETUP_PLAYER_LOST1 } from './mocks';
import shortid from 'shortid';

export interface IShip {
  player: number;
  cells: ICell[];
  sunk: boolean;
  id?: string;
}

export interface ICell {
  x: number;
  y: number;
}

export interface ISalvo {
  player: number;
  cell: ICell;
  hit: boolean;
  hitShip?: string;
}

export interface ISeabattleState {
  ships: IShip[];
  salvos: ISalvo[];
}

interface ICtx {
  playerID?: string;
}

const VALID_SHIPS_SIZES: number[] = [5, 4, 3, 2];
const VALID_SHIPS_COUNT: { [size: number]: number } = {
  5: 1,
  4: 1,
  3: 2,
  2: 1,
};

export const playerView = (G: ISeabattleState, ctx: ICtx, playerID: string): ISeabattleState => {
  const player = parseInt(playerID, 10);
  const ships: IShip[] = G.ships.filter((ship) => (ship.player === player || ship.sunk));
  return {
    ...G,
    ships,
  };
};

export const SeabattleGame = Game({
  name: 'seabattle',

  setup: (): ISeabattleState => ({
    ships: [],
    salvos: [],
  }),

  moves: {
    setShips(G: ISeabattleState, ctx: ICtx, ships: IShip[]) {
      const player = parseInt(ctx.playerID, 10);
      const validation = validateShips(ships, player);
      if (!validation.valid) {
        throw new Error(validation.error);
      }
      return { ...G, ships: [...G.ships, ...ships] };
    },
    salvo(G: ISeabattleState, ctx: ICtx, x: number, y: number) {
      const player = parseInt(ctx.playerID, 10);
      const shipIndex = findShipWithCell(G.ships, { x, y }, player);
      // Do not allow the same cells to be shot twice
      const uniqueMove = G.salvos.filter((salvo) => (
        salvo.player === player &&
        salvo.cell.x === x &&
        salvo.cell.y === y),
      ).length === 0;
      if (!uniqueMove) {
        return { ...G };
      }
      if (shipIndex === -1) { // Miss
        return { ...G, salvos: [...G.salvos, { player, hit: false, cell: { x, y } }] };
      }
      const ship = G.ships[shipIndex];
      // Hit
      const newShips = [...G.ships];
      if (countShipHits(G.salvos, ship.id) + 1 === ship.cells.length) {
        newShips[shipIndex] = { ...newShips[shipIndex], sunk: true };
      }
      return {
        ...G,
        ships: newShips,
        salvos: [...G.salvos, { player, hit: true, cell: { x, y }, hitShip: ship.id }],
      };
    },
  },

  flow: {
    startingPhase: 'setup',
    phases: {
      setup: {
        allowedMoves: ['setShips'],
        turnOrder: TurnOrder.ANY_ONCE,
        next: 'play',
      },
      play: {
        endGameIf: (G, ctx) => {
          if (checkAllShipsSunk(G.ships, 0)) {
            return { winner: '1' };
          }
          if (checkAllShipsSunk(G.ships, 1)) {
            return { winner: '0' };
          }
        },
        allowedMoves: ['salvo'],
        movesPerTurn: 1,
      },
    },
  },

  playerView,
});

// Helper function for generating random ships positioning.
export function generateRandomShips(player: number): IShip[] {
  let result: IShip[];
  let shipID;
  do {
    result = [];
    for (const shipSize of VALID_SHIPS_SIZES) {
      const count: number = VALID_SHIPS_COUNT[shipSize];
      for (let i = 0; i < count; i++) {
        shipID = shortid.generate();
        result.push(randomlyGetShip(player, shipSize, shipID));
      }
    }
  } while (!validateShips(result, player).valid);
  return result;
}

// Wheather a setup is valid or not.
export function validateShips(ships: IShip[], player?: number): IShipsValidationResult {
  const validations = [validateShipsCount(ships),
  validateShipsContinuity(ships),
  validateShipsNotOutOfBounds(ships),
  validateShipsNotOverlapping(ships),
  validateShipsHaveUniqueIDs(ships)];
  if (player !== undefined) {
    validations.push(validateShipsOwnership(player, ships));
  }
  for (const validation of validations) {
    if (!validation.valid) {
      return validation;
    }
  }
  return { valid: true };
}

// PRIVATE FUNCTIONS
function checkAllShipsSunk(ships: IShip[], player: number): boolean {
  for (const ship of ships) {
    if (ship.player === player && !ship.sunk) {
      return false;
    }
  }
  return true;
}

function randomlyGetShip(player: number, shipSize: number, id: string): IShip {
  const cell: ICell = { x: getRandomInt(10), y: getRandomInt(10) };
  const direction = getRandomInt(2) === 1 ? 'H' : 'V';
  const ship: IShip = { player, cells: [], sunk: false, id };
  for (let i = 0; i < shipSize; i++) {
    if (direction === 'H') { // Constant y
      ship.cells.push({ ...cell, x: (cell.x + i) });
    } else { // Constant x
      ship.cells.push({ ...cell, y: (cell.y + i) });
    }
  }
  return ship;
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function findShipWithCell(ships: IShip[], cell: ICell, player: number): number {
  return ships.findIndex(
    (ship) => ship.cells.findIndex(
      (c) => c.x === cell.x && c.y === cell.y,
    ) !== -1 && ship.player !== player,
  );
}

function countShipHits(salvos: ISalvo[], shipId: string): number {
  return salvos.filter((s) => s.hitShip === shipId).length;
}

interface IShipsValidationResult {
  valid: boolean;
  error?: string;
}

function validateShipsCount(ships: IShip[]): IShipsValidationResult {
  const shipsLength = ships.map((ship: IShip) => (ship.cells.length));
  const count: { [key: number]: number } = { ...VALID_SHIPS_COUNT };
  for (const length of shipsLength) {
    if (!(length in count)) {
      return { valid: false, error: `Invalid ship length: ${length}` };
    }
    count[length]--;
  }
  for (const length of Object.values(count)) {
    if (length !== 0) {
      return { valid: false, error: 'Invalid ships sizes.' };
    }
  }
  return { valid: true };
}

function validateShipsOwnership(player: number, ships: IShip[]): IShipsValidationResult {
  const owners = ships.map((ship: IShip) => (ship.player));
  for (const owner of owners) {
    if (owner !== player) {
      return { valid: false, error: `Invalid player owner: ${owner} should be: ${player}` };
    }
  }
  return { valid: true };
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
      return { valid: false, error: `IShip is not spaced right!` };
    }
    for (let i = 1; i < ship.cells.length; i++) {
      const cell = ship.cells[i];
      const newVector = getCellVector(cell, lastICell);
      if (newVector.x !== vector.x || newVector.y !== vector.y) {
        return { valid: false, error: `IShip is not continuous!` };
      }
      lastICell = cell;
    }
  }
  return { valid: true };
}

export function getCellVector(a: ICell, b: ICell): ICell {
  return { x: a.x - b.x, y: a.y - b.y };
}

function validateShipsHaveUniqueIDs(ships: IShip[]): IShipsValidationResult {
  const usedIDs: { [id: string]: boolean; } = {};
  for (const ship of ships) {
    if (usedIDs[ship.id]) {
      return { valid: false, error: `IShip IDs are not unique!` };
    }
    usedIDs[ship.id] = true;
  }
  return { valid: true };
}

function validateShipsNotOutOfBounds(ships: IShip[]): IShipsValidationResult {
  for (const ship of ships) {
    for (const cell of ship.cells) {
      if (cell.x < 0 || cell.x > 9 ||
        cell.y < 0 || cell.y > 9) {
        return { valid: false, error: `IShip out of bounds!` };
      }
    }
  }
  return { valid: true };
}

function validateShipsNotOverlapping(ships: IShip[]): IShipsValidationResult {
  const cellsUsed: { [x: number]: { [y: number]: boolean } } = {};
  for (const ship of ships) {
    for (const cell of ship.cells) {
      if (!(cell.x in cellsUsed)) {
        cellsUsed[cell.x] = {};
      }
      if (cellsUsed[cell.x][cell.y]) {
        return { valid: false, error: `Overlapping ships!` };
      }
      cellsUsed[cell.x][cell.y] = true;
    }
  }
  return { valid: true };
}
