import React from 'react';
import WhatsappIcon from './WhatsAppIcon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Whatsapp icon is rendered', () => {
  const icon = Enzyme.mount(<WhatsappIcon />);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
