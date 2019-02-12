export interface IPageMetadata {
  title: string; description: string;
  url?: RegExp;
}

const DEFAULT_METADATA: IPageMetadata = {
  title: 'FreeBoardGame.org - Play Free Board Games Online',
  description: 'Play free board games online. Free software project.',
};
// Most specific URLs MUST come first.
const PAGES_METADATA: IPageMetadata[] = [
  {
    title: 'FreeBoardGame.org - Play Two Players Free Chess Locally',
    description: 'Local free chess game for two players on the same device.',
    url: new RegExp('^/g/chess/local', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Chess With Online Friend',
    description: 'Online free chess game for playing with friends.',
    url: new RegExp('^/g/chess/online', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Chess Online',
    description: 'Free chess game that can be played locally or online.',
    url: new RegExp('^/g/chess', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Seabattle Online',
    description: 'Battle and sink ships in a free online game with your friend.',
    url: new RegExp('^/g/seabattle', 'i'),
  },
  {
    title: 'FreeBoardGame.org - Play Free Seabattle With Online Friend',
    description: 'Battle online friends in a free game, sinking their ships.',
    url: new RegExp('^/g/seabattle/online', 'i'),
  },
  {
    title: 'FreeBoardGame.org - About us',
    description: 'About the free software project FreeBoardGame.org.',
    url: new RegExp('^/about', 'i'),
  },
];

/** Given a URL, gets its title. */
export const getPageMetadata = (url: string): IPageMetadata => {
  const metadata = PAGES_METADATA.find((meta) => meta.url!.test(url));
  if (!metadata) {
    return DEFAULT_METADATA;
  }
  return metadata;
};
