const DEFAULT_TITLE = 'FreeBoardGame.org - Play Free Board Games Online';
// Most specific URLs MUST come first.
const PAGE_TITLES = [
  {
    title: 'FreeBoardGame.org - Play Two Players Free Chess Locally',
    url: new RegExp('^/g/chess/local', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Chess With Online Friend',
    url: new RegExp('^/g/chess/online', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Chess Online',
    url: new RegExp('^/g/chess', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Seabattle Online',
    url: new RegExp('^/g/seabattle', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Seabattle With Online Friend',
    url: new RegExp('^/g/seabattle/online', 'i'),
  },
  {
    title: 'FreeBoardGame.org - About us',
    url: new RegExp('^/about', 'i'),
  },
];

/** Given a URL, gets its title. */
export const getPageTitle = (url: string): string => {
  const titleDef = PAGE_TITLES.find((def) => def.url.test(url));
  if (!titleDef) {
    return DEFAULT_TITLE;
  }
  return titleDef.title;
};
