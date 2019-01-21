import { GameMode } from '../App/Game/GameModePicker';
import { ChessGame } from './chess/game';
import { Board as ChessBoard } from './chess/board';
import { SeabattleGame } from './seabattle/game';
import { Board as SeabattleBoard } from './seabattle/board';

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
}

export interface IGameDefMap {
  [code: string]: IGameDef
}

export const GAMES_MAP: IGameDefMap = {
  chess: {
    code: 'chess',
    name: 'Chess',
    imageURL: '/chess.png',
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
    imageURL: '/seabattle.png',
    bgioGame: SeabattleGame,
    bgioBoard: SeabattleBoard,
    modes: [GameMode.OnlineFriend],
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Sink your enemy\'s ships!',
  },
};

export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.chess,
  GAMES_MAP.seabattle,
];
