import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { Battle } from './Battle';
import { IShip, ISeabattleState, SeabattleGame } from './game';
import { VALID_SETUP_FIRST_PLAYER, VALID_SETUP_SECOND_PLAYER } from './mocks';
import { Client } from 'boardgame.io/client';

Enzyme.configure({ adapter: new Adapter() });

test('one phase', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const store = client.store;
  client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
  client.updatePlayerID('1');
  client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

  const grid = Enzyme.mount(
    <Battle
      G={store.getState().G}
      moves={client.moves}
      playerID={'1'}
      currentPlayer={store.getState().ctx.currentPlayer}
    />);
  expect(grid.html()).to.contain('CLICK TO SHOOT');

  grid.find({x: 0, y: 9}).find('Square').at(0).simulate('click');
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
