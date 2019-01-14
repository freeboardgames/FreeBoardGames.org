import * as React from 'react';
import App from './App';
import * as Enzyme from 'enzyme';
import { expect } from 'chai';
import Chess from '../games/chess';
import Home from '../Home/Home';
import NotFound from './NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StaticRouter } from 'react-router-dom';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const context = {};
  it('should go to home', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <StaticRouter location={'/'} context={context}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(Home)).to.have.lengthOf(1);
    expect(wrapper.find(NotFound)).to.have.lengthOf(0);
  });

  it('should go to chess', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <StaticRouter location={'/g/Chess'} context={context}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(Chess)).to.have.lengthOf(1);
    expect(wrapper.find(NotFound)).to.have.lengthOf(0);
  });

  it('should show not found page', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <StaticRouter location={'/doesnotexist'} context={context}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(NotFound)).to.have.lengthOf(1);
  });
});
