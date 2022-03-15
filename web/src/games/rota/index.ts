const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const rotaGameDef: IGameDef = {
  code: 'rota',
  codes: { en: 'rota', pt: 'rota' },
  name: translation.name,
  contributors: ['gk-patel'],
  imageURL: Thumbnail,
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
  },
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default rotaGameDef;
