import { IGameConfig } from 'gamesShared/definitions/game';
import { ConnectFourGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: ConnectFourGame,
  bgioBoard: Board,
};

export default config;
