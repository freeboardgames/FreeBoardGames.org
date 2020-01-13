import React from 'react';
import { Board } from './board';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GameMode } from 'components/App/Game/GameModePicker';
import { ConnectFourGame } from './game';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { localPlayerNames } from './constants';

Enzyme.configure({ adapter: new Adapter() });

function getTestClient() {
  return Client({
    game: ConnectFourGame,
  });
}

function getTestComp(client: any, gameMode: any, state?: any) {
  let state0 = client.store.getState();
  if (state) {
    state0 = state;
  }
  const comp = Enzyme.mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: gameMode,
      }}
    />,
  );
  return comp;
}

test('click a cell on the border', () => {
  const client = getTestClient();
  client.moves.selectColumn = jest.fn();
  const comp = getTestComp(client, GameMode.LocalFriend);
  comp
    .find('circle')
    .at(0)
    .simulate('click');
  expect(client.moves.selectColumn.mock.calls.length).to.equal(1);
});

test("render Blue's turn - local friend", () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.LocalFriend);
  expect(comp.html()).to.contain(localPlayerNames['0'] + "'s turn");
});

test("render Green's turn - local friend", () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.LocalFriend);
  expect(comp.html()).to.contain(localPlayerNames['1'] + "'s turn");
});

test('render Blue wins - local friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = getTestComp(client, GameMode.LocalFriend, state1);
  expect(comp.html()).to.contain(localPlayerNames['0'] + ' won');
});

test('render Green wins - local friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = getTestComp(client, GameMode.LocalFriend, state1);
  expect(comp.html()).to.contain(localPlayerNames['1'] + ' won');
});

test('render Draw - local freind', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = getTestComp(client, GameMode.LocalFriend, state1);
  expect(comp.html()).to.contain('draw');
});

test('render your turn - online friend', () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.OnlineFriend);
  expect(comp.html()).to.contain('YOUR TURN');
});

test('render your turn - online friend', () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.OnlineFriend);
  expect(comp.html()).to.contain('Waiting for opponent...');
});

test('render you won - Online friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = getTestComp(client, GameMode.OnlineFriend, state1);
  expect(comp.html()).to.contain('you won');
});

test('render you lost - Online friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = getTestComp(client, GameMode.OnlineFriend, state1);
  expect(comp.html()).to.contain('you lost');
});

test('render Draw - Online freind', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = getTestComp(client, GameMode.OnlineFriend, state1);
  expect(comp.html()).to.contain('draw');
});
