import { IGameConfig } from 'gamesShared/definitions/game';
import { HangmanGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: HangmanGame,
  bgioBoard: Board,
};

export default config;
