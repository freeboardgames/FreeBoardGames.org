import { IGameConfig } from 'gamesShared/definitions/game';
import { WarGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: WarGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
