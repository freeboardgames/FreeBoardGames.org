import { GAMES_LIST } from './games';
import { registerLang, trans } from '@freeboardgame.org/i18n';
import translations from './App/translations';

export interface IPageMetadata {
  title: string;
  description?: string;
  url?: RegExp;
  noindex?: boolean;
}

const TITLE_PREFIX = 'FreeBoardGame.org - ';

function getDefaultMetadata(lang: string): IPageMetadata {
  return {
    title: trans('metadata.default.title', lang),
    description: trans('metadata.default.description', lang),
    noindex: true,
  };
}

// Most specific URLs MUST come first.
const PAGES_METADATA: IPageMetadata[] = [
  {
    title: TITLE_PREFIX + 'metadata.about.title',
    description: 'metadata.about.description',
    url: new RegExp('^/about', 'i'),
  },
  {
    title: TITLE_PREFIX + 'metadata.about.title',
    description: 'metadata.index.description',
    url: new RegExp('^/$', 'i'),
  },
];

function getAllPagesMetadata(lang: string): IPageMetadata[] {
  const otherPagesMetadata = PAGES_METADATA.map(page => {
    return { ...page, title: trans(page.title, lang), description: trans(page.description, lang) };
  });
  const gamePagesMetadata = getGamesPageMetadata(lang);
  const allPagesMetadata: IPageMetadata[] = [...otherPagesMetadata, ...gamePagesMetadata];
  return allPagesMetadata;
}

function getGamesPageMetadata(lang: string): IPageMetadata[] {
  return GAMES_LIST.map(gameDef => {
    const titleTransTemplate = trans('metadata.gameTemplate.title', lang);
    const titleTranslated = titleTransTemplate.replace('${GAME}', gameDef.name);
    return {
      title: TITLE_PREFIX + titleTranslated,
      description: trans(gameDef.descriptionTag, lang),
      url: new RegExp(`^/g/${gameDef.code}$`, 'i'),
    };
  });
}

export function getLangFromURL(url: string, translationsDict: any) {
  const match = url.match(/\/([A-Za-z]{2})/);
  if (match) {
    const lang = match[1].toLowerCase();
    if (lang in translationsDict) {
      return lang;
    }
  }
}

/** Given a URL, gets its title. */
export const getPageMetadata = (url: string): IPageMetadata => {
  let lang = getLangFromURL(url, translations);
  if (!lang) {
    // fallback to English
    lang = 'en';
  }
  registerLang(lang, translations[lang]);
  const allPagesMetadata = getAllPagesMetadata(lang);
  let metadata = allPagesMetadata.find(meta => meta.url!.test(url));
  if (!metadata) {
    metadata = getDefaultMetadata(lang);
  }
  metadata.description = trans(metadata.description, lang);
  metadata.title = trans(metadata.title, lang);
  return metadata;
};
