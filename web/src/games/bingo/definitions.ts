import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';

export interface INumberState {
  id: number;
  value: number;
  marked: boolean;
  missed: boolean;
}

export interface IPlayerNumbers {
  [id: string]: INumberState[];
}

export interface IGameState {
  playerNumbers: IPlayerNumbers;
  callQueue: number[];
  callRef: number;
}

export interface IBoardState {}

export interface IBoardProps {
  G: IGameState;
  ctx: Ctx;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  events?: any;
}
