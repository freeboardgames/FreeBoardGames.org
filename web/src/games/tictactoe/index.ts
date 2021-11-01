const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const tictactoeGameDef: IGameDef = {
  code: 'tictactoe',
  codes: { pt: 'jogo-da-velha', de: 'tictactoe' },
  name: translation.name,
  translationStatus: { pt: IGameTranslationStatus.DONE, de: IGameTranslationStatus.DONE },
  contributors: ['jasonharrison'],
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [
    {
      mode: GameMode.AI,
    },
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
  customization: () => import('./customization'),
};

export default tictactoeGameDef;
