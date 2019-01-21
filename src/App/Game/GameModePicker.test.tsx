import * as React from 'react';
import { GameModePicker, GameMode } from './GameModePicker';
import { ListItem } from 'material-ui/List';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Game Mode Picker', () => {

  it('should show all 5 options and accept clicks', () => {
    const historyMock = { push: jest.fn() };
    const modesMock = [
      GameMode.EasyAI,
      GameMode.MediumAI,
      GameMode.HardAI,
      GameMode.OnlineFriend,
      GameMode.LocalFriend,
    ];
    const wrapper = shallow((
      <GameModePicker gameCode="foo" modes={modesMock} history={historyMock} />
    ));
    wrapper.find(ListItem).at(0).simulate('click');
    wrapper.find(ListItem).at(1).simulate('click');
    wrapper.find(ListItem).at(2).simulate('click');
    wrapper.find(ListItem).at(3).simulate('click');
    wrapper.find(ListItem).at(4).simulate('click');
    expect(historyMock.push.mock.calls.length).to.equal(5);
  });
});
