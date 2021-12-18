import { IGameConfig } from 'gamesShared/definitions/game';
import { SixtysixGame } from './game';
import { BgioBoard } from './board';

const config: IGameConfig = {
  bgioGame: SixtysixGame,
  bgioBoard: BgioBoard,
  debug: false,
};

export default config;
