import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { Client as ReactClient } from 'boardgame.io/react';
import { BashniGame } from './game';

import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';

import { Board } from './board';
import { GameMode } from 'gamesShared/definitions/mode';

Enzyme.configure({ adapter: new Adapter() });

const BoardTest = (props: any) => (
  <Board
    {...{
      ...props,
      gameArgs: {
        gameCode: 'bashni',
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
    game: BashniGame,
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
    game: BashniGame,
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

  expect(comp.find('rect').at(getPosition(0, 3)).prop('style').fill).toEqual(blue[700]);
  comp.unmount();
});

test('highlighting selectable pieces with forced capture', async () => {
  const App = ReactClient({
    game: BashniGame,
    debug: false,
    board: BoardTest,
  });
  const comp = Enzyme.mount(<App playerID={'0'} />);

  await comp.find('rect').at(getPosition(4, 5)).simulate('click');
  await comp.find('rect').at(getPosition(3, 4)).simulate('click');
  comp.setProps({ playerID: '1' });
  comp.update();
  await comp.find('rect').at(getPosition(1, 2)).simulate('click');
  await comp.find('rect').at(getPosition(0, 3)).simulate('click');
  comp.setProps({ playerID: '0' });
  comp.update();
  await comp.find('rect').at(getPosition(3, 4)).simulate('click');
  await comp.find('rect').at(getPosition(4, 3)).simulate('click');
  comp.setProps({ playerID: '1' });
  comp.update();

  expect(comp.find('rect').at(getPosition(3, 2)).prop('style').fill).toEqual(cyan[500]);
  expect(comp.find('rect').at(getPosition(5, 2)).prop('style').fill).toEqual(cyan[500]);
});

test('gameover - won', () => {
  const client = Client({
    game: BashniGame,
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
        gameCode: 'bashni',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('white');
});

test('gameover - lost', () => {
  const client = Client({
    game: BashniGame,
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
        gameCode: 'bashni',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('black');
});

test('gameover - draw', () => {
  const client = Client({
    game: BashniGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: { ...state0.ctx, gameover: { winner: 'draw' } },
  };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'bashni',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('draw');
});

test('gameover - draw by repetition', () => {
  const client = Client({
    game: BashniGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: { ...state0.ctx, gameover: { winner: 'repetition' } },
  };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'bashni',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('repetition');
});

test('gameover - won online', () => {
  const client = Client({
    game: BashniGame,
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
        gameCode: 'bashni',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('won');
});

test('gameover - lost online', () => {
  const client = Client({
    game: BashniGame,
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
        gameCode: 'bashni',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('lost');
});
