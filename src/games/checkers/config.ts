import { IGameConfig } from '../index';
import { CheckersGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: CheckersGame,
  bgioBoard: Board,
};

export default config;
