const Thumbnail = require('./media/thumbnail.png');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const takesixGameDef: IGameDef = {
  code: 'takesix',
  name: translation.name,
  translationStatus: { pt: IGameTranslationStatus.DONE },
  codes: { pt: 'pegue-seis' },
  contributors: ['JosefKuchar'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 10,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};

export default takesixGameDef;
