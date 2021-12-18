import { Language } from 'infra/i18n/types';
import { IGameDef } from 'gamesShared/definitions/game';
import { LanguagePathResolver } from './types';
import { playDictionary } from './dictionary';
import { getLanguage, getSafeGameCode, getLanguagePrefix } from './utils/safe';

export const play = (game?: IGameDef, mode?: string): LanguagePathResolver => (language: Language) => {
  const path = [
    getLanguagePrefix(language),
    playDictionary[getLanguage(language)],
    getSafeGameCode(game, language),
    mode,
  ];

  return `/${path.filter((e) => e != null).join('/')}`;
};
