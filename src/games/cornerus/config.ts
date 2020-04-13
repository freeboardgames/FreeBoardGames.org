import { IGameConfig } from '../index';
import { CornerusGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: CornerusGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
