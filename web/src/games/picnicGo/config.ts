import { IGameConfig } from 'gamesShared/definitions/game';
import { PicnicGoGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: PicnicGoGame,
  bgioBoard: Board,
  debug: false,
};

export default config;
