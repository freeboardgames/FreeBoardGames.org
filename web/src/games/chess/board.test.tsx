jest.mock('./stockfish8.worker');
jest.mock('react-ga');

import { GameMode } from 'gamesShared/definitions/mode';
import React from 'react';
import { makeMount } from 'test/utils/enzyme';
import { Board, BoardInternal } from './board';

const players = [
  { playerID: 0, name: 'foo', roomID: '' },
  { playerID: 1, name: 'bar', roomID: '' },
];

const mount = makeMount({ gameCode: 'chess' });

const getTestBoard = (mode: GameMode) => (props: any) => (
  <Board {...props} gameArgs={{ gameCode: 'chess', mode, players }} />
);

test('render board - all states - local friend', () => {
  const moveMock = jest.fn();
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2,
        turn: 0,
        gameover: 'd',
        currentPlayer: '0',
        currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
    />,
  );
  expect(board.find('[data-testid="gameOverText"]')).toContainText('draw');
  // squares should not be selectable after the game ends:
  // attempt to select a2
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 1)).html()).not.toContain('green');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      gameover: 'b',
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.find('[data-testid="gameOverText"]')).toContainText('black won');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      gameover: 'w',
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.find('[data-testid="gameOverText"]')).toContainText('white won');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.find('[data-testid="status"]')).toContainText("White's turn");
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 1,
      currentPlayer: '1',
      currentPlayerMoves: 0,
    },
    G: { pgn: '1.f4' },
  });
  expect(board.find('[data-testid="status"]')).toContainText("Black's turn");
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
    G: { pgn: '1.f4 e5 2.g4 Qh4#' },
  });
  expect(board.find('[data-testid="status"]')).toContainText('CHECK');
});

test('render board - all states - online friend', () => {
  const moveMock = jest.fn();
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2,
        turn: 0,
        gameover: 'd',
        currentPlayer: '0',
        currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
    />,
  );

  // displays a message for a draw
  expect(board.find('[data-testid="gameOverText"]')).toContainText('draw');

  // displays a message for a lost on player 0
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      gameover: 'b',
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you lost');

  // displays a message for a win
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      gameover: 'w',
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you won');

  // displays a message for a lost on player 1
  board.setProps({
    ...board.props(),
    playerID: '1',
  });
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you lost');

  // displays  a message for a check
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
    G: { pgn: '1.f4 e5 2.g4 Qh4#' },
  });
  expect(board.find('[data-testid="status"]')).toContainText('CHECK');
});

function rowColAt(row: number, col: number) {
  return 8 * (col - 1) + (8 - row);
}

test('little game', () => {
  const moveMock = jest.fn();
  const TestBoard = getTestBoard(GameMode.OnlineFriend);
  const board = mount(
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2,
        turn: 0,
        currentPlayer: '0',
        currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
    />,
  );

  expect(board.find('[data-testid="status"]')).toContainText('YOUR TURN');
  // select a2
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 1)).html()).toContain('green');

  // unselect
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 1)).html()).not.toContain('green');

  // select f2
  board.find('rect').at(rowColAt(2, 6)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 6)).html()).toContain('green');

  // move to f4
  board.find('rect').at(rowColAt(4, 6)).simulate('click');
  expect(moveMock.mock.calls[0]).toEqual(['f4']);

  // mock move
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 1,
      currentPlayer: '1',
      currentPlayerMoves: 0,
    },
    G: { pgn: '1.f4' },
  });
  expect(board.find('[data-testid="status"]')).toContainText('Waiting for opponent...');

  // try invalid selection
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 1)).html()).not.toContain('green');

  // test inactive
  board.setProps({
    ...board.props(),
    isActive: false,
  });

  // cant select a7
  board.find('rect').at(rowColAt(7, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(7, 1)).html()).not.toContain('green');

  // make it active again
  board.setProps({
    ...board.props(),
    isActive: true,
  });

  // select a7
  board.find('rect').at(rowColAt(7, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(7, 1)).html()).toContain('green');

  // move to a5
  board.find('rect').at(rowColAt(5, 1)).simulate('click');
  expect(moveMock.mock.calls[1]).toEqual(['a5']);
});

test('little AI game', () => {
  const moveMock = jest.fn();
  const TestBoard = getTestBoard(GameMode.AI);
  const board = mount(
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2,
        turn: 0,
        currentPlayer: '0',
        currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
    />,
  );
  // select f2
  board.find('rect').at(rowColAt(2, 6)).simulate('click');

  // move to f4
  board.find('rect').at(rowColAt(4, 6)).simulate('click');
  expect(moveMock.mock.calls[0]).toEqual(['f4']);
});

test('AI gameover - all cases', () => {
  const moveMock = jest.fn();
  const stepMock = jest.fn();
  const TestBoard = getTestBoard(GameMode.AI);
  const board = mount(
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2,
        turn: 0,
        gameover: 'd',
        currentPlayer: '0',
        currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
      step={stepMock}
    />,
  );
  expect(board.find('[data-testid="gameOverText"]')).toContainText('draw');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      gameover: 'b',
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you lost');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      gameover: 'w',
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.find('[data-testid="gameOverText"]')).toContainText('you won');
});

test('castling fix', () => {
  const TestBoard = getTestBoard(GameMode.LocalFriend);
  const board = mount(
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2,
        turn: 0,
        currentPlayer: '0',
        currentPlayerMoves: 0,
      }}
      moves={{}}
      playerID="0"
      isActive={true}
      isConnected={true}
    />,
  ).find(BoardInternal);

  const result = (board.instance() as any)._fixHistory([
    { san: 'O-O-O', color: 'w' },
    { san: 'O-O-O', color: 'b' },
    { san: 'O-O', color: 'w' },
    { san: 'O-O', color: 'b' },
  ]);
  expect(result).toEqual([
    { san: 'O-O-O', color: 'w' },
    { from: 'a1', to: 'd1' },
    { san: 'O-O-O', color: 'b' },
    { from: 'a8', to: 'd8' },
    { san: 'O-O', color: 'w' },
    { from: 'h1', to: 'f1' },
    { san: 'O-O', color: 'b' },
    { from: 'h8', to: 'f8' },
  ]);
});

describe('drag and drop', () => {
  let moveMock: jest.Mock;
  let board: Enzyme.ReactWrapper;
  beforeEach(() => {
    const TestBoard = getTestBoard(GameMode.LocalFriend);
    moveMock = jest.fn();
    board = mount(
      <TestBoard
        G={{ pgn: '' }}
        ctx={{
          numPlayer: 2,
          turn: 0,
          currentPlayer: '0',
          currentPlayerMoves: 0,
        }}
        moves={{ move: moveMock }}
        playerID="0"
        isActive={true}
        isConnected={true}
      />,
    ).find(BoardInternal);
  });

  it('should drag', () => {
    (board.instance() as any)._shouldDrag({ x: 0, y: 6 });
    expect(board.state('dragged')).toEqual('a2');
  });

  it("should not drag opponent's pieces", () => {
    (board.instance() as any)._shouldDrag({ x: 0, y: 1 });
    expect(board.state('dragged')).toEqual('');
  });

  it('should drag and drop', () => {
    (board.instance() as any)._onDrag({ x: 6, y: 4, originalX: 6, originalY: 6 });
    (board.instance() as any)._onDrop({ x: 6, y: 4 });
    expect(moveMock.mock.calls[0]).toEqual(['g4']);
  });

  it('should not drag and drop unless a square is selected', () => {
    (board.instance() as any)._onDrop({ x: 6, y: 4 });
    expect(moveMock.mock.calls.length).toEqual(0);
  });

  it('should not drag and drop when not fully moved into position', () => {
    (board.instance() as any)._onDrag({ x: 6, y: 5.9, originalX: 6, originalY: 6 });
    expect(board.state('selected')).toEqual('');
    expect(moveMock.mock.calls.length).toEqual(0);
  });
});

describe('sound toggle', () => {
  let moveMock: jest.Mock;
  let board: Enzyme.ReactWrapper;

  beforeEach(() => {
    moveMock = jest.fn();
    const TestBoard = getTestBoard(GameMode.LocalFriend);
    board = mount(
      <TestBoard
        G={{ pgn: '' }}
        ctx={{
          numPlayer: 2,
          turn: 0,
          currentPlayer: '0',
          currentPlayerMoves: 0,
        }}
        moves={{ move: moveMock }}
        playerID="0"
        isActive={true}
        isConnected={true}
      />,
    ).find(BoardInternal);
  });

  it('should start with sound enabled', () => {
    expect(board.state('soundEnabled')).toBeTrue();
  });

  it('should toggle sound preference', () => {
    (board.instance() as any)._toggleSoundPref();
    expect(board.state('soundEnabled')).toBeFalse();
  });
});
