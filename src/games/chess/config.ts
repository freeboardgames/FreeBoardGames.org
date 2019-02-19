import { IGameConfig } from '../config';
import { ChessGame } from './game';
import { Board as ChessBoard } from './board';

const config: IGameConfig = {
  bgioGame: ChessGame,
  bgioBoard: ChessBoard,
};

export default config;
