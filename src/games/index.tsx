import { GameMode } from '../App/Game/GameModePicker';
import SeabattleThumbnail from './seabattle/media/thumbnail.png';
import ChessThumbnail from './chess/media/thumbnail.png';

export interface IGameDef {
  code: string;
  name: string;
  imageURL: string;
  description: string;
  modes: GameMode[];
  maxPlayers: 2;
  minPlayers: 2;
  config: () => Promise<any>;
}

export interface IGameDefMap {
  [code: string]: IGameDef
}

export const GAMES_MAP: IGameDefMap = {
  chess: {
    code: 'chess',
    name: 'Chess',
    imageURL: ChessThumbnail,
    modes: [GameMode.LocalFriend, GameMode.OnlineFriend],
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Chess, International rules.',
    config: () => import('./chess/config'),
  },
  seabattle: {
    code: 'seabattle',
    name: 'Sea Battle',
    imageURL: SeabattleThumbnail,
    modes: [GameMode.OnlineFriend],
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Sink your enemy\'s ships!',
    config: () => import('./seabattle/config'),
  },
};

export const GAMES_LIST: IGameDef[] = [
  GAMES_MAP.chess,
  GAMES_MAP.seabattle,
];
