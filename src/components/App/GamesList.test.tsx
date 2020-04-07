import React from 'react';

import { GamesList } from './GamesList';
import { mount } from 'enzyme';

describe('<GamesList />', () => {
  it('should have correct games listed', () => {
    const wrapper = mount(<GamesList />);
    const items = wrapper.find('GameCard');
    expect(items.at(0).html()).toContain('Chess');
  });
});
