import React from 'react';
import TwitterIcon from './TwitterIcon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Twitter icon is rendered', () => {
  const icon = Enzyme.mount(<TwitterIcon />);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
