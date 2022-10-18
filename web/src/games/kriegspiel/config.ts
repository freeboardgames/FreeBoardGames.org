import { IGameConfig } from 'gamesShared/definitions/game';
import { Kriegspiel } from './Game';
import { Board } from './Board';

const config: IGameConfig = {
  bgioGame: Kriegspiel,
  bgioBoard: Board,
  debug: true,
};

export default config;
