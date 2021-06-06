const Thumbnail = require('./media/thumbnail.jpg');
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import translation from './locales/en.json';

export const secretcodesGameDef: IGameDef = {
  code: 'secretcodes',
  name: translation.name,
  contributors: ['JvSomeren', 'mateusazis'],
  translationStatus: { pt: IGameTranslationStatus.DONE },
  codes: { pt: 'codigos-secretos' },
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.LocalFriend }, { mode: GameMode.OnlineFriend }],
  minPlayers: 4,
  maxPlayers: 20,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  customization: () => import('./customization'),
};

export default secretcodesGameDef;
