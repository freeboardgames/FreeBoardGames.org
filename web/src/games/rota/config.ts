import { IGameConfig } from 'gamesShared/definitions/game';
import { RotaGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: RotaGame,
  bgioBoard: Board,
};

export default config;
