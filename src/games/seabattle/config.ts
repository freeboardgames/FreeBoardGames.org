import { IGameConfig } from '../config';
import { SeabattleGame } from './game';
import { Board as SeabattleBoard } from './board';
import { SeabattleSound } from './sound';
import { applyMiddleware } from 'redux';

const config: IGameConfig = {
  bgioGame: SeabattleGame,
  bgioBoard: SeabattleBoard,
  enhancer: applyMiddleware(SeabattleSound),
};

export default config;
