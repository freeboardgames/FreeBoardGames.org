import React from 'react';
import { Battle, BattleInternal } from './Battle';
import { SeabattleGame } from './game';
import { VALID_SETUP_FIRST_PLAYER, VALID_SETUP_SECOND_PLAYER } from './mocks';
import { Client } from 'boardgame.io/client';
import { makeMount } from 'test/utils/enzymeUtil';

const mount = makeMount({ gameCode: 'seabattle' });

test('one phase - hit', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const store = client.store;
  client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
  client.updatePlayerID('1');
  client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

  client.moves.salvo(0, 0);
  client.updatePlayerID('0');
  client.moves.salvo(1, 1);
  client.updatePlayerID('1');

  const grid = mount(
    <Battle
      ctx={store.getState().ctx}
      G={store.getState().G}
      moves={client.moves}
      playerID={'1'}
      currentPlayer={store.getState().ctx.currentPlayer}
      getSoundPref={jest.fn(() => true)}
    />,
  );
  const internal = grid.find(BattleInternal);
  // should be ignored
  grid.find({ x: 0, y: 0 }).find('Square').at(0).simulate('click');
  grid.find({ x: 0, y: 9 }).find('Square').at(0).simulate('click');
  expect(grid.find('[data-testid="message"]')).toContainText('CLICK TO SHOOT');

  grid.setProps({
    ...grid.props(),
    G: store.getState().G,
    currentPlayer: store.getState().ctx.currentPlayer,
  });
  expect(grid.find('[data-testid="message"]')).toContainText('HIT');

  // End Animation...
  (internal.instance() as BattleInternal)._animate(internal.state('startTime'))();
  (internal.instance() as BattleInternal)._animate((internal.state('startTime') as number) + 1e4)();

  expect(grid.find('[data-testid="message"]')).toContainText('Waiting for opponent...');
});

test('one phase - miss', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const store = client.store;
  client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
  client.updatePlayerID('1');
  client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

  client.moves.salvo(9, 9);

  const grid = mount(
    <Battle
      ctx={store.getState().ctx}
      G={store.getState().G}
      moves={client.moves}
      playerID={'1'}
      currentPlayer={store.getState().ctx.currentPlayer}
      getSoundPref={jest.fn(() => true)}
    />,
  ).find(BattleInternal);
  grid.setState({
    ...grid.state(),
    startTime: Date.now(),
    salvo: { hit: false },
    showSalvo: true,
  });
  expect(grid.find('[data-testid="message"]')).toContainText('MISS');
});
