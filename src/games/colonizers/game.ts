import { Game, IGameArgs } from '@freeboardgame.org/boardgame.io/core';
import { placePhase, placeInitial } from './phase/place';
import { gamePhase, build } from './phase/game';
import { robberPhase, moveRobber } from './phase/robber';
import { Phase } from './phase';

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

export enum Building {
  Settlement,
  City,
  Road,
  Development,
}

interface IBuilding {
  tileRefs: ITileRef[];
  roadRefs: number[];
  type: Building;
  owner: string;
  index: number;
}

export interface IRoad {
  tileRefs: ITileRef[];
  buildingRefs: number[];
  owner: string;
  index: number;
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
  index: number;

  constructor(pos: ICoords, type: Resource, number: number, index: number) {
    this.number = number;
    this.pos = pos;
    this.buildings = new Array(6);
    this.roads = new Array(6);
    this.type = type;
    this.index = index;
  }
}

export interface IPlayer {
  id: string;
  resources: number[];
  score: number;
}

export interface IG {
  tiles: Tile[];
  buildings: IBuilding[];
  roads: IRoad[];
  players: IPlayer[];
  robber: number;
  initialTurnOrder: string[];
}

export interface IMoves {
  placeInitial: (settlementIndex: number, roadIndex: number) => IG | string;
  build: (type: Building, index?: number) => IG | string;
  moveRobber: (index: number) => IG | string;
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

export function getScoreBoard(G: IG) {
  return G.players.map(player => ({ playerID: player.id, score: player.score })).sort((a, b) => b.score - a.score);
}

export function isValidBuildingPosition(G: IG, index: number) {
  if (G.buildings[index].owner !== null) {
    return false;
  }

  return !G.buildings[index].tileRefs.some(
    ref => G.buildings[G.tiles[ref.tile].buildings[(ref.dir + 1) % 6]].type !== null,
  );
}

export function isRoadConnected(G: IG, settlementIndex: number, roadIndex: number) {
  return G.buildings[settlementIndex].roadRefs.some(ref => ref === roadIndex);
}

export function isAnyOwnRoadConnected(G: IG, playerID: string, index: number) {
  return G.buildings[index].roadRefs.some(ref => G.roads[ref].owner === playerID);
}

export function isRoadConnectedToOwned(G: IG, playerID: string, index: number) {
  return G.roads[index].buildingRefs.some(
    ref =>
      // Check if road is connected to settlement/city
      G.buildings[ref].owner === playerID ||
      // Or if it's connected to another road
      G.buildings[ref].roadRefs.reduce((acc, roadRef) => (G.roads[roadRef].owner === playerID ? acc + 1 : acc), 0) >= 1,
  );
}

const GameConfig: IGameArgs = {
  name: 'colonizers',
  flow: {
    startingPhase: Phase.Place,
    phases: {
      Place: placePhase,
      Game: gamePhase,
      Robber: robberPhase,
    },
    endGameIf: (G: IG) => {
      if (G.players.some(player => player.score >= 10)) {
        return { scoreboard: getScoreBoard(G) };
      }
    },
  },
  moves: {
    placeInitial,
    build,
    moveRobber,
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

    let robber: number = 2;

    // Init tiles
    let tiles: Tile[] = new Array();
    for (let x = -2; x <= 2; x++) {
      for (let y = -2; y <= 2; y++) {
        for (let z = -2; z <= 2; z++) {
          if (x + y + z === 0) {
            const resource = resources.pop();
            const number = resource === Resource.Nothing ? null : numbers.pop();
            tiles[toIndex({ x, y })] = new Tile({ x, y, z }, resource, number, toIndex({ x, y }));

            if (number === null) {
              robber = toIndex({ x, y });
            }
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
            index: roads.length,
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
            index: buildings.length,
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

    // Build turn order
    let initialTurnOrder = [];
    for (let i = 0; i < ctx.numPlayers; i++) {
      initialTurnOrder.push(i.toString());
    }
    for (let i = ctx.numPlayers - 1; i >= 0; i--) {
      initialTurnOrder.push(i.toString());
    }

    const players = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
      id: i.toString(),
      resources: new Array(5).fill(0),
      score: 0,
    }));

    return {
      tiles,
      buildings,
      roads,
      players,
      initialTurnOrder,
      robber,
    };
  },
};

export const ColonizersGame = Game(GameConfig);
