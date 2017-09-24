import React from 'react';

import MatchesSection from './MatchesSection.js';
import {ListItem} from 'material-ui/List';
import { shallow } from 'enzyme';


describe('<MatchesSection />', () => {
  var wrapper;
  it('should have correct matches listed', () => {
    let matches_mock = [{_id: 'foo',
      playersNickname: ['aa', 'bb', 'cc'],
      game_name: 'Chess',
      status: 'ACTIVE'
    },
    {_id: 'foo',
      playersNickname: ['dd', 'ee', 'ff'],
      game_name: 'Chess',
      status: 'ACTIVE'
    }];
    let viewMatch_mock = () => () => {
      return;
    };

    wrapper = shallow(
      <MatchesSection
      disconnected={false}
      matches={matches_mock}
      viewMatch={viewMatch_mock}/>);

    let items = wrapper.find(ListItem);
    expect(wrapper.find(ListItem)).to.have.length(2);
    expect(items.get(0).props.primaryText).to.equal('aa, bb, cc');
    expect(items.get(1).props.primaryText).to.equal('dd, ee, ff');
  });
  it('should return null if there is no match', () => {
    let matches_mock = [];
    let viewMatch_mock = () => () => {
      return;
    };

    wrapper = shallow(
      <MatchesSection
      disconnected={false}
      matches={matches_mock}
      viewMatch={viewMatch_mock}/>);

    expect(wrapper.text()).to.equal('');
  });
  it('should return nothing if it is disconnected', () => {
    let matches_mock = [{code: 'foo',
      playersNickname: ['aa', 'bb', 'cc'],
      game_name: 'Chess',
      status: 'ACTIVE'
    }];
    let viewMatch_mock = () => () => {
      return;
    };

    wrapper = shallow(
      <MatchesSection
      disconnected={true}
      matches={matches_mock}
      viewMatch={viewMatch_mock}/>);

    expect(wrapper.text()).to.equal('');
  });
});
