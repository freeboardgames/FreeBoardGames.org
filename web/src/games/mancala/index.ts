const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const mancalaGameDef: IGameDef = {
  code: 'mancala',
  codes: { en: 'mancala', pt: 'mancala' },
  name: translation.name,
  imageURL: Thumbnail,
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
  },
  contributors: ['pestopancake'],
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default mancalaGameDef;
