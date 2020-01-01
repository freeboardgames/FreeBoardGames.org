import { IGameConfig } from '../';
import { ConnectFourGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: ConnectFourGame,
  bgioBoard: Board,
};

export default config;
