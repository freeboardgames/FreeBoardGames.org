const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const memoryMatchDef: IGameDef = {
  code: 'memorymatch',
  codes: { en: 'memorymatch', pt: 'jogo-da-memoria' },
  name: translation.name,
  contributors: ['gk-patel'],
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
  },
  modes: [
    {
      mode: GameMode.OnlineFriend,
      // extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
    {
      mode: GameMode.LocalFriend,
      // extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
  ],
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  config: () => import('./config'),
  status: IGameStatus.PUBLISHED,
  customization: () => import('./customization'),
};

export default memoryMatchDef;
