import React from 'react';
import { QrCodePopup } from './QrCodePopup';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('QR code is shown', () => {
  const popup = Enzyme.mount(<QrCodePopup url="https://example.org" toggleQrCode={() => {}} />);
  expect(popup.find('QrCodePopup').length).toBeGreaterThan(0);
});
