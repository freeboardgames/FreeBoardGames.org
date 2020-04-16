import { IGameConfig } from '../index';
import { SecretcodesGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: SecretcodesGame,
  bgioBoard: Board,
  debug: true
};

export default config;
