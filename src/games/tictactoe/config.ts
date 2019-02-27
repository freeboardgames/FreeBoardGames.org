import { IGameConfig } from '../config';
import { TictactoeGame } from './game';
import { Board } from './board';
import { applyMiddleware } from 'redux';

const config: IGameConfig = {
  bgioGame: TictactoeGame,
  bgioBoard: Board,
};

export default config;
