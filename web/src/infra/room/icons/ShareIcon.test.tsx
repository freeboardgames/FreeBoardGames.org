import React from 'react';
import ShareIcon from './ShareIcon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Share icon is rendered', () => {
  const icon = Enzyme.mount(<ShareIcon />);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
