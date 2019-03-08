import React from 'react';
import { GameModePicker, GameMode, IGameModeInfo } from './GameModePicker';
import ListItem from '@material-ui/core/ListItem';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

describe('Game Mode Picker', () => {

  it('should show all 5 options and accept clicks', () => {
    const historyMock = { push: jest.fn() };
    const modesMock: IGameModeInfo[] = [
      { mode: GameMode.AI, cardDescription: 'foo AI' },
      { mode: GameMode.OnlineFriend, cardDescription: 'online' },
      { mode: GameMode.LocalFriend, cardDescription: 'local' },
    ];
    const wrapper = mount((
      <MemoryRouter>
        <GameModePicker gameCode="foo" modes={modesMock} />
      </MemoryRouter>
    ));
    expect(wrapper.find('a').length).to.equal(3);
  });
});
