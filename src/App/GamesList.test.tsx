import React from 'react';

import { GamesList } from './GamesList';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { StaticRouter } from 'react-router-dom';

describe('<GamesList />', () => {
  it('should have correct games listed', () => {
    const wrapper = mount(
      <StaticRouter location={'/'} context={{}}>
        <GamesList />
      </StaticRouter>);
    const items = wrapper.find('GameCard');
    expect(items.at(0).html()).to.contain('Chess');
  });
});
