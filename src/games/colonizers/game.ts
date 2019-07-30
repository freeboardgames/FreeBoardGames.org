import { Game, IGameArgs } from '@freeboardgame.org/boardgame.io/core';
import { placePhase, placeInitial } from './phase/place';
import { gamePhase, build } from './phase/game';
import { robberPhase, moveRobber } from './phase/robber';
import { Phase } from './phase';
import { discardPhase, discardResources } from './phase/discard';
import { gameSetup } from './setup';

export enum Resource {
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

export interface IBuilding {
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

export interface ICoords {
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
  readonly type: Resource;
  number: number;
  buildings: number[]; // Adjacent building indices
  roads: number[]; // Adjacent road indices
  index: number;

  constructor(pos: ICoords, type: Resource, index: number) {
    this.pos = pos;
    this.buildings = new Array(6);
    this.roads = new Array(6);
    this.type = type;
    this.index = index;
    this.number = null;
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
  discardResources: (resources: number[]) => IG | string;
}

export function sumCoords(a: ICoords, b: ICoords) {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function inBounds(pos: ICoords) {
  return pos.x >= -2 && pos.x <= 2 && pos.y >= -2 && pos.y <= 2 && pos.z >= -2 && pos.z <= 2;
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
      Discard: discardPhase,
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
    discardResources,
  },
  setup: gameSetup,
};

export const ColonizersGame = Game(GameConfig);
