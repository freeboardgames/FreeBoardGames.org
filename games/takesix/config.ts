import { IGameConfig } from '../index';
import { TakeSixGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: TakeSixGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
