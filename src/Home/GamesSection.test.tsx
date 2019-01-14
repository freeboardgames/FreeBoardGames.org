import * as React from 'react';

import GamesSection from './GamesSection';
import { ListItem } from 'material-ui/List';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<GamesSection />', () => {
  it('should have correct games listed', () => {
    const wrapper = shallow(<GamesSection />);
    const items = wrapper.find(ListItem);
    expect(items.get(0).props.primaryText).to.equal('Chess');
  });
});
