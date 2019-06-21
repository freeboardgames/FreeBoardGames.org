import { IGameConfig } from '../index';
import { RolitGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: RolitGame,
  bgioBoard: Board,
};

export default config;
