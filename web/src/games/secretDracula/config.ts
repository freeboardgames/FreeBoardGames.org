import { IGameConfig } from 'gamesShared/definitions/game';
import { SecretDraculaGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: SecretDraculaGame,
  bgioBoard: Board,
  debug: false,
};

export default config;
