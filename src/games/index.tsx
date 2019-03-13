import { IGameModeInfo, GameMode, IGameModeExtraInfoSlider } from '../App/Game/GameModePicker';
import SeabattleThumbnail from './seabattle/media/thumbnail.png';
import ChessThumbnail from './chess/media/thumbnail.png';
import TicTacToeThumbnail from './tictactoe/media/thumbnail.png';

export interface IGameConfig {
  bgioGame: any;
  bgioBoard: any;
  enhancer?: any;
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
  modes: IGameModeInfo[];
  config: () => Promise<any>;
  aiConfig?: () => Promise<any>;
}

export interface IGameDefMap {
  [code: string]: IGameDef
}

export const GAMES_MAP: IGameDefMap = {
  chess: {
    code: 'chess',
    name: 'Chess',
    imageURL: ChessThumbnail,
    modes: [
      {
        mode: GameMode.AI,
        cardDescription: 'Play Chess against the computer for free! ' +
          'Play against Stockfish, one of the best chess ' +
          'engines in the world.',
        extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
      },
      {
        mode: GameMode.OnlineFriend,
        cardDescription: 'Share a link with a friend and play Chess, ' +
          'for free, over the internet!',
      },
      {
        mode: GameMode.LocalFriend,
        cardDescription: 'Share the same device and play Chess ' +
          'against a friend for free!',
      },
    ],
    description: 'Classic game of Chess.',
    config: () => import('./chess/config'),
    aiConfig: () => import('./chess/ai'),
  },
  seabattle: {
    code: 'seabattle',
    name: 'Sea Battle',
    imageURL: SeabattleThumbnail,
    modes: [
      {
        mode: GameMode.OnlineFriend,
        cardDescription: 'Share a link and play a match of Sea battle ' +
          'with a friend. Sink all their ship before they sink yours!',
      },
    ],
    description: 'Sink your friend\'s ships!',
    config: () => import('./seabattle/config'),
  },
  tictactoe: {
    code: 'tictactoe',
    name: 'Tic Tac Toe',
    imageURL: TicTacToeThumbnail,
    modes: [
      {
        mode: GameMode.AI,
        cardDescription: 'Play TicTacToe against the computer for free!',
      },
      {
        mode: GameMode.LocalFriend,
        cardDescription: 'Share the same device and play Tic Tac Toe ' +
          ' against a friend.',
      },
      {
        mode: GameMode.OnlineFriend,
        cardDescription: 'Share a link with a friend and play ' +
          'Tic Tac Toe over the internet for free.',
      },
    ],
    description: 'Play Tic Tac Toe!',
    config: () => import('./tictactoe/config'),
    aiConfig: () => import('./tictactoe/ai'),
  },
};

export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.chess,
  GAMES_MAP.seabattle,
  GAMES_MAP.tictactoe,
];
