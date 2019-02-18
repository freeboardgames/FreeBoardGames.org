import React from 'react';
import FacebookIcon from './FacebookIcon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Facebook icon is rendered', () => {
  const icon = Enzyme.mount(<FacebookIcon />);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
