import { mancalaGameDef } from './mancala';
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
import { zooParadeGameDef } from './zooparade';
import { rotaGameDef } from './rota';
import { secretcodesGameDef } from './secretcodes';
import { hangmanGameDef } from './hangman';
import { IGameDef, IGameDefMap } from 'gamesShared/definitions/game';

// Add new games here
export const GAMES_MAP: IGameDefMap = {
  mancala: mancalaGameDef,
  zooparade: zooParadeGameDef,
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
  secretcodes: secretcodesGameDef,
  hangman: hangmanGameDef,
};

// Order roughly by popularity.
// See https://stats.freeboardgames.org
export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.mancala,
  GAMES_MAP.secretcodes,
  GAMES_MAP.takesix,
  GAMES_MAP.checkers,
  GAMES_MAP.fourinarow,
  GAMES_MAP.seabattle,
  GAMES_MAP.tictactoe,
  GAMES_MAP.hangman,
  GAMES_MAP.zooparade,
  GAMES_MAP.chess,
  GAMES_MAP.cornerus,
  GAMES_MAP.reversi,
  GAMES_MAP.tictactoeplus,
  GAMES_MAP.rota,
  GAMES_MAP.ninemensmorris,
];
