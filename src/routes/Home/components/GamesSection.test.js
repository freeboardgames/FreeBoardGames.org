import React from 'react';

import GamesSection from './GamesSection.js';
import {ListItem} from 'material-ui/List';
import { shallow } from 'enzyme';


describe('<GamesSection />', () => {
  var wrapper;
  beforeEach(() => {
    let games_mock = [{code: 'foo', name: 'Foo!'}, {code: 'bar', name: 'Bar?'}];
    let viewGame_mock = () => () => {
      return;
    };
    wrapper = shallow(
      <GamesSection
      games={games_mock}
      viewGame={viewGame_mock}/>);
  });
  it('should have correct amount of games listed', () => {
    expect(wrapper.find(ListItem)).to.have.length(2);
  });
  it('should list games names', () => {
    let items = wrapper.find(ListItem);
    expect(items.get(0).props.primaryText).to.equal('Foo!');
    expect(items.get(1).props.primaryText).to.equal('Bar?');
  });
});
