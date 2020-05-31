import { IGameModeInfo } from './mode';
import { GameMode } from './mode';
import { IPlayerInRoom } from './player';

export interface IGameArgs {
  gameCode: string;
  mode: GameMode;
  matchCode?: string;
  playerID?: string;
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

export interface IGameDef {
  code: string;
  name: string;
  imageURL: {
    src: string;
  };
  description: string;
  descriptionTag: string;
  minPlayers: number;
  maxPlayers: number;
  modes: IGameModeInfo[];
  instructions?: {
    videoId?: string;
    text?: string;
  };
  config: () => Promise<any>;
  aiConfig?: () => Promise<any>;
}

export interface IGameDefMap {
  [code: string]: IGameDef;
}
