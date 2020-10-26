import { IGameDef, IGameDefMap } from 'gamesShared/definitions/game';
import  mancala from './mancala';
import  chess from './chess';
import  seabattle from './seabattle';
import  tictactoe from './tictactoe';
import  takesix from './takesix';
import  ninemensmorris from './ninemensmorris';
import  checkers from './checkers';
import  reversi from './reversi';
import  cornerus from './cornerus';
import  tictactoeplus from './tictactoeplus';
import  fourinarow from './fourinarow';
import  zooparade from './zooparade';
import  rota from './rota';
import  secretcodes from './secretcodes';
import  hangman from './hangman';
import  estatebuyer from './estatebuyer';
import  cardtable from './cardtable';
import  secretDracula from './secretDracula';
import  bombsAndBunnies from './bombsAndBunnies';

// Add new games here
export const GAMES_MAP: IGameDefMap = {
  secretDracula,
  mancala,
  zooparade,
  chess,
  seabattle,
  tictactoe,
  takesix,
  cornerus,
  ninemensmorris,
  checkers,
  reversi,
  tictactoeplus,
  fourinarow,
  rota,
  secretcodes,
  hangman,
  estatebuyer,
  bombsAndBunnies,
  cardtable,
};

export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.estatebuyer,
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
  GAMES_MAP.bombsAndBunnies,
  GAMES_MAP.cardtable,
  GAMES_MAP.secretdracula,
];
