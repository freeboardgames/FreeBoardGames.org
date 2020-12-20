import { IGameConfig } from 'gamesShared/definitions/game';
import { BullsAndCowsGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: BullsAndCowsGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
