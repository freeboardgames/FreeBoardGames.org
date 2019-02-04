import * as React from 'react';
import Home from './Home';
import { GamesList } from '../App/GamesList';
import * as Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { expect } from 'chai';

describe('Home', () => {

  it('should contain game list', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>);
    expect(wrapper.find(GamesList)).to.have.lengthOf(1);
  });

});
