import React from 'react';
import QrCodeIcon from './QrCodeIcon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('QR code icon is rendered', () => {
  const icon = Enzyme.mount(<QrCodeIcon />);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
