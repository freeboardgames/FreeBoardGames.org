import { IGameConfig } from 'gamesShared/definitions/game';
import { MastermindGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: MastermindGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
