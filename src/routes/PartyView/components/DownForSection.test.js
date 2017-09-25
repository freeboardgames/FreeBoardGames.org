import React from 'react';
import DownForSection from './DownForSection.js';
import CircularProgress from 'material-ui/CircularProgress';
import {ListItem} from 'material-ui/List';
import { shallow } from 'enzyme';


describe('<DownForSection />', () => {
  var wrapper;
  it('should default to all games unselected', () => {
    let games_mock = [
      {code: 'a', name: 'foo', maxPlayers: 2, loading: false},
      {code: 'b', name: 'bar', maxPlayers: 3, loading: false},
    ];
    let downMapping_mock = {};
    let currentUserId_mock = '1234';
    let down_mock = () => () => { return; };

    wrapper = shallow(
      <DownForSection
        games={games_mock}
        downMapping={downMapping_mock}
        currentUserId={currentUserId_mock}
        down={down_mock}
      />);

    let items = wrapper.find(ListItem);
    expect(items.length).to.equal(2);
    expect(items.get(0).props.leftCheckbox.props.checked).to.equal(false);
    expect(items.get(1).props.leftCheckbox.props.checked).to.equal(false);
  });
  it('should correctly show checked box', () => {
    let games_mock = [
      {code: 'a', name: 'foo', maxPlayers: 2, loading: false},
      {code: 'b', name: 'bar', maxPlayers: 3, loading: false},
    ];
    let downMapping_mock = {'a': ['1234']};
    let currentUserId_mock = '1234';
    let down_mock = () => () => { return; };

    wrapper = shallow(
      <DownForSection
        games={games_mock}
        downMapping={downMapping_mock}
        currentUserId={currentUserId_mock}
        down={down_mock}
      />);

    let items = wrapper.find(ListItem);
    expect(items.get(0).props.leftCheckbox.props.checked).to.equal(true);
    expect(items.get(1).props.leftCheckbox.props.checked).to.equal(false);
  });
  it('should correctly show loading', () => {
    let games_mock = [
      {code: 'a', name: 'foo', maxPlayers: 2, loading: true},
      {code: 'b', name: 'bar', maxPlayers: 3, loading: false},
    ];
    let downMapping_mock = {};
    let currentUserId_mock = '1234';
    let down_mock = () => () => { return; };

    wrapper = shallow(
      <DownForSection
        games={games_mock}
        downMapping={downMapping_mock}
        currentUserId={currentUserId_mock}
        down={down_mock}
      />);

    let items = wrapper.find(ListItem);
    expect(items.get(0).props.leftCheckbox.type).to.equal(CircularProgress);
  });
});
