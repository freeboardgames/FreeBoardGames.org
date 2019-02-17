import React from 'react';
import TwitterIcon from './TwitterIcon';
import Enzyme from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Twitter icon is rendered', () => {
  const icon = Enzyme.mount(<MuiThemeProvider><TwitterIcon /></MuiThemeProvider>);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
