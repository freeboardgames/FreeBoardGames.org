// import `fetch` to fix apollo-link-http-common's Invariant Violation:
// fetch is not found globally and no fetcher passed, to fix pass a fetch for
// your environment like https://www.npmjs.com/package/node-fetch.
(global as any).fetch = require('node-fetch');
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Router } from 'infra/i18n';
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
  push: jest.fn(),
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
  withRouter: jest.fn(),
}));

jest.spyOn(require('next/router'), 'useRouter');

jest.spyOn(Router, 'push');

jest.mock('react-i18next/dist/commonjs/context', () => {
  const { createContext } = jest.requireActual('react');
  const i18next = jest.requireActual('i18next');

  i18next.init({
    lng: 'en',
    supportedLngs: ['en', 'pt'],
    initImmediate: false,
    resources: {},
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
