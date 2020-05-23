import React from 'react';
import { mount } from 'enzyme';
import { GameLayout } from './GameLayout';
import { IGameArgs } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';
import { LobbyService } from '../Lobby/LobbyService';
import ReplayIcon from '@material-ui/icons/Replay';
import Router from 'next/router';

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
    Router.query = { matchId: 'roomFoo' };
    const p = Promise.resolve('fooNextRoom');
    LobbyService.getPlayAgainNextRoom = jest.fn().mockReturnValue(p);

    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.OnlineFriend,
      players: [],
      matchCode: 'baz',
    };

    const wrapper = mount(<GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />);

    wrapper.find(ReplayIcon).simulate('click');
    await p;
    expect(Router.push).toHaveBeenCalledWith('/room/fooNextRoom');
  });

  it('should call window.location.reload', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.AI,
    };
    const wrapper = mount(<GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />);
    wrapper.find(ReplayIcon).simulate('click');
    expect(Router.push).toHaveBeenCalled();
  });
});
