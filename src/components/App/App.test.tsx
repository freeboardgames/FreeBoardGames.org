import * as React from 'react';
import App from './App';
import * as Enzyme from 'enzyme';
import { expect } from 'chai';
import Chess from '../games/Chess';
import Home from '../Home/Home';
import NotFound from './NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MemoryRouter } from 'react-router-dom';
import * as Adapter from 'enzyme-adapter-react-16';
import 'mocha';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {

  it('should go to home', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <MemoryRouter initialEntries={[ '/' ]}>
            <App/>
        </MemoryRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(Home)).to.have.lengthOf(1);
    expect(wrapper.find(NotFound)).to.have.lengthOf(0);
  });

  it('should go to chess', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <MemoryRouter initialEntries={[ '/g/Chess' ]}>
          <App/>
        </MemoryRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(Chess)).to.have.lengthOf(1);
    expect(wrapper.find(NotFound)).to.have.lengthOf(0);
  });

  it('should show not found page', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <MemoryRouter initialEntries={[ '/doesnotexist' ]}>
          <App/>
        </MemoryRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(NotFound)).to.have.lengthOf(1);
  });
});
