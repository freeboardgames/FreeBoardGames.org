import { Language } from 'infra/i18n/types';
import { IGameDef } from 'gamesShared/definitions/game';
import { LanguagePathResolver } from './types';
import { playDictionary } from './dictionary';

export const play = (game?: IGameDef, mode?: string): LanguagePathResolver => (language: Language) =>
  `/${[language, playDictionary[language], game?.codes?.[language] || game?.code, mode]
    .filter((e) => e != null)
    .join('/')}`;
