import 'jest-extended';
import '@testing-library/jest-dom';
import 'expect-puppeteer';

import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  blur: 0.5,
});

expect.extend({ toMatchImageSnapshot });

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

(global as any).baseURL = 'http://localhost:3000';
(global as any).viewports = { PHONE_HEIGHT: 823, PHONE_WIDTH: 411, TABLET_HEIGHT: 768, TABLET_WIDTH: 1024 };
