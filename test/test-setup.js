/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });
//Google analytics mock
jest.mock('react-ga');

//SW mock
let swRegisterMock = jest.fn();
let mockPromise = new Promise(function (resolve, reject) {
  resolve({ update: jest.fn() });
});
swRegisterMock.mockReturnValue(mockPromise)
global.navigator.serviceWorker = {
  register: swRegisterMock
};


