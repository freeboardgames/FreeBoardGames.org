import { IGameConfig } from 'gamesShared/definitions/game';
import { TakeSixGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: TakeSixGame,
  bgioBoard: Board,
};

export default config;
