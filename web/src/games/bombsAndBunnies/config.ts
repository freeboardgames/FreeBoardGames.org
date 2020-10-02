import { IGameConfig } from 'gamesShared/definitions/game';
import { FooBarGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: FooBarGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
