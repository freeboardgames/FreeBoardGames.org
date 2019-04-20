export interface IPageMetadata {
  title: string;
  description?: string;
  url?: RegExp;
  noindex?: boolean;
}

const TITLE_PREFIX = 'FreeBoardGame.org - ';

const DEFAULT_METADATA: IPageMetadata = {
  title: TITLE_PREFIX + 'Play Free Board Games Online',
  description: 'Play board games in your browser for free. \
Compete against your online friends or play locally. Free and open-source software project.',
};

// Most specific URLs MUST come first.
const PAGES_METADATA: IPageMetadata[] = [
  {
    title: TITLE_PREFIX + 'Play Chess Against the Computer',
    noindex: true,
    url: new RegExp('^/g/chess/ai', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Two Player Chess Locally',
    noindex: true,
    url: new RegExp('^/g/chess/local', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Chess with an Online Friend',
    description: 'Play a free chess game against an online friend in your browser.',
    noindex: true,
    url: new RegExp('^/g/chess/online', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Chess Online',
    description: 'Play a game of chess in your browser for free.  Compete against your online friends or play locally.',
    url: new RegExp('^/g/chess', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Tic-Tac-Toe Against the Computer',
    noindex: true,
    url: new RegExp('^/g/tictactoe/ai', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Tic-Tac-Toe with Online Friend',
    noindex: true,
    url: new RegExp('^/g/tictactoe/online', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Tic-Tac-Toe Locally',
    noindex: true,
    url: new RegExp('^/g/tictactoe/local', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Tic-Tac-Toe Online',
    description: 'Play Tic-Tac-Toe in your browser for free.  Compete against your online friends or play locally.',
    url: new RegExp('^/g/tictactoe', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Seabattle Against the Computer',
    noindex: true,
    url: new RegExp('^/g/seabattle/ai', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Seabattle with Online Friend',
    description: 'Battle and sink ships in a free online game with an online friend.',
    noindex: true,
    url: new RegExp('^/g/seabattle/online', 'i'),
  },
  {
    title: TITLE_PREFIX + 'Play Free Seabattle Online',
    description: 'Battle and sink ships in a free online game with your friend.',
    url: new RegExp('^/g/seabattle', 'i'),
  },
  {
    title: TITLE_PREFIX + 'About Us',
    description: 'About FreeBoardGame.org, a free and open-source software project.',
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
