import { IGameConfig } from 'gamesShared/definitions/game';
import { BashniGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: BashniGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
