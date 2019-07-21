/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// Google analytics mock
jest.mock('react-ga', () => {
  return { initialize: jest.fn(), set: jest.fn(), pageview: jest.fn(), event: jest.fn() };
});

jest.mock('copy-to-clipboard', () => {
  global.copyClipboardMock = jest.fn();
  return global.copyClipboardMock;
});

// mock window.scrollTo
global.scrollTo = jest.fn();

//SW mock
if (typeof window !== 'undefined') {
  let swRegisterMock = jest.fn();
  let mockPromise = new Promise(function(resolve) {
    resolve({ update: jest.fn() });
  });
  swRegisterMock.mockReturnValue(mockPromise);
  global.navigator.serviceWorker = {
    register: swRegisterMock,
  };
}
