import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { GameLayout } from './GameLayout';
import { IGameArgs } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';
import { LobbyService } from '../Lobby/LobbyService';

describe('ReplayIcon', () => {
  it('should show ReplayIcon for AI', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.AI,
    };

    const wrapper = mount(
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>,
    );

    expect(wrapper.find('ReplayIcon').length).to.equal(1);
  });

  it('should show ReplayIcon for LocalFriend', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.LocalFriend,
    };

    const wrapper = mount(
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>,
    );

    expect(wrapper.find('ReplayIcon').length).to.equal(1);
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

    const wrapper = mount(
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>,
    );

    const mockReload = jest.fn();
    Object.defineProperty(window.location, 'replace', {
      writable: true,
      value: mockReload,
    });

    wrapper.find('ReplayIcon').simulate('click');
    await p;
    expect(mockReload.mock.calls.length).to.equal(1);
  });

  it('should call window.location.reload', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.AI,
    };
    const wrapper = mount(
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>,
    );

    const mockReload = jest.fn();
    expect(mockReload.mock.calls.length).to.equal(0);

    Object.defineProperty(window.location, 'reload', {
      writable: true,
      value: mockReload,
    });

    wrapper.find('ReplayIcon').simulate('click');
    expect(mockReload.mock.calls.length).to.equal(1);
  });
});
