import { IGameStatus, IGameTranslationStatus } from '../../src/gamesShared/definitions/game';
import { getAllGames } from '../../src/infra/game';
import { i18n } from '../../server/config/i18n';
import { playDictionary } from '../../src/infra/navigation/dictionary';
import { IGameDef } from '../../src/gamesShared/definitions/game';
import { UrlTag, AlternateLink } from './types';

export const generateSiteMapUrls = (): UrlTag[] => {
  return [...getDefaultUrls(), ...getGamesUrls()];
};

const DEFAULT_PATHS = ['/', '/about'];

function getDefaultUrls(): UrlTag[] {
  const urls: UrlTag[] = [];
  for (const path of DEFAULT_PATHS) {
    for (const mainLanguage of i18n.locales) {
      const alternateLinks: AlternateLink[] = [];
      for (const altLanguage of i18n.locales) {
        alternateLinks.push({
          href: `/${altLanguage}${path}`,
          hreflang: altLanguage,
        });
      }
      urls.push({
        loc: `/${mainLanguage}${path}`,
        alternateLinks,
      });
    }
  }
  return urls;
}

function isValidLanguage(game: IGameDef, language: string) {
  const translationStatus = (game.translationStatus || {})[language];
  if (language != 'en' && translationStatus != IGameTranslationStatus.DONE) {
    return false;
  }
  return true;
}

function getTranslatedGameCode(game: IGameDef, language: string) {
  return game.codes?.[language] || game.code;
}

function getGamesUrls(): UrlTag[] {
  const urls: UrlTag[] = [];
  const games = getAllGames();
  for (const game of games) {
    if (game.status === IGameStatus.IN_DEVELOPMENT) {
      continue;
    }
    const validLanguages = i18n.locales.filter((language) => isValidLanguage(game, language));
    for (const mainLanguage of validLanguages) {
      const mainPlayVerb = playDictionary[mainLanguage];
      const alternateLinks: AlternateLink[] = [];
      for (const altLanguage of validLanguages) {
        const altPlayVerb = playDictionary[altLanguage];
        alternateLinks.push({
          href: `/${altLanguage}/${altPlayVerb}/${getTranslatedGameCode(game, altLanguage)}`,
          hreflang: altLanguage,
        });
      }
      urls.push({
        loc: `/${mainLanguage}/${mainPlayVerb}/${getTranslatedGameCode(game, mainLanguage)}`,
        alternateLinks,
      });
    }
  }
  return urls;
}
