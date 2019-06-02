import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { Client as ReactClient } from '@freeboardgame.org/boardgame.io/react';
import { TakeSixGame, TakeSixGameForTest } from './game';
import { MemoryRouter } from 'react-router';
import { Board } from './board';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';

Enzyme.configure({ adapter: new Adapter() });

const BoardTest = (props: any) => (
  <MemoryRouter>
    <Board
      {...{
        ...props,
        gameArgs: { mode: GameMode.OnlineFriend },
      }}
    />
  </MemoryRouter>
);

const TakeSixGameConstSeed = TakeSixGameForTest({ seed: 0 });
// Decks are:
// 1 93, 2 35, 1 51, 2 95

// Player 0 Hand is:
// 7 55, 1 18, 1 28, 1 94, 1 17 ->
// 1 57, 1 82, 1 37, 5 44, 1 102

// Player 1 Hand is:
// 1 58, 3 80, 1 43, 2 75, 1 64 ->
// 1 39, 3 10, 3 70, 1 16, 1 1

test('select a card', () => {
  const App = ReactClient({
    game: TakeSixGameConstSeed,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = Enzyme.mount(<App playerID={'0'} />);

  expect(comp.find('PlayerHand CardComponent').length).toEqual(10);
  comp
    .find('PlayerHand CardComponent')
    .at(0)
    .simulate('click');
  expect(comp.find('PlayerHand CardComponent').length).toEqual(9);
});

test('second player', () => {
  const App = ReactClient({
    game: TakeSixGameConstSeed,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = Enzyme.mount(<App playerID={'0'} />);

  comp
    .find('PlayerHand CardComponent')
    .at(0) // Card 7 55
    .simulate('click');

  comp.setProps({ playerID: '1' });
  comp.update();

  expect(comp.find('PlayerHand CardComponent').length).toEqual(10);
  comp
    .find('PlayerHand CardComponent')
    .at(0) // Card 1 58
    .simulate('click');
  expect(comp.find('PlayerHand CardComponent').length).toEqual(9);
});

test('win', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { winner: '0' };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'takesix',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(
    comp
      .find('h2')
      .at(1)
      .text(),
  ).toEqual('Game Over, you won!');
});

test('loss', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { winner: '1' };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'takesix',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(
    comp
      .find('h2')
      .at(1)
      .text(),
  ).toEqual('Game Over, you lost!');
});

test('draw', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { draw: true };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'takesix',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(
    comp
      .find('h2')
      .at(1)
      .text(),
  ).toEqual('Game Over, draw!');
});
