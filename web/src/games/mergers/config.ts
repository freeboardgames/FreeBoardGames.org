import { IGameConfig } from 'gamesShared/definitions/game';
import { MergersGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: MergersGame,
  bgioBoard: Board,
  debug: false,
};

export default config;
