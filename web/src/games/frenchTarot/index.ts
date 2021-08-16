const Thumbnail = require('./media/thumbnail.png');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const frenchTarotDef: IGameDef = {
  code: 'frenchTarot',
  name: translation.name,
  contributors: ['tuxor1337'],
  translationStatus: { de: IGameTranslationStatus.PARTIAL, fr: IGameTranslationStatus.PARTIAL },
  codes: { de: 'franz-tarot', fr: 'tarot-francais' },
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 5,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default frenchTarotDef;
