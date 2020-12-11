import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';

export interface INumberState {
  id: number;
  value: number;
  marked: boolean;
}

export interface IPlayerState {
  numbers: INumberState[];
  shoutCount: number;
  isWinner: boolean;
}

interface IPlayerDict {
  [id: string]: IPlayerState;
}

export interface IGameState {
  players: IPlayerDict;
  callQueue: number[];
  callRef: number;
  timeRef: number;
  activePlayers: string[];
}

export interface IBoardState {
  showCallTable: boolean;
}

export interface IBoardProps {
  G: IGameState;
  ctx: Ctx;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  events?: any;
}
