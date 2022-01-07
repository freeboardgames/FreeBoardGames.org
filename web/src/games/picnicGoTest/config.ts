import { IGameConfig } from 'gamesShared/definitions/game';
import { PicnicGoTGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: PicnicGoTGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
