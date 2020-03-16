import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('WhatsApp icon is rendered', () => {
  const icon = Enzyme.mount(<WhatsAppIcon />);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
