import * as React from 'react';
import About from './About';
import TurnatoBar from '../App/TurnatoBar';
import * as Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { expect } from 'chai';

describe('About', () => {

  it('should contain TurnatoBar ', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>);
    expect(wrapper.find(TurnatoBar)).to.have.lengthOf(1);
  });

});
