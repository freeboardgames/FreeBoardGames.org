import { GameMode } from './mode';
import { IPlayerInRoom } from './player';
import { GameCustomizationState } from './customization';

export interface IGameArgs {
  gameCode: string;
  mode: GameMode;
  name: string;
  lang: string;
  matchCode?: string;
  players?: IPlayerInRoom[];
}

export interface IAIConfig {
  bgioAI: (customization: GameCustomizationState) => any;
}

export enum IGameStatus {
  IN_DEVELOPMENT,
  PUBLISHED,
}