import { IGameConfig } from '../index';
import { CornerusGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: CornerusGame,
  bgioBoard: Board,
  debug: false,
};

export default config;
