import { IGameModeInfo } from './mode';
import { GameMode } from './mode';
import { IPlayerInRoom } from './player';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import { Language } from 'infra/i18n/types';

export interface IGameArgs {
  gameCode: string;
  mode: GameMode;
  matchCode?: string;
  players?: IPlayerInRoom[];
}

export interface IGameConfig {
  bgioGame: any;
  bgioBoard: any;
  enhancers?: any;
  debug?: boolean;
}

export interface IAIConfig {
  bgioAI: (customization: GameCustomizationState) => any;
}

export enum IGameStatus {
  IN_DEVELOPMENT,
  PUBLISHED,
}

export interface IGameDef {
  code: string;
  codes?: Record<Language, string>;
  name: string;
  contributors: string[];
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
  status: IGameStatus;
  config: () => Promise<any>;
  aiConfig?: () => Promise<any>;
  customization?: () => Promise<any>;
}

export interface IGameDefMap {
  [code: string]: IGameDef;
}
