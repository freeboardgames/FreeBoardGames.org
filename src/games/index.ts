import { IGameModeInfo } from 'components/App/Game/GameModePicker';
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
import { rotaGameDef } from './rota';

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
  rota: rotaGameDef,
};

// Order roughly by popularity.
// See https://stats.freeboardgames.org
export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.takesix,
  GAMES_MAP.chess,
  GAMES_MAP.seabattle,
  GAMES_MAP.tictactoe,
  GAMES_MAP.fourinarow,
  GAMES_MAP.rota,
  GAMES_MAP.checkers,
  GAMES_MAP.cornerus,
  GAMES_MAP.tictactoeplus,
  GAMES_MAP.reversi,
  GAMES_MAP.ninemensmorris,
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
  imageURL: {
    src: string;
    0: string;
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
