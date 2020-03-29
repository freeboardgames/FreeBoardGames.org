import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';
import '@testing-library/jest-dom';
import 'expect-puppeteer';

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
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
