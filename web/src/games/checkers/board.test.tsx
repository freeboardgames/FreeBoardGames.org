import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { Client as ReactClient } from 'boardgame.io/react';
import { CheckersGame } from './game';

import { Board } from './board';
import { GameMode } from 'gamesShared/definitions/mode';

Enzyme.configure({ adapter: new Adapter() });

const BoardTest = (props: any) => (
  <Board
    {...{
      ...props,
      gameArgs: {
        gameCode: 'checkers',
        mode: GameMode.LocalFriend,
      },
    }}
  />
);

function getPosition(x: number, y: number) {
  return 8 * x + y;
}

test('highlighting', async () => {
  const App = ReactClient({
    game: CheckersGame,
    debug: false,
    board: BoardTest,
  });
  const comp = Enzyme.mount(<App playerID={'0'} />);

  await comp.find('rect').at(getPosition(0, 5)).simulate('click');
  await comp.find('rect').at(getPosition(1, 4)).simulate('click');
  comp.setProps({ playerID: '1' });
  comp.update();
  await comp.find('rect').at(getPosition(3, 2)).simulate('click');
  await comp.find('rect').at(getPosition(2, 3)).simulate('click');
  comp.setProps({ playerID: '0' });
  comp.update();
  // Position 1,4 is already pre-selected
  await comp.find('rect').at(getPosition(3, 2)).simulate('click');

  expect(comp.find('Token').length).toEqual(46); // 2 tokens per piece, 23 pieces.

  comp.unmount();
});

test('highlighting the only valid move', async () => {
  const App = ReactClient({
    game: CheckersGame,
    debug: false,
    board: BoardTest,
  });
  const comp = Enzyme.mount(<App playerID={'0'} />);

  await comp.find('rect').at(getPosition(0, 5)).simulate('click');
  await comp.find('rect').at(getPosition(1, 4)).simulate('click');
  comp.setProps({ playerID: '1' });
  comp.update();
  await comp.find('rect').at(getPosition(1, 2)).simulate('click');
  await comp.find('rect').at(getPosition(0, 3)).simulate('click');
  comp.setProps({ playerID: '0' });
  comp.update();
  await comp.find('rect').at(getPosition(2, 5)).simulate('click');
  await comp.find('rect').at(getPosition(3, 4)).simulate('click');
  comp.setProps({ playerID: '1' });
  comp.update();

  expect(comp.find(Board).state('selected')).toEqual({ x: 0, y: 3 });
  comp.unmount();
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
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'checkers',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('white');
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
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'checkers',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('black');
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
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'checkers',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('won');
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
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'checkers',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('lost');
});
