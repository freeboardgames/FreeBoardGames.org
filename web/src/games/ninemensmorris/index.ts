const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const ninemensmorrisGameDef: IGameDef = {
  code: 'ninemensmorris',
  codes: { en: 'ninemensmorris', pt: 'trilha' },
  name: translation.name,
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
  },
  contributors: ['JosefKuchar'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};

export default ninemensmorrisGameDef;
