import { IGameConfig } from '../index';
import { SecretcodesGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: SecretcodesGame,
  bgioBoard: Board,
};

export default config;
