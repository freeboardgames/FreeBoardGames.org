import { IGameConfig } from 'gamesShared/definitions/game';
import { TictactoePlusGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: TictactoePlusGame,
  bgioBoard: Board,
};

export default config;
