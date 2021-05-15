import React from 'react';
import { QrCodePopup } from './QrCodePopup';
import Enzyme from 'enzyme';

test('QR code is shown', () => {
  const popup = Enzyme.mount(<QrCodePopup url="https://example.org" toggleQrCode={() => {}} />);
  expect(popup.find('QrCodePopup').length).toBeGreaterThan(0);
});
