import { IGameConfig } from 'gamesShared/definitions/game';
import { ReversiGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: ReversiGame,
  bgioBoard: Board,
};

export default config;
