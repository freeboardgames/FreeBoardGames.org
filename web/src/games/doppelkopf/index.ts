const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const doppelkopfDef: IGameDef = {
  code: 'doppelkopf',
  name: translation.name,
  contributors: ['tuxor1337'],
  translationStatus: {
    de: IGameTranslationStatus.DONE,
    fr: IGameTranslationStatus.DONE,
    pt: IGameTranslationStatus.DONE,
    it: IGameTranslationStatus.DONE,
  },
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  minPlayers: 4,
  maxPlayers: 4,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default doppelkopfDef;
