import { GameMode } from '../App/Game/GameModePicker';
import { ChessGame } from './chess/game';
import { Board as ChessBoard } from './chess/board';
import { SeabattleGame } from './seabattle/game';
import { Board as SeabattleBoard } from './seabattle/board';
import { TictactoeGame } from './tictactoe/game';
import { Board as TictactoeBoard } from './tictactoe/board';
import { SeabattleSound } from './seabattle/sound';
import { applyMiddleware } from 'redux';

export interface IGameDef {
  code: string;
  name: string;
  imageURL: string;
  bgioGame: any;
  bgioBoard: any;
  description: string;
  modes: GameMode[];
  maxPlayers: 2;
  minPlayers: 2;
  enhancer?: any;
}

export interface IGameDefMap {
  [code: string]: IGameDef
}

export const GAMES_MAP: IGameDefMap = {
  chess: {
    code: 'chess',
    name: 'Chess',
    imageURL: '/thumbnail/chess.png',
    bgioGame: ChessGame,
    bgioBoard: ChessBoard,
    modes: [GameMode.LocalFriend, GameMode.OnlineFriend],
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Chess, International rules.',
  },
  seabattle: {
    code: 'seabattle',
    name: 'Sea Battle',
    imageURL: '/thumbnail/seabattle.png',
    bgioGame: SeabattleGame,
    bgioBoard: SeabattleBoard,
    modes: [GameMode.OnlineFriend],
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Sink your enemy\'s ships!',
    enhancer: applyMiddleware(SeabattleSound),
  },
  tictactoe: {
    code: 'tictactoe',
    name: 'Tic Tac Toe',
    imageURL: '/thumbnail/seabattle.png',
    bgioGame: TictactoeGame,
    bgioBoard: TictactoeBoard,
    modes: [GameMode.LocalFriend, GameMode.OnlineFriend],
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Play Tic Tac Toe!',
  },
};

export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.chess,
  GAMES_MAP.seabattle,
  GAMES_MAP.tictactoe,
];
