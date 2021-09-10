import { IGameConfig } from 'gamesShared/definitions/game';
import { SchafkopfGame } from './game';
import { BgioBoard } from './board';

const config: IGameConfig = {
  bgioGame: SchafkopfGame,
  bgioBoard: BgioBoard,
  debug: false,
};

export default config;
