import * as React from 'react';
import Home from './Home';
import GamesSection from './GamesSection';
import * as Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { expect } from 'chai';

describe('Home', () => {

  it('should contain Chess option', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>);
    expect(wrapper.find(GamesSection)).to.have.lengthOf(1);
  });

});
