import { IGameConfig } from '../';
import { TictactoePlusGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: TictactoePlusGame,
  bgioBoard: Board,
};

export default config;
