import { IGameConfig } from 'gamesShared/definitions/game';
import { SeabattleGame } from './game';
import { Board as SeabattleBoard } from './board';

const config: IGameConfig = {
  bgioGame: SeabattleGame,
  bgioBoard: SeabattleBoard,
  enhancers: [],
};

export default config;
