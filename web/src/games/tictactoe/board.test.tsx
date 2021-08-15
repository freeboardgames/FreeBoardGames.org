import { Client } from 'boardgame.io/client';
import { GameMode } from 'gamesShared/definitions/mode';
import React from 'react';
import { makeMount } from 'test/utils/enzymeUtil';
import { Board } from './board';
import { TictactoeGame } from './game';

const mount = makeMount({ gameCode: 'tictactoe' });

test('clicking a cell on the board', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell = jest.fn();
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  comp.find('rect').at(0).simulate('click');
  expect(client.moves.clickCell.mock.calls.length).toEqual(1);
});

test('click a cell that has already been played', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell = jest.fn();
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  comp.find('rect').at(0).simulate('click');
  expect(client.moves.clickCell.mock.calls.length).toEqual(0);
});

test('render board - one X and one O - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain("Red's turn");
  expect(comp.find('rect').length).toEqual(9); // 9 rectangles
  expect(comp.find('.cross').length).toEqual(1); // one X
  expect(comp.find('circle').length).toEqual(1); // one O
});

test("render board - O's turn - local friend", () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain("Green's turn");
});

test('render board - X wins - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('red won');
});

test('render board - O wins - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('green won');
});

test('render board - X wins - AI', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.AI,
      }}
    />,
  );
  expect(comp.html()).toContain('you won');
});

test('render board - O wins - AI', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.AI,
      }}
    />,
  );
  expect(comp.html()).toContain('you lost');
});

test('render board - O wins - draw', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.AI,
      }}
    />,
  );
  expect(comp.html()).toContain('draw');
});

test('render board - draw - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('draw');
});

test('render board - our turn - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('YOUR TURN');
});

test('render board - their turn - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'1'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('Waiting for opponent');
});

test('render board - one X and one O - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.find('.cross').length).toEqual(1); // one X
  expect(comp.find('circle').length).toEqual(1); // one O
});

test('render board - we win - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('you won');
});

test('render board - we lose - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('you lost');
});

test('render board - draw - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(comp.html()).toContain('draw');
});

test('render board - AI', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const comp = mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoe',
        mode: GameMode.AI,
      }}
    />,
  );
  comp.find('rect').at(0).simulate('click');
  expect(comp.html()).toContain('YOUR TURN');
});
