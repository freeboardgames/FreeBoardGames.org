import { IGameConfig } from '..';
import { TictactoeGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: TictactoeGame,
  bgioBoard: Board,
};

export default config;
