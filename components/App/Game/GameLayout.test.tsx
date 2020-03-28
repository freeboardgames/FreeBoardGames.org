import React from 'react';
import { mount } from 'enzyme';
import { GameLayout } from './GameLayout';
import { IGameArgs } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';
import { LobbyService } from '../Lobby/LobbyService';
import ReplayIcon from '@material-ui/icons/Replay';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('ReplayIcon', () => {
  it('should show ReplayIcon for AI', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.AI,
    };

    const wrapper = mount(<GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />);
    expect(wrapper.find(ReplayIcon).length).toEqual(1);
  });

  it('should show ReplayIcon for LocalFriend', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.LocalFriend,
    };

    const wrapper = mount(<GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />);

    expect(wrapper.find(ReplayIcon).length).toEqual(1);
  });

  it('should redirect to room returned by play again endpoint', async () => {
    const p = Promise.resolve('roomfoo');
    LobbyService.getPlayAgainNextRoom = jest.fn().mockReturnValue(p);
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.OnlineFriend,
      players: [],
      matchCode: 'baz',
    };

    const wrapper = mount(<GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />);

    const mockReload = jest.fn();
    Object.defineProperty(window.location, 'replace', {
      writable: true,
      value: mockReload,
    });

    wrapper.find(ReplayIcon).simulate('click');
    await p;
    expect(mockReload.mock.calls.length).toEqual(1);
  });

  it('should call window.location.reload', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.AI,
    };
    const wrapper = mount(<GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />);
    wrapper.find(ReplayIcon).simulate('click');
    expect(window.location.replace).toHaveBeenCalled();
  });
});
