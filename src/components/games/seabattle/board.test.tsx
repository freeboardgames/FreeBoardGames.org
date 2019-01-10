import * as React from 'react';
import { Board } from './board';
import { expect } from 'chai';
import { VALID_SETUP_FIRST_PLAYER, VALID_SETUP_SECOND_PLAYER } from './mocks';
import { SeabattleGame } from './game';
import { Client } from 'boardgame.io/client';
import GameBar from '../../App/Game/GameBar';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('start', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const comp = Enzyme.mount((
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
    />
  ));
  // First page must have some ships
  expect(comp.find('ShipsPlacement').length).to.equal(1);
  comp.find('button').simulate('click');
});

test('waiting opponent', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const state1 = {...state0, ctx: { ...state0.ctx, actionPlayers: ['1']}};
  const comp = Enzyme.mount((
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
    />
  ));
  // First page must have some ships
  expect(comp.html()).to.contain('Waiting');
});

test('gameover', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const state1 = {...state0, ctx: { ...state0.ctx, gameover: { winner: '1' }}};
  const comp = Enzyme.mount((
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
    />
  ));
  // First page must have some ships
  expect(comp.html()).to.contain('LOST');
});

test('battle', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const state1 = {...state0, ctx: { ...state0.ctx, phase: 'play'}};
  const comp = Enzyme.mount((
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
    />
  ));
  // First page must have some ships
  expect(comp.find('Battle').length).to.equal(1);
});
