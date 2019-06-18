import { GAMES_LIST } from './games';
import { registerLang, trans, setCurrentLocale } from '@freeboardgame.org/i18n';
import translations from './App/translations';

export interface IPageMetadata {
  title: string;
  description?: string;
  url?: RegExp;
  noindex?: boolean;
}

const TITLE_PREFIX = 'FreeBoardGame.org - ';
const LANG_CODE_URL_OPTIONAL = "^\/([A-Za-z]{2}?\/)?"; // prettier-ignore

function getDefaultMetadata(lang: string): IPageMetadata {
  return {
    title: trans('metadata.default.title', undefined, lang),
    description: trans('metadata.default.description', undefined, lang),
    noindex: true,
  };
}

// Most specific URLs MUST come first.
const PAGES_METADATA: IPageMetadata[] = [
  {
    title: 'metadata.about.title',
    description: 'metadata.about.description',
    url: new RegExp('^/about', 'i'),
  },
  {
    title: 'metadata.index.title',
    description: 'metadata.index.description',
    url: new RegExp("^\/([A-Za-z]{2}?)$", 'i') // prettier-ignore
  },
];

function getAllPagesMetadata(lang: string): IPageMetadata[] {
  const otherPagesMetadata = PAGES_METADATA.map(page => {
    return {
      ...page,
      title: TITLE_PREFIX + trans(page.title, undefined, lang),
      description: trans(page.description, undefined, lang),
    };
  });
  const gamePagesMetadata = getGamesPageMetadata(lang);
  const allPagesMetadata: IPageMetadata[] = [...otherPagesMetadata, ...gamePagesMetadata];
  return allPagesMetadata;
}

function getGamesPageMetadata(lang: string): IPageMetadata[] {
  return GAMES_LIST.map(gameDef => {
    const titleTransTemplate = trans('metadata.gameTemplate.title', undefined, lang);
    const titleTranslated = titleTransTemplate.replace('${GAME}', gameDef.name);
    return {
      title: TITLE_PREFIX + titleTranslated,
      description: trans(gameDef.descriptionTag, undefined, lang),
      url: new RegExp(`${LANG_CODE_URL_OPTIONAL}g/${gameDef.code}$`, 'i'),
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

export function transSSR(key: string, lang: string): string {
  registerLang(lang, translations[lang]);
  return trans(key, undefined, lang);
}

/** Given a URL, gets its title. */
export const getPageMetadata = (url: string): IPageMetadata => {
  let lang = getLangFromURL(url, translations);
  if (!lang) {
    // fallback to English
    lang = 'en';
  }
  registerLang(lang, translations.en);
  registerLang(lang, translations[lang]);
  setCurrentLocale('pt');
  const allPagesMetadata = getAllPagesMetadata(lang);
  let metadata = allPagesMetadata.find(meta => meta.url!.test(url));
  if (!metadata) {
    metadata = getDefaultMetadata(lang);
  }
  metadata.description = trans(metadata.description, undefined, lang);
  metadata.title = trans(metadata.title, undefined, lang);
  return metadata;
};
