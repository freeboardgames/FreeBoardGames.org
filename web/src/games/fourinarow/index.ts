const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const fourinarowGameDef: IGameDef = {
  code: 'fourinarow',
  codes: { en: 'fourinarow', pt: 'quatro-em-linha' },
  name: translation.name,
  contributors: ['gk-patel'],
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
  },
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default fourinarowGameDef;
