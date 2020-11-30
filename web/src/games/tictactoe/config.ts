import { IGameConfig } from 'gamesShared/definitions/game';
import { TictactoeGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: TictactoeGame,
  bgioBoard: Board,
};

export default config;
