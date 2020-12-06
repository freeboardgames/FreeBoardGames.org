import { IGameConfig } from 'gamesShared/definitions/game';
import { BingoGame } from './game';
import { BingoBoard } from './board';

const config: IGameConfig = {
  bgioGame: BingoGame,
  bgioBoard: BingoBoard,
  debug: true,
};

export default config;
