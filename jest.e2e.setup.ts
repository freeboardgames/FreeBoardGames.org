import 'jest-extended';
import '@testing-library/jest-dom';
import 'expect-puppeteer';

import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  blur: 0.25,
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
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

(global as any).setPhoneViewport = async () => {
  await page.setUserAgent(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/97.0.298258560 Mobile/15E148 Safari/604.1',
  );
  await page.setViewport({ height: viewports.PHONE_HEIGHT, width: viewports.PHONE_WIDTH });
};

(global as any).setTabletViewport = async () => {
  await page.setUserAgent(
    'Mozilla/5.0 (iPad; CPU OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/8.1.3 Mobile/15E148 Safari/605.1.15',
  );
  await page.setViewport({ height: viewports.TABLET_HEIGHT, width: viewports.TABLET_WIDTH });
};
