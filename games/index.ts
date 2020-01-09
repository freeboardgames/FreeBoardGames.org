import { IGameModeInfo } from '../components/App/Game/GameModePicker';
import { chessGameDef } from './chess';
import { seabattleGameDef } from './seabattle';
import { tictactoeGameDef } from './tictactoe';
import { takesixGameDef } from './takesix';
import { ninemensmorrisGameDef } from './ninemensmorris';
import { checkersGameDef } from './checkers';
import { reversiGameDef } from './reversi';
import { cornerusGameDef } from './cornerus';
import { tictactoeplusGameDef } from './tictactoeplus';
import { fourinarowGameDef } from './fourinarow';

// Add new games here
export const GAMES_MAP: IGameDefMap = {
  chess: chessGameDef,
  seabattle: seabattleGameDef,
  tictactoe: tictactoeGameDef,
  takesix: takesixGameDef,
  cornerus: cornerusGameDef,
  ninemensmorris: ninemensmorrisGameDef,
  checkers: checkersGameDef,
  reversi: reversiGameDef,
  tictactoeplus: tictactoeplusGameDef,
  fourinarow: fourinarowGameDef,
};

export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.chess,
  GAMES_MAP.tictactoeplus,
  GAMES_MAP.takesix,
  GAMES_MAP.checkers,
  GAMES_MAP.reversi,
  GAMES_MAP.ninemensmorris,
  GAMES_MAP.cornerus,
  GAMES_MAP.fourinarow,
  GAMES_MAP.seabattle,
  GAMES_MAP.tictactoe,
];

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
