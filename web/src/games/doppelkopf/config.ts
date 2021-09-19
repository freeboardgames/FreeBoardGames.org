import { IGameConfig } from 'gamesShared/definitions/game';
import { DoppelkopfGame } from './game';
import { BgioBoard } from './board';

const config: IGameConfig = {
  bgioGame: DoppelkopfGame,
  bgioBoard: BgioBoard,
  debug: false,
};

export default config;
