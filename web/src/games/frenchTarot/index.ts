const Thumbnail = require('./media/thumbnail.png');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const frenchTarotDef: IGameDef = {
  code: 'frenchTarot',
  name: translation.name,
  contributors: ['tuxor1337'],
  translationStatus: { de: IGameTranslationStatus.DONE, pt: IGameTranslationStatus.DONE },
  codes: { de: 'franz-tarot', pt: 'taro-frances' },
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 5,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default frenchTarotDef;
