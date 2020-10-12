import { IGameConfig } from 'gamesShared/definitions/game';
import { CardTableGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: CardTableGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
