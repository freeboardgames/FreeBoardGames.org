const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const frenchTarotDef: IGameDef = {
  code: 'frenchTarot',
  name: translation.name,
  contributors: ['tuxor1337'],
  translationStatus: {
    de: IGameTranslationStatus.DONE,
    pt: IGameTranslationStatus.DONE,
    fr: IGameTranslationStatus.DONE,
    it: IGameTranslationStatus.DONE,
  },
  codes: { de: 'franz-tarot', pt: 'taro-frances', fr: 'tarot-francais', it: 'tarocchi-francesi' },
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  minPlayers: 3,
  maxPlayers: 5,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default frenchTarotDef;
