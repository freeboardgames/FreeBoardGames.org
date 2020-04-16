import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { Client as ReactClient } from 'boardgame.io/react';
import { TakeSixGame, TakeSixGameForTest } from './game';

import { Board } from './board';
import { GameMode } from 'components/App/Game/GameModePicker';
import { IGameCtx } from 'boardgame.io/core';

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
        gameCode: 'takesix',
        mode: GameMode.OnlineFriend,
        players,
      },
    }}
  />
);

const TakeSixGameConstSeed = TakeSixGameForTest({ seed: 0 });
// Decks are:
// 2 35, 1 93, 2 95, 1 51

// Player 0 Hand is:
// 1 17, 1 18, 1 28, 1 37, 5 44, ->
// 7 55, 1 57, 1 82, 1 94, 1 102

// Player 1 Hand is:
// 1 1 , 3 10, 1 16, 1 39, 1 43, ->
// 1 58, 1 64, 3 70, 2 75, 3 80

test('select a card', () => {
  const App = ReactClient({
    game: TakeSixGameConstSeed,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = Enzyme.mount(<App playerID={'0'} />);

  expect(comp.find('PlayerHand CardComponent').length).toEqual(10);
  comp.find('PlayerHand CardComponent').at(0).simulate('click');
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
    .at(0) // Card 1 17
    .simulate('click');

  comp.setProps({ playerID: '1' });
  comp.update();

  expect(comp.find('PlayerHand CardComponent').length).toEqual(10);
  comp
    .find('PlayerHand CardComponent')
    .at(0) // Card 1 1
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
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'takesix',
        players,
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  const gameOverText = comp.find('[data-testid="gameOverText"]').at(0).text();
  expect(gameOverText).toEqual('Game Over, you won!');
});

test('loss', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { winner: '1' };
  const comp = Enzyme.mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'takesix',
        players,
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  const gameOverText = comp.find('[data-testid="gameOverText"]').at(0).text();
  expect(gameOverText).toEqual('Game Over, you lost!');
});

test('draw', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { draw: true };
  const comp = Enzyme.mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'takesix',
        players,
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  const gameOverText = comp.find('[data-testid="gameOverText"]').at(0).text();
  expect(gameOverText).toEqual('Game Over, draw!');
});
