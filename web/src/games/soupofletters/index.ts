const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const soupOfLettersGameDef: IGameDef = {
  code: 'soupofletters',
  name: translation.name,
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
    de: IGameTranslationStatus.DONE,
  },
  codes: { pt: 'sopa-de-letras', de: 'worter-suppe' },
  contributors: ['gk-patel'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.LocalFriend }, { mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 4,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default soupOfLettersGameDef;
