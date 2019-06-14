/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

// Google analytics mock
jest.mock('react-ga');

// mock i18n
// trans('examplepage.header') will render in tests as "examplepage.header"
jest.mock('@freeboardgame.org/i18n', () => ({
  trans: jest.fn(attr => attr),
  registerLang: jest.fn(),
  setCurrentLocale: jest.fn()
}))

jest.mock('copy-to-clipboard', () => {
  global.copyClipboardMock = jest.fn();
  return global.copyClipboardMock;
});

// mock window.scrollTo
global.scrollTo = jest.fn();

//SW mock
if (typeof window !== 'undefined') {
  let swRegisterMock = jest.fn();
  let mockPromise = new Promise(function (resolve, reject) {
    resolve({ update: jest.fn() });
  });
  swRegisterMock.mockReturnValue(mockPromise)
  global.navigator.serviceWorker = {
    register: swRegisterMock
  };
}


