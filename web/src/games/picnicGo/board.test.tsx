import { GameMode } from 'gamesShared/definitions/mode';
import { Ctx } from 'boardgame.io';
import { Client } from 'boardgame.io/client';
import { Client as ReactClient } from 'boardgame.io/react';
import React from 'react';
import { makeMount } from 'test/utils/enzymeUtil';
import { Board } from './board';
import { PicnicGoGame } from './game';

const players = [
  { playerID: 0, name: 'p0', roomID: '' },
  { playerID: 1, name: 'p1', roomID: '' },
];

const mount = makeMount({ gameCode: 'picnicGo' });

const BoardTest = (props: any) => (
  <Board {...props} gameArgs={{ gameCode: 'picnicGo', mode: GameMode.OnlineFriend, players }} />
);

const PicnicGoConstSeed = {
  ...PicnicGoGame,
  seed: 'test',
};

test('select a card', () => {
  const App = ReactClient({
    game: PicnicGoConstSeed,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = mount(<App playerID={'0'} />);

  expect(comp.find('BottomInfo Card img').at(0).prop('style').transform).toEqual('scale(0.85)');
  comp.find('BottomInfo Card').at(0).simulate('click');
  expect(comp.find('BottomInfo Card img').at(0).prop('style').transform).toEqual('none');
});

test('two players select cards', () => {
  const App = ReactClient({
    game: PicnicGoConstSeed,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = mount(<App playerID={'0'} />);

  comp.find('BottomInfo Card').at(0).simulate('click');

  comp.setProps({ playerID: '1' });
  comp.update();

  expect(comp.find('BottomInfo Card').length).toEqual(10);
  comp.find('BottomInfo Card').at(0).simulate('click');
  expect(comp.find('BottomInfo Card').length).toEqual(9);
});

test('fork related tests', () => {
  const App = ReactClient({
    game: PicnicGoConstSeed,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = mount(<App playerID={'0'} />);

  // No forks in hand, button should be disabled
  expect(comp.find('BottomInfo .useFork').at(0).prop('disabled')).toBeTruthy();

  comp.find('BottomInfo Card').at(2).simulate('click');

  comp.setProps({ playerID: '1' });
  comp.update();

  comp.find('BottomInfo Card').at(0).simulate('click');

  comp.setProps({ playerID: '0' });
  comp.update();

  // Fork button should be enabled now
  expect(comp.find('BottomInfo .useFork').at(0).prop('disabled')).toBeFalsy();

  comp.find('BottomInfo .useFork').at(0).simulate('click');

  expect(comp.find('BottomInfo .useFork').at(0).prop('disabled')).toBeTruthy();

  comp.find('BottomInfo Card').at(0).simulate('click');
  comp.find('BottomInfo Card').at(1).simulate('click');

  // Both cards 0 and 1 should have the selected style
  expect(comp.find('BottomInfo Card img').at(0).prop('style').transform).toEqual('none');
  expect(comp.find('BottomInfo Card img').at(1).prop('style').transform).toEqual('none');
});

test('round end button', () => {
  const App = ReactClient({
    game: PicnicGoConstSeed,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = mount(<App playerID={'0'} />);

  expect(comp.find('BottomInfo .endButton').length).toEqual(0);

  for (let i = 0; i < 10; i++) {
    comp.find('BottomInfo Card').at(0).simulate('click');
    comp.setProps({ playerID: '1' });
    comp.update();
    comp.find('BottomInfo Card').at(0).simulate('click');
    comp.setProps({ playerID: '0' });
    comp.update();
  }

  expect(comp.find('BottomInfo .endButton').length).toBeGreaterThan(0);

  expect(comp.find('BottomInfo .endButton').at(0).prop('variant')).toEqual('contained');
  comp.find('BottomInfo .endButton').at(0).simulate('click');
  expect(comp.find('BottomInfo .endButton').at(0).prop('variant')).toEqual('text');
});

test('game over - win', () => {
  const client = Client({
    game: PicnicGoGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as Ctx).gameover = {
    scoreboard: [
      {
        playerID: '0',
        score: 56,
        extraData: [4],
      },
      {
        playerID: '1',
        score: 44,
        extraData: [2],
      },
    ],
  };
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'picnicGo',
        players,
        mode: GameMode.OnlineFriend,
      }}
    />,
  );

  const gameOverText = comp.find('[data-testid="gameOverText"]').at(0).text();
  expect(gameOverText).toEqual('Game Over, you won!');
});

test('game over - lose', () => {
  const client = Client({
    game: PicnicGoGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as Ctx).gameover = {
    scoreboard: [
      {
        playerID: '0',
        score: 56,
        extraData: [4],
      },
      {
        playerID: '1',
        score: 44,
        extraData: [2],
      },
    ],
  };
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'1'}
      gameArgs={{
        gameCode: 'picnicGo',
        players,
        mode: GameMode.OnlineFriend,
      }}
    />,
  );

  const gameOverText = comp.find('[data-testid="gameOverText"]').at(0).text();
  expect(gameOverText).toEqual('Game Over, you lost!');
});

test('game over - draw', () => {
  const client = Client({
    game: PicnicGoGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as Ctx).gameover = {
    scoreboard: [
      {
        playerID: '0',
        score: 50,
        extraData: [5],
      },
      {
        playerID: '1',
        score: 50,
        extraData: [5],
      },
    ],
  };
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'picnicGo',
        players,
        mode: GameMode.OnlineFriend,
      }}
    />,
  );

  const gameOverText = comp.find('[data-testid="gameOverText"]').at(0).text();
  expect(gameOverText).toEqual('Game Over, draw!');
});
