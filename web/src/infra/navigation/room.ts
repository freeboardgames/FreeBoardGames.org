import { IGameDef } from 'gamesShared/definitions/game';
import { Language } from 'infra/i18n';
import { LanguagePathResolver } from './types';
import { getSafeGameCode, getLanguagePrefix } from './utils/safe';

export const room =
  (roomId: string, game?: IGameDef, numberOfPlayers?: number): LanguagePathResolver =>
  (language: Language) =>
    `/${[getLanguagePrefix(language), 'room', roomId, getSafeGameCode(game, language), numberOfPlayers]
      .filter((e) => e != null)
      .join('/')}`;
