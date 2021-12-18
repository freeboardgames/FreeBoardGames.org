import { IGameDef, IGameTranslationStatus } from 'gamesShared/definitions/game';
import { Language } from 'infra/i18n';

export function makeTranslationStatusComparator(language: Language) {
  return (game: IGameDef) => {
    const gameTranslationStatus = game.translationStatus?.[language]?.valueOf();
    return (
      (language === 'en' && gameTranslationStatus !== IGameTranslationStatus.PARTIAL) ||
      gameTranslationStatus === IGameTranslationStatus.DONE.valueOf()
    );
  };
}
