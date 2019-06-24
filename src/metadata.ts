import { GAMES_LIST } from './games';

export interface IPageMetadata {
  name?: string;
  title: string;
  description?: string;
  url?: RegExp;
  link?: string;
  noindex?: boolean;
}

const TITLE_PREFIX = 'FreeBoardGame.org - ';
const URL_BASE = 'https://FreeBoardGame.org';

const DEFAULT_METADATA: IPageMetadata = {
  title: 'FreeBoardGame.org',
  description: `Play board games in your browser for free. \
Compete against your online friends or play locally. Free and open-source software project.`,
  noindex: true,
};

// Most specific URLs MUST come first.
const PAGES_METADATA: IPageMetadata[] = [
  {
    name: 'About Us',
    title: TITLE_PREFIX + 'About Us',
    description: 'About FreeBoardGame.org, a free and open-source software project.',
    url: new RegExp('^/about', 'i'),
    link: URL_BASE + '/about',
  },
  {
    title: TITLE_PREFIX + 'Play Free Board Games Online',
    description: `Play board games in your browser for free. \
Compete against your online friends or play locally. Free and open-source software project.`,
    url: new RegExp('^/$', 'i'),
  },
];

function getGamesPageMetadata(): IPageMetadata[] {
  return GAMES_LIST.map(gameDef => ({
    name: gameDef.name,
    title: TITLE_PREFIX + `Play Free ${gameDef.name} Online`,
    description: gameDef.descriptionTag,
    url: new RegExp(`^/g/${gameDef.code}$`, 'i'),
    link: `${URL_BASE}/g/${gameDef.code}`,
  }));
}

/** Given a URL, gets its title. */
export const getPageMetadata = (url: string): IPageMetadata => {
  const allPagesMetadata = [...PAGES_METADATA, ...getGamesPageMetadata()];
  const metadata = allPagesMetadata.find(meta => meta.url!.test(url));
  if (!metadata) {
    return DEFAULT_METADATA;
  }
  return metadata;
};

export const getBreadcrumbs = (): string => {
  const allPagesMetadata = [...PAGES_METADATA, ...getGamesPageMetadata()];
  const pageElements = allPagesMetadata
    .filter((pageMetadata: IPageMetadata) => {
      return pageMetadata.name && pageMetadata.link; // check if we have both .name and .link
    })
    .map((pageMetadata: IPageMetadata, index: number) => {
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: pageMetadata.name,
        item: pageMetadata.link,
      };
    });
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pageElements,
  };
  return JSON.stringify(breadcrumbList);
};
