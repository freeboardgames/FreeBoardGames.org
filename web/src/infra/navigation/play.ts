import { Language } from 'infra/i18n';
import { IGameDef } from 'gamesShared/definitions/game';
import { LanguagePathResolver } from './types';

const playDictionary = { en: 'play', pt: 'jogar' };

export const play = (game?: IGameDef, mode?: string): LanguagePathResolver => (language: Language) =>
  `/${[language, playDictionary[language], game?.codes[language], mode].filter((e) => e != null).join('/')}`;
