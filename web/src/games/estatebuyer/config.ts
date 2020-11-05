import { IGameConfig } from 'gamesShared/definitions/game';
import { EstateBuyerGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: EstateBuyerGame,
  bgioBoard: Board,
};

export default config;
