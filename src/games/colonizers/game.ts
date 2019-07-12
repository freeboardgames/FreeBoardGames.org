import { Game, IGameArgs, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';

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

interface IBuilding {
  tileRefs: ITileRef[];
  roadRefs: number[];
  type: Building;
  owner: string;
}

interface IRoad {
  tileRefs: ITileRef[];
  buildingRefs: number[];
  owner: string;
}

interface ICoords {
  x: number;
  y: number;
  z?: number;
}

interface ITileRef {
  tile: number; // Index of one of adjacent tiles
  dir: number; // Edge or corner
}

export class Tile {
  readonly pos: ICoords;
  readonly number: number;
  readonly type: Resource;
  buildings: number[]; // Adjacent building indices
  roads: number[]; // Adjacent road indices

  constructor(pos: ICoords, type: Resource, number: number) {
    this.number = number;
    this.pos = pos;
    this.buildings = new Array(6);
    this.roads = new Array(6);
    this.type = type;
  }
}

export class Player {
  readonly playerID: string;

  constructor(playerID: string) {
    this.playerID = playerID;
  }
}

export interface IG {
  tiles: Tile[];
  buildings: IBuilding[];
  roads: IRoad[];
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

enum Phase {
  Place = 'Place',
}

export function placeBuilding(G: IG, ctx: IGameCtx, index: number): IG | string {
  // Check "distance rule"
  if (
    G.buildings[index].tileRefs.some(ref => G.buildings[G.tiles[ref.tile].buildings[(ref.dir + 1) % 6]].type !== null)
  ) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    buildings: G.buildings.map((building, i) =>
      index === i
        ? {
            ...building,
            type: Building.Settlement,
            owner: ctx.playerID,
          }
        : building,
    ),
  };
}

const GameConfig: IGameArgs = {
  name: 'colonizers',
  flow: {
    startingPhase: Phase.Place,
    phases: {
      Place: {
        allowedMoves: ['placeBuilding'],
      },
    },
  },
  moves: {
    placeBuilding,
  },
  setup: (ctx): IG => {
    let resources = ctx.random.Shuffle([
      Resource.Ore,
      Resource.Ore,
      Resource.Ore,
      Resource.Grain,
      Resource.Grain,
      Resource.Grain,
      Resource.Grain,
      Resource.Lumber,
      Resource.Lumber,
      Resource.Lumber,
      Resource.Lumber,
      Resource.Wool,
      Resource.Wool,
      Resource.Wool,
      Resource.Wool,
      Resource.Brick,
      Resource.Brick,
      Resource.Brick,
      Resource.Nothing,
    ]);

    let numbers = ctx.random.Shuffle([2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12]);

    // Init tiles
    let tiles: Tile[] = new Array();
    for (let x = -2; x <= 2; x++) {
      for (let y = -2; y <= 2; y++) {
        for (let z = -2; z <= 2; z++) {
          if (x + y + z === 0) {
            const resource = resources.pop();
            const number = resource === Resource.Nothing ? 7 : numbers.pop();
            tiles[toIndex({ x, y })] = new Tile({ x, y, z }, resource, number);
          }
        }
      }
    }

    // Init roads and buildings
    let roads: IRoad[] = [];
    let buildings: IBuilding[] = [];
    tiles.forEach((tile, j) => {
      DIRS.forEach((dir, i) => {
        if (typeof tile.roads[i] === 'undefined') {
          roads.push({
            owner: null,
            tileRefs: [
              {
                dir: i,
                tile: j,
              },
            ],
            buildingRefs: [],
          });

          tile.roads[i] = roads.length - 1;
          // Check if adjacent tile exists
          const sum = sumCoords(tile.pos, dir);
          if (inBounds(sum)) {
            tiles[toIndex(sum)].roads[(i + 3) % 6] = roads.length - 1;
            roads[roads.length - 1].tileRefs.push({
              dir: (i + 3) % 6,
              tile: toIndex(sum),
            });
          }
        }

        if (typeof tile.buildings[i] === 'undefined') {
          buildings.push({
            type: null,
            tileRefs: [
              {
                dir: i,
                tile: j,
              },
            ],
            owner: null,
            roadRefs: [],
          });

          tile.buildings[i] = buildings.length - 1;

          const sumUp = sumCoords(tile.pos, dir);
          if (inBounds(sumUp)) {
            tiles[toIndex(sumUp)].buildings[(i + 2) % 6] = buildings.length - 1;
            buildings[buildings.length - 1].tileRefs.push({
              dir: (i + 2) % 6,
              tile: toIndex(sumUp),
            });
          }

          const sumRight = sumCoords(tile.pos, DIRS[(i + 1) % 6]);
          if (inBounds(sumRight)) {
            tiles[toIndex(sumRight)].buildings[(i + 4) % 6] = buildings.length - 1;
            buildings[buildings.length - 1].tileRefs.push({
              dir: (i + 4) % 6,
              tile: toIndex(sumRight),
            });
          }
        }
      });
    });

    // Build road references
    roads.forEach(road => {
      const tileRef = road.tileRefs[0];
      road.buildingRefs.push(tiles[tileRef.tile].buildings[tileRef.dir]);
      road.buildingRefs.push(tiles[tileRef.tile].buildings[(tileRef.dir + 5) % 6]);
    });

    // Build building references
    buildings.forEach(building => {
      let roadRefs = new Set<number>();
      building.tileRefs.forEach(ref => {
        roadRefs.add(tiles[ref.tile].roads[ref.dir]);
        roadRefs.add(tiles[ref.tile].roads[(ref.dir + 1) % 6]);
      });
      building.roadRefs = Array.from(roadRefs);
    });

    return {
      tiles,
      buildings,
      roads,
    };
  },
};

export const ColonizersGame = Game(GameConfig);
