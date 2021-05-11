import { IGameDef, IGameTranslationStatus } from 'gamesShared/definitions/game';
import { Language } from 'infra/i18n';

export function makeTranslationStatusComparator(language: Language) {
  return (game: IGameDef) =>
    language === 'en' || game.translationStatus?.[language]?.valueOf() === IGameTranslationStatus.DONE.valueOf();
}
