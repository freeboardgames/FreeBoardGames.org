import * as React from 'react';
import FacebookIcon from './FacebookIcon';
import * as Enzyme from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Facebook icon is rendered', () => {
  const icon = Enzyme.mount(<MuiThemeProvider><FacebookIcon /></MuiThemeProvider>);
  expect(icon.find('path').length).toBeGreaterThan(0);
});
