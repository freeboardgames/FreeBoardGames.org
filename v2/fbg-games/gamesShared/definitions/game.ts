import { GameMode } from './mode';
import { IPlayerInRoom } from './player';
import { GameCustomizationState } from './customization';

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