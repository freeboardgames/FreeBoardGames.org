import { IGameConfig } from 'gamesShared/definitions/game';
import { SecretcodesGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: SecretcodesGame,
  bgioBoard: Board,
};

export default config;
