import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { Client as ReactClient } from 'boardgame.io/react';
import { CornerusGame } from './game';

import { Board } from './board';
import { GameMode } from 'gamesShared/definitions/mode';
import blue from '@material-ui/core/colors/blue';

Enzyme.configure({ adapter: new Adapter() });

const players = [
  { playerID: 0, name: 'foo', roomID: '' },
  { playerID: 1, name: 'bar', roomID: '' },
];

const BoardTest = (props: any) => (
  <Board
    {...{
      ...props,
      gameArgs: {
        gameCode: 'cornerus',
        mode: GameMode.OnlineFriend,
        players,
      },
    }}
  />
);

test('controls', () => {
  const App = ReactClient({
    game: CornerusGame,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = Enzyme.mount(<App playerID={'0'} />);

  comp.find('#rotate-left').at(0).simulate('click');
  comp.find('#rotate-right').at(0).simulate('click');
  comp.find('#flip-x').at(0).simulate('click');
  comp.find('#flip-y').at(0).simulate('click');
  comp.find('#rotate-left').at(0).simulate('click');
  comp.find('#flip-x').at(0).simulate('click');
  comp.find('#flip-y').at(0).simulate('click');
  comp.find('#select-next').at(0).simulate('click');
  comp.find('#select-prev').at(0).simulate('click');
  comp.find('#place').at(0).simulate('click');

  expect(comp.find('Token').length).toEqual(2);
});

test('pieces', () => {
  const client = Client({
    game: CornerusGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: { ...state0.ctx, currentPlayer: '1' },
    G: { ...state0.G, board: new Array(64).fill('0') },
  };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'1'}
      gameArgs={{
        gameCode: 'cornerus',
        mode: GameMode.LocalFriend,
        players,
      }}
    />,
  );

  expect(comp.find('rect').at(0).prop('style').fill).toEqual(blue[700]);
});

test('gameover - won', () => {
  const client = Client({
    game: CornerusGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: {
      ...state0.ctx,
      gameover: {
        scoreboard: [
          { playerID: '0', score: -30 },
          { playerID: '1', score: -65 },
        ],
      },
    },
    G: { ...state0.G, board: new Array(64).fill('0') },
  };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'cornerus',
        mode: GameMode.OnlineFriend,
        players,
      }}
    />,
  );
  expect(comp.html()).toContain('won');
});

test('gameover - lost', () => {
  const client = Client({
    game: CornerusGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: {
      ...state0.ctx,
      gameover: {
        scoreboard: [
          { playerID: '0', score: -30 },
          { playerID: '1', score: -65 },
        ],
      },
    },
  };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'1'}
      gameArgs={{
        gameCode: 'cornerus',
        mode: GameMode.OnlineFriend,
        players,
      }}
    />,
  );
  expect(comp.html()).toContain('lost');
});

test('gameover - draw', () => {
  const client = Client({
    game: CornerusGame,
  });
  const state0 = client.store.getState();
  const state1 = {
    ...state0,
    ctx: {
      ...state0.ctx,
      gameover: {
        scoreboard: [
          { playerID: '0', score: -65 },
          { playerID: '1', score: -65 },
        ],
      },
    },
  };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'cornerus',
        mode: GameMode.OnlineFriend,
        players,
      }}
    />,
  );
  expect(comp.html()).toContain('draw');
});
