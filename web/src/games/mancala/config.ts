import { IGameConfig } from 'gamesShared/definitions/game';
import { MancalaGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: MancalaGame,
  bgioBoard: Board,
  debug: false,
};

export default config;
