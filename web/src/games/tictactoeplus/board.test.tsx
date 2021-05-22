import { Client } from 'boardgame.io/client';
import { GameMode } from 'gamesShared/definitions/mode';
import React from 'react';
import { makeMount } from 'test/utils/enzyme';
import { Board } from './board';
import { TictactoePlusGame } from './game';

const players = [
  { playerID: 0, name: 'foo', roomID: '' },
  { playerID: 1, name: 'bar', roomID: '' },
];

const mount = makeMount({ gameCode: 'tictactoeplus' });

const getTestBoard = (mode: GameMode) => (props: any) => (
  <Board {...props} gameArgs={{ gameCode: 'tictactoeplus', mode, players }} />
);

test('clicking a cell on the board', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const clickCellMock = jest.fn();
  client.moves.clickCell = clickCellMock;
  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  board.find('rect').at(0).simulate('click');
  expect(clickCellMock.mock.calls.length).toEqual(1);
});

test('click a cell that has already been played', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  const clickCellMock = jest.fn();
  client.moves.clickCell = clickCellMock;
  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  board.find('rect').at(0).simulate('click');
  expect(clickCellMock.mock.calls.length).toEqual(0);
});

test('render board - one X and one O - local friend', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="status"]')).toContainText("Red's turn");
  expect(board.find('rect').length).toEqual(16); // 16 rectangles
  expect(board.find('.cross').length + board.find('circle').length + board.find('.wild').length).toEqual(2); // total 2 items
});

test("render board - O's turn - local friend", () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(
    <TestBoard
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      gameArgs={{
        gameCode: 'tictactoeplus',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(board.find('[data-testid="status"]')).toContainText("Green's turn");
});

test('render board - X wins - local friend', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('Red won');
});

test('render board - O wins - local friend', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('Green won');
});

test('render board - X wins - AI', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const TestBoard = getTestBoard(GameMode.AI);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you won');
});

test('render board - O wins - AI', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const TestBoard = getTestBoard(GameMode.AI);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you lost');
});

test('render board - O wins - draw', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const TestBoard = getTestBoard(GameMode.AI);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('draw');
});

test('render board - draw - local friend', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('draw');
});

test('render board - our turn - online', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="status"]')).toContainText('YOUR TURN');
});

test('render board - their turn - online', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell

  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID={'1'} isActive={true} />);
  expect(board.find('[data-testid="status"]')).toContainText('Waiting');
});

test('render board - one X and one O - online', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('.cross').length + board.find('.wild').length).toBeGreaterThanOrEqual(1); // one X
  expect(board.find('circle').length + board.find('.wild').length).toBeGreaterThanOrEqual(1); // one O
});

test('render board - we win - online', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you won');
});

test('render board - we lose - online', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you lost');
});

test('render board - draw - online', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(<TestBoard G={state1.G} ctx={state1.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  expect(board.find('[data-testid="gameOverText"]')).toContainText('draw');
});

test('render board - AI', () => {
  const client = Client({
    game: TictactoePlusGame,
  });
  const state0 = client.store.getState();
  const TestBoard = getTestBoard(GameMode.AI);
  const board = mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID={'0'} isActive={true} />);
  board.find('rect').at(0).simulate('click');
  expect(board.find('[data-testid="status"]')).toContainText('YOUR TURN');
});
