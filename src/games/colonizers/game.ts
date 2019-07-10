import { Game, IGameArgs } from '@freeboardgame.org/boardgame.io/core';

const DIRS: ICoords[] = [
  { x: 0, y: 1, z: -1 },
  { x: 1, y: 0, z: -1 },
  { x: 1, y: -1, z: 0 },
  { x: 0, y: -1, z: 1 },
  { x: -1, y: 0, z: 1 },
  { x: -1, y: 1, z: 0 },
];

enum Resource {
  Ore, // Mountains
  Grain, // Fields
  Lumber, // Forest
  Wool, // Pasture
  Brick, // Hills
  Nothing, // Desert
}

export enum Development {
  Knight,
  Progress,
  Victory,
}

enum Building {
  Settlement,
  City,
}

interface ICoords {
  x: number;
  y: number;
  z?: number;
}

class Tile {
  pos: ICoords;
  number: number;
  buildings: number[]; // Adjacent building indices
  roads: number[]; // Adjacent road indices
  type: Resource;

  constructor(pos: ICoords) {
    this.number = 0;
    this.pos = pos;
    this.buildings = new Array(6);
    this.roads = new Array(6);
  }
}

interface IG {
  tiles: Tile[];
  buildings: Building[];
  roads: boolean[];
}

function sumCoords(a: ICoords, b: ICoords) {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

function inBounds(pos: ICoords) {
  return pos.x >= -2 && pos.x <= 2 && pos.y >= -2 && pos.y <= 2 && pos.z >= -2 && pos.z <= 2;
}

function toIndex(coords: ICoords): number {
  return coords.x + 2 + 5 * (coords.y + 2);
}

export function toPosition(index: number): ICoords {
  const x = (index % 5) - 2;
  const y = Math.floor(index / 5) - 2;

  return {
    x,
    y,
    z: -x - y,
  };
}

const GameConfig: IGameArgs = {
  name: 'colonizers',
  flow: {},
  moves: {},
  setup: (): IG => {
    // Init tiles
    let tiles: Tile[] = new Array();
    for (let x = -2; x <= 2; x++) {
      for (let y = -2; y <= 2; y++) {
        for (let z = -2; z <= 2; z++) {
          if (x + y + z === 0) {
            tiles[toIndex({ x, y })] = new Tile({ x, y, z });
          }
        }
      }
    }

    // Init roads and buildings
    let roads: boolean[] = [];
    let buildings: Building[] = [];
    tiles.forEach(tile => {
      DIRS.forEach((dir, i) => {
        if (typeof tile.roads[i] === 'undefined') {
          roads.push(false);
          tile.roads[i] = roads.length - 1;
          // Check if adjacent tile exists
          const sum = sumCoords(tile.pos, dir);
          if (inBounds(sum)) {
            tiles[toIndex(sum)].roads[(i + 3) % 6] = roads.length - 1;
          }
        }

        if (typeof tile.buildings[i] === 'undefined') {
          buildings.push(null);
          tile.buildings[i] = buildings.length - 1;

          const sumUp = sumCoords(tile.pos, dir);
          if (inBounds(sumUp)) {
            tiles[toIndex(sumUp)].buildings[(i + 2) % 6] = buildings.length - 1;
          }

          const sumRight = sumCoords(tile.pos, DIRS[(i + 1) % 6]);
          if (inBounds(sumRight)) {
            tiles[toIndex(sumRight)].buildings[(i + 4) % 6] = buildings.length - 1;
          }
        }
      });
    });

    return {
      tiles,
      buildings,
      roads,
    };
  },
};

export const ColonizersGame = Game(GameConfig);
