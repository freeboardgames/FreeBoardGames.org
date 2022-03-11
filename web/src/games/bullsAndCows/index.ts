const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const bullsAndCowsGameDef: IGameDef = {
  code: 'bullsAndCows',
  codes: { en: 'bullsAndCows', pt: 'senha' },
  name: translation.name,
  contributors: ['leocaseiro', 'Spooky-0'],
  imageURL: Thumbnail,
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
  },
  modes: [
    {
      mode: GameMode.AI,
    },
  ],
  minPlayers: 2,
  maxPlayers: 2,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
  customization: () => import('./customization'),
};

export default bullsAndCowsGameDef;
