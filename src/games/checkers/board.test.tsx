import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { Client as ReactClient } from '@freeboardgame.org/boardgame.io/react';
import { CheckersGame } from './game';
import { MemoryRouter } from 'react-router';
import { Board } from './board';
import { GameMode } from '../../App/Game/GameModePicker';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

const BoardTest = (props: any) => (
  <MemoryRouter>
    <Board
      {...{
        ...props,
        gameArgs: {
          mode: GameMode.LocalFriend,
        },
      }}
    />
  </MemoryRouter>
);

function getPosition(x: number, y: number) {
  return 8 * x + y;
}

test('highlighting', () => {
  const App = ReactClient({
    game: CheckersGame,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = Enzyme.mount(<App playerID={'0'} />);

  comp
    .find('rect')
    .at(getPosition(0, 5))
    .simulate('click');
  comp
    .find('rect')
    .at(getPosition(1, 4))
    .simulate('click');
  comp.setProps({ playerID: '1' });
  comp.update();
  comp
    .find('rect')
    .at(getPosition(3, 2))
    .simulate('click');
  comp
    .find('rect')
    .at(getPosition(2, 3))
    .simulate('click');
  comp.setProps({ playerID: '0' });
  comp.update();
  comp
    .find('rect')
    .at(getPosition(1, 4))
    .simulate('click');
  comp
    .find('rect')
    .at(getPosition(3, 2))
    .simulate('click');

  expect(comp.find('Token').length).to.equal(23);
});

test('gameover - won', () => {
  const client = Client({
    game: CheckersGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: { ...state0.ctx, gameover: { winner: '0' } },
  };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'checkers',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('white');
});

test('gameover - lost', () => {
  const client = Client({
    game: CheckersGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: { ...state0.ctx, gameover: { winner: '1' } },
  };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'checkers',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('black');
});

test('gameover - won online', () => {
  const client = Client({
    game: CheckersGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: { ...state0.ctx, gameover: { winner: '0' } },
  };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'checkers',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('won');
});

test('gameover - lost online', () => {
  const client = Client({
    game: CheckersGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: { ...state0.ctx, gameover: { winner: '1' } },
  };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'checkers',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('lost');
});
