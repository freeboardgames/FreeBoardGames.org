import React from 'react';
import { Board } from './board';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GameMode } from 'gamesShared/definitions/mode';
import { ConnectFourGame } from './game';
import { Client } from 'boardgame.io/client';

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
        gameCode: 'fourinarow',
        mode: gameMode,
        players: [
          { name: 'Player A', playerID: 0 },
          { name: 'Player B', playerID: 1 },
        ],
      }}
    />,
  );
  return comp;
}

test('click a cell on the border', () => {
  const client = getTestClient();
  client.moves.selectColumn = jest.fn();
  const comp = getTestComp(client, GameMode.LocalFriend);
  comp.find(`[data-testid="empty_disk_testid_0_0"]`).at(0).simulate('click');
  expect(client.moves.selectColumn.mock.calls.length).toEqual(1);
});

test("render Blue's turn - local friend", () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.LocalFriend);
  expect(comp.find('h5.MuiTypography-root').text()).toContain('board.player_turn');
});

test("render Red's turn - local friend", () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.LocalFriend);
  expect(comp.find('h5.MuiTypography-root').text()).toContain('board.player_turn');
});

test('render Blue wins - local friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = getTestComp(client, GameMode.LocalFriend, state1);
  expect(comp.find(`[data-testid="gameOverText"]`).at(0).text()).toContain('board.game_over.player_won');
});

test('render Red wins - local friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = getTestComp(client, GameMode.LocalFriend, state1);
  expect(comp.find(`[data-testid="gameOverText"]`).at(0).text()).toContain('board.game_over.player_won');
});

test('render Draw - local friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = getTestComp(client, GameMode.LocalFriend, state1);
  expect(comp.find(`[data-testid="gameOverText"]`).at(0).text()).toContain('board.game_over.draw');
});

test('render your turn - online friend', () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.OnlineFriend);
  expect(comp.find('h5.MuiTypography-root').text()).toContain('board.your_turn');
});

test('render your turn - online friend', () => {
  const client = getTestClient();
  client.moves.selectColumn(0);
  const comp = getTestComp(client, GameMode.OnlineFriend);
  expect(comp.find('h5.MuiTypography-root').text()).toContain('board.waiting_for_player');
});

test('render you won - Online friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = getTestComp(client, GameMode.OnlineFriend, state1);
  expect(comp.find(`[data-testid="gameOverText"]`).at(0).text()).toContain('board.game_over.you_won');
});

test('render you lost - Online friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = getTestComp(client, GameMode.OnlineFriend, state1);
  expect(comp.find(`[data-testid="gameOverText"]`).at(0).text()).toContain('board.game_over.you_lost');
});

test('render Draw - Online friend', () => {
  const client = getTestClient();
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = getTestComp(client, GameMode.OnlineFriend, state1);
  expect(comp.find(`[data-testid="gameOverText"]`).at(0).text()).toContain('board.game_over.draw');
});
