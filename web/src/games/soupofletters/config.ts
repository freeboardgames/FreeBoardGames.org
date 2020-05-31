import { IGameConfig } from 'gamesShared/definitions/game';
import { SoupOfLettersGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: SoupOfLettersGame,
  bgioBoard: Board,
};

export default config;
