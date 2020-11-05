import { IGameConfig } from 'gamesShared/definitions/game';
import { ZooParadeGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: ZooParadeGame,
  bgioBoard: Board,
  debug: false,
};

export default config;
