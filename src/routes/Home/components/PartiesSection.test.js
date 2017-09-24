import React from 'react';

import PartiesSection from './PartiesSection.js';
import {ListItem} from 'material-ui/List';
import { shallow } from 'enzyme';


describe('<PartiesSection />', () => {
  var wrapper;
  it('should have correct parties listed', () => {
    let parties_mock = [{_id: 'foo', name: 'Foo!'}, {_id: 'bar', name: 'Bar?'}];
    let viewParty_mock = () => () => {
      return;
    };
    let newParty_mock = () => {
      return;
    };

    wrapper = shallow(
      <PartiesSection
      parties={parties_mock}
      viewParty={viewParty_mock}
      newParty={newParty_mock}
      disconnected={false}/>);

    let items = wrapper.find(ListItem);
    expect(wrapper.find(ListItem)).to.have.length(2);
    expect(items.get(0).props.primaryText).to.equal('Foo!');
    expect(items.get(1).props.primaryText).to.equal('Bar?');
  });

  it('should show correct message when no parties', () => {
    let parties_mock = [];
    let viewParty_mock = () => () => {
      return;
    };
    let newParty_mock = () => {
      return;
    };

    wrapper = shallow(
      <PartiesSection
      parties={parties_mock}
      viewParty={viewParty_mock}
      newParty={newParty_mock}
      disconnected={false}/>);

    expect(wrapper.text()).to.contain('You do not belong to any party yet');
  });

  it('should show offline message when disconnected', () => {
    let parties_mock = [];
    let viewParty_mock = () => () => {
      return;
    };
    let newParty_mock = () => {
      return;
    };

    wrapper = shallow(
      <PartiesSection
      parties={parties_mock}
      viewParty={viewParty_mock}
      newParty={newParty_mock}
      disconnected={true}/>);

    let item = wrapper.find(ListItem).get(0);
    expect(item.props.primaryText).to.contain('Offline');
  });
});
