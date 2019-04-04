import { IGameConfig } from '../index';
import { SeabattleGame } from './game';
import { Board as SeabattleBoard } from './board';
import { SeabattleSound } from './sound';

const config: IGameConfig = {
  bgioGame: SeabattleGame,
  bgioBoard: SeabattleBoard,
  enhancer: SeabattleSound,
};

export default config;
