// import `fetch` to fix apollo-link-http-common's Invariant Violation:
// fetch is not found globally and no fetcher passed, to fix pass a fetch for
// your environment like https://www.npmjs.com/package/node-fetch.
(global as any).fetch = require('node-fetch');
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';
Enzyme.configure({ adapter: new Adapter() });

// Google analytics mock
jest.mock('react-ga', () => {
  return { initialize: jest.fn(), set: jest.fn(), pageview: jest.fn(), event: jest.fn() };
});

jest.mock('copy-to-clipboard', () => {
  (global as any).copyClipboardMock = jest.fn();
  return (global as any).copyClipboardMock;
});

// mock window.location
const { location } = global as any;
delete (global as any).location;
(global as any).location = { ...location, reload: jest.fn() };

// mock window.scrollTo
(global as any).scrollTo = jest.fn();

//SW mock
if (typeof window !== 'undefined') {
  let swRegisterMock = jest.fn();
  let mockPromise = new Promise(function (resolve) {
    resolve({ update: jest.fn() });
  });
  swRegisterMock.mockReturnValue(mockPromise);
  (global as any).navigator.serviceWorker = {
    register: swRegisterMock,
  };
}

jest.mock('next/router', () => ({
  query: '',
  push: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    route: '',
    pathname: '',
    query: {},
    asPath: '',
  }),
  withRouter: jest.fn(),
}));

jest.mock('react-i18next/dist/commonjs/context', () => {
  const { createContext } = jest.requireActual('react');
  const i18next = jest.requireActual('i18next');
  const glob = jest.requireActual('glob');
  const { readFileSync } = jest.requireActual('fs');

  i18next.init({
    lng: 'en',
    supportedLngs: ['en', 'pt'],
    initImmediate: false,
    resources: {},
  });

  const paths = glob.sync('public/static/locales/en/**/*.json', { nonull: false });
  paths.forEach((path: string) => {
    const shortPath = path.replace('public/static/locales/en/', '').replace('.json', '');
    const translations = JSON.parse(readFileSync(path, 'utf-8'));
    i18next.addResourceBundle('en', shortPath, translations);
  });

  return {
    ...jest.requireActual('react-i18next/dist/commonjs/context'),
    I18nContext: createContext({ i18n: i18next }),
  };
});

jest.mock('gamesShared/components/fbg/GameDarkSublayout', () => {
  const { GameDarkSublayoutInternal, ...others } = jest.requireActual('gamesShared/components/fbg/GameDarkSublayout');
  return {
    ...others,
    GameDarkSublayoutInternal,
    GameDarkSublayout: GameDarkSublayoutInternal,
  };
});

const denylist = [
  'react-i18next:: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
];
/* eslint-disable no-console */
const warn = console.warn;
jest.spyOn(console, 'warn').mockImplementation((...[message, ...args]) => {
  if (!denylist.includes(message)) {
    warn(...[message, ...args]);
  }
});
/* eslint-enable no-console */

// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};
