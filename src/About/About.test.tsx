import * as React from 'react';
import About from './About';
import FreeBoardGameBar from '../App/FreeBoardGameBar';
import * as Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { expect } from 'chai';

describe('About', () => {

  it('should contain FreeBoardGameBar', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>);
    expect(wrapper.find(FreeBoardGameBar)).to.have.lengthOf(1);
  });

});
