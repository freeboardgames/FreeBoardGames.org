import { IGameConfig } from 'gamesShared/definitions/game';
import { ThinkAlikeGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: ThinkAlikeGame,
  bgioBoard: Board,
};

export default config;
