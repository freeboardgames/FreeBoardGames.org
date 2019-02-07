import * as React from 'react';

import { GamesList } from './GamesList';
import { ListItem } from 'material-ui/List';
import { mount } from 'enzyme';
import { expect } from 'chai';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StaticRouter } from 'react-router-dom';

describe('<GamesList />', () => {
  it('should have correct games listed', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <StaticRouter location={'/'} context={{}}>
          <GamesList />
        </StaticRouter>
      </MuiThemeProvider>);
    const items = wrapper.find('GameCard');
    expect(items.at(0).html()).to.contain('Chess');
  });
});
