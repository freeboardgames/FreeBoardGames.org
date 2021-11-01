import { IGameConfig } from 'gamesShared/definitions/game';
import { BarnBarterGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: BarnBarterGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
