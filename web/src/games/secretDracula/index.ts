const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const secretDraculaGameDef: IGameDef = {
  code: 'secretDracula',
  name: translation.name,
  contributors: ['Spooky-0'],
  translationStatus: { pt: IGameTranslationStatus.DONE },
  codes: { pt: 'dracula-secreto' },
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  minPlayers: 5,
  maxPlayers: 10,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default secretDraculaGameDef;
