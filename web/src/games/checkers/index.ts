const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const checkersGameDef: IGameDef = {
  code: 'checkers',
  codes: { en: 'checkers', pt: 'damas', de: 'dame' },
  name: translation.name,
  contributors: ['JosefKuchar', 'ProspectPyxis', 'mateusazis'],
  imageURL: Thumbnail,
  translationStatus: { pt: IGameTranslationStatus.DONE, de: IGameTranslationStatus.PARTIAL },
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
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

export default checkersGameDef;
