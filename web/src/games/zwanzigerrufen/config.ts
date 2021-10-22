import { IGameConfig } from 'gamesShared/definitions/game';
import { ZwanzigerrufenGame } from './game';
import { BgioBoard } from './board';

const config: IGameConfig = {
  bgioGame: ZwanzigerrufenGame,
  bgioBoard: BgioBoard,
  debug: false,
};

export default config;
