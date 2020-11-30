import { IGameModeInfo } from './mode';
import { GameMode } from './mode';
import { IPlayerInRoom } from './player';

export interface IGameArgs {
  gameCode: string;
  mode: GameMode;
  matchCode?: string;
  players?: IPlayerInRoom[];
}

export interface IGameConfig {
  bgioGame: any;
  bgioBoard: any;
  enhancers?: any;
  debug?: boolean;
}

export interface IAIConfig {
  bgioAI: (level: string) => any;
}

export enum IGameStatus {
  IN_DEVELOPMENT,
  PUBLISHED,
}

export interface IGameDef {
  urlName?: string;
  code: string;
  name: string;
  imageURL: string;
  description: string;
  descriptionTag: string;
  minPlayers: number;
  maxPlayers: number;
  modes: IGameModeInfo[];
  instructions?: {
    videoId?: string;
    text?: string;
  };
  status: IGameStatus;
  config: () => Promise<any>;
  aiConfig?: () => Promise<any>;
}

export interface IGameDefMap {
  [code: string]: IGameDef;
}
