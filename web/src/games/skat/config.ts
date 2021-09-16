import { IGameConfig } from 'gamesShared/definitions/game';
import { SkatGame } from './game';
import { BgioBoard } from './board';

const config: IGameConfig = {
  bgioGame: SkatGame,
  bgioBoard: BgioBoard,
  debug: false,
};

export default config;
