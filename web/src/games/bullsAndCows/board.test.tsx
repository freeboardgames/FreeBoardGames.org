import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { BullsAndCowsGame } from './game';
import { Board } from './board';
import { GameMode } from 'gamesShared/definitions/mode';

import Secret from './components/Secret';

Enzyme.configure({ adapter: new Adapter() });

const setup = (ctx: any = {}) => {
  const client = Client({
    game: BullsAndCowsGame,
  });

  let newProps: any = {
    ...client.store.getState(),
  };

  newProps = {
    ...newProps,
    ctx: {
      ...newProps.ctx,
      ...ctx,
    },
  };

  const wrapper = mount(
    <Board
      G={newProps.G}
      ctx={newProps.ctx}
      moves={client.moves as any}
      playerID={'0'}
      selectColour={jest.fn()}
      gameArgs={{
        gameCode: 'bullsAndCows',
        mode: GameMode.LocalFriend,
        players: [{ playerID: 0, name: 'Player 1' }],
      }}
    />,
  );

  return wrapper;
};

describe('Bulls and Cows Board', () => {
  it('should render View', () => {
    const wrapper = setup();

    expect(wrapper.find('.board').exists()).toBeTrue();
    expect(wrapper.find('.board > .attempts').exists()).toBeTrue();
    expect(wrapper.find('.board > .attempts > .guess').exists()).toBeTrue();
    expect(wrapper.find('.board > .colours').exists()).toBeTrue();
    expect(wrapper.text()).toContain('Bulls & Cows GUESS');
    expect(wrapper.find(Secret).exists()).toBe(false);
  });

  it('should show secret with You win on game victory', () => {
    const ctx: any = { gameover: { winner: true } };
    const wrapper = setup(ctx);

    expect(wrapper.text()).toContain('Game Over, You win');
    expect(wrapper.find(Secret).exists()).toBe(true);
  });

  it('should show secret with You lost on game over', () => {
    const ctx: any = { gameover: { loose: true } };
    const wrapper = setup(ctx);

    expect(wrapper.text()).toContain('Game Over, You lost');
    expect(wrapper.find(Secret).exists()).toBe(true);
  });
});
