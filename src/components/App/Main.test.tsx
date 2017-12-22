import * as React from 'react';
import Main from './Main';
import * as Enzyme from 'enzyme';
import { expect } from 'chai';
import Chess from '../games/Chess';
import Home from '../Home';
import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';
import * as Adapter from 'enzyme-adapter-react-16';
import 'mocha';

Enzyme.configure({ adapter: new Adapter() });

describe('Main', () => {

  it('should go to home', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Main/>
      </MemoryRouter>);
    expect(wrapper.find(Home)).to.have.lengthOf(1);
    expect(wrapper.find(NotFound)).to.have.lengthOf(0);
  });

  it('should go to chess', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={[ '/g/Chess' ]}>
        <Main/>
      </MemoryRouter>);
    expect(wrapper.find(Chess)).to.have.lengthOf(1);
    expect(wrapper.find(NotFound)).to.have.lengthOf(0);
  });

  it('should show not found page', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={[ '/doesnotexist' ]}>
        <Main/>
      </MemoryRouter>);
    expect(wrapper.find(NotFound)).to.have.lengthOf(1);
  });
});
