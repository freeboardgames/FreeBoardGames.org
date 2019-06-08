import { IGameModeInfo } from '../App/Game/GameModePicker';
import { chessGameDef } from './chess';
import { seabattleGameDef } from './seabattle';
import { tictactoeGameDef } from './tictactoe';
import { takesixGameDef } from './takesix';

// Add new games here
export const GAMES_MAP: IGameDefMap = {
  chess: chessGameDef,
  seabattle: seabattleGameDef,
  tictactoe: tictactoeGameDef,
  takesix: takesixGameDef,
};

export const GAMES_LIST: IGameDef[] = [GAMES_MAP.chess, GAMES_MAP.takesix, GAMES_MAP.seabattle, GAMES_MAP.tictactoe];

// No need to edit below
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
  imageURL: string;
  description: string;
  descriptionTag: string;
  videoId: string;
  minPlayers: number;
  maxPlayers: number;
  modes: IGameModeInfo[];
  config: () => Promise<any>;
  aiConfig?: () => Promise<any>;
}

export interface IGameDefMap {
  [code: string]: IGameDef;
}
