import { IGameConfig } from '../index';
import { ReversiGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: ReversiGame,
  bgioBoard: Board,
};

export default config;
