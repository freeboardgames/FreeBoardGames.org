import { IGameConfig } from '../index';
import { ChessGame } from './game';
import { Board as ChessBoard } from './board';

const config: IGameConfig = {
  bgioGame: ChessGame,
  bgioBoard: ChessBoard,
  debug: false,
};

export default config;
