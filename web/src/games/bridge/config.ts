import { IGameConfig } from 'gamesShared/definitions/game';
import { BridgeGame } from './game';
import { BgioBoard } from './board';

const config: IGameConfig = {
  bgioGame: BridgeGame,
  bgioBoard: BgioBoard,
  debug: false,
};

export default config;
