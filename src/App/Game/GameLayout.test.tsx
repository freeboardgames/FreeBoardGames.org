import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { GameLayout } from './GameLayout';
import { IGameArgs } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';
import ReactGA from 'react-ga';

describe('ReplayIcon', () => {
  it('should show ReplayIcon for AI', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.AI,
    };

    const wrapper = mount((
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>
    ));

    expect(wrapper.find('ReplayIcon').length).to.equal(1);
  });

  it('should show ReplayIcon for LocalFriend', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.LocalFriend,
    };

    const wrapper = mount((
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>
    ));

    expect(wrapper.find('ReplayIcon').length).to.equal(1);
  });

  it('should not show ReplayIcon for OnlineFriend', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.OnlineFriend,
    };

    const wrapper = mount((
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>
    ));

    expect(wrapper.find('ReplayIcon').length).to.equal(0);
  });

  it('should call window.location.reload', () => {
    const gameArgs: IGameArgs = {
      gameCode: 'FooGame',
      mode: GameMode.AI,
    };
    const wrapper = mount((
      <MemoryRouter>
        <GameLayout gameOver={'Foo Won'} gameArgs={gameArgs} />
      </MemoryRouter>
    ));

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
