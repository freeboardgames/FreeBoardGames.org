import { IGameConfig } from 'gamesShared/definitions/game';
import { FrenchTarotGame } from './game';
import { BgioBoard } from './board';

const config: IGameConfig = {
  bgioGame: FrenchTarotGame,
  bgioBoard: BgioBoard,
  debug: false,
};

export default config;
