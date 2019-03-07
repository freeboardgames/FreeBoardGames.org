import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { Battle } from './Battle';
import { IShip, ISeabattleState, SeabattleGame } from './game';
import { VALID_SETUP_FIRST_PLAYER, VALID_SETUP_SECOND_PLAYER } from './mocks';
import { Client } from '@freeboardgame.org/boardgame.io/client';

Enzyme.configure({ adapter: new Adapter() });

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

  const grid = Enzyme.mount(
    <Battle
      G={store.getState().G}
      moves={client.moves}
      playerID={'1'}
      currentPlayer={store.getState().ctx.currentPlayer}
    />);
  // should be ignroed
  grid.find({ x: 0, y: 0 }).find('Square').at(0).simulate('click');
  grid.find({ x: 0, y: 9 }).find('Square').at(0).simulate('click');
  expect(grid.html()).to.contain('CLICK TO SHOOT');

  grid.setProps({
    ...grid.props(),
    G: store.getState().G,
    currentPlayer: store.getState().ctx.currentPlayer,
  });
  expect(grid.html()).to.contain('HIT');

  // End Animation...
  (grid.instance() as Battle)._animate(grid.state('startTime'))();
  (grid.instance() as Battle)._animate((grid.state('startTime') as number) + 1e4)();

  expect(grid.html()).to.contain('Waiting for opponent...');
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

  const grid = Enzyme.mount(
    <Battle
      G={store.getState().G}
      moves={client.moves}
      playerID={'1'}
      currentPlayer={store.getState().ctx.currentPlayer}
    />);
  grid.setState({
    ...grid.state(),
    startTime: Date.now(),
    salvo: { hit: false },
    showSalvo: true,
  });
  expect(grid.html()).to.contain('MISS');
});
