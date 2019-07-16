import React from 'react';
import { Board } from './board';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { GameMode } from '../../App/Game/GameModePicker';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-ga');

// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};

const TestBoard = (props: any) => {
  const board = React.createElement(Board, props, props.children);
  return <MemoryRouter>{board}</MemoryRouter>;
};

test('render board - all states - local friend', () => {
  const moveMock = jest.fn();
  const board = Enzyme.mount(
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
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  expect(board.html()).to.contain('draw');
  // squares should not be selectable after the game ends:
  // attempt to select a2
  board
    .find('rect')
    .at(rowColAt(2, 1))
    .simulate('click');
  expect(
    board
      .find('rect')
      .at(rowColAt(2, 1))
      .html(),
  ).to.not.contain('green');
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
  expect(board.html()).to.contain('black won');
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
  expect(board.html()).to.contain('white won');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2,
      turn: 0,
      currentPlayer: '0',
      currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain("White's turn");
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
  expect(board.html()).to.contain("Black's turn");
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
  expect(board.html()).to.contain('CHECK');
});

test('render board - all states - online friend', () => {
  const moveMock = jest.fn();
  const board = Enzyme.mount(
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
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(board.html()).to.contain('draw');
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
  expect(board.html()).to.contain('you lost');
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
  expect(board.html()).to.contain('you won');
  board.setProps({
    ...board.props(),
    playerID: '1',
  });
  expect(board.html()).to.contain('you lost');
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
  expect(board.html()).to.contain('CHECK');
});

function rowColAt(row: number, col: number) {
  return 8 * (col - 1) + (8 - row);
}

test('little game', () => {
  const moveMock = jest.fn();
  const board = Enzyme.mount(
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
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.OnlineFriend,
      }}
    />,
  );
  expect(board.html()).to.contain('YOUR TURN');
  // select a2
  board
    .find('rect')
    .at(rowColAt(2, 1))
    .simulate('click');
  expect(
    board
      .find('rect')
      .at(rowColAt(2, 1))
      .html(),
  ).to.contain('green');

  // unselect
  board
    .find('rect')
    .at(rowColAt(2, 1))
    .simulate('click');
  expect(
    board
      .find('rect')
      .at(rowColAt(2, 1))
      .html(),
  ).to.not.contain('green');

  // select f2
  board
    .find('rect')
    .at(rowColAt(2, 6))
    .simulate('click');
  expect(
    board
      .find('rect')
      .at(rowColAt(2, 6))
      .html(),
  ).to.contain('green');

  // move to f4
  board
    .find('rect')
    .at(rowColAt(4, 6))
    .simulate('click');
  expect(moveMock.mock.calls[0]).to.deep.equal(['f4']);

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
  expect(board.html()).to.contain('Waiting for opponent');

  // try invalid selection
  board
    .find('rect')
    .at(rowColAt(2, 1))
    .simulate('click');
  expect(
    board
      .find('rect')
      .at(rowColAt(2, 1))
      .html(),
  ).to.not.contain('green');

  // test inactive
  board.setProps({
    ...board.props(),
    isActive: false,
  });

  // cant select a7
  board
    .find('rect')
    .at(rowColAt(7, 1))
    .simulate('click');
  expect(
    board
      .find('rect')
      .at(rowColAt(7, 1))
      .html(),
  ).to.not.contain('green');

  // make it active again
  board.setProps({
    ...board.props(),
    isActive: true,
  });

  // select a7
  board
    .find('rect')
    .at(rowColAt(7, 1))
    .simulate('click');
  expect(
    board
      .find('rect')
      .at(rowColAt(7, 1))
      .html(),
  ).to.contain('green');

  // move to a5
  board
    .find('rect')
    .at(rowColAt(5, 1))
    .simulate('click');
  expect(moveMock.mock.calls[1]).to.deep.equal(['a5']);
});

test('little AI game', () => {
  const moveMock = jest.fn();
  const stepMock = jest.fn();
  const board = Enzyme.mount(
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
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.AI,
      }}
      step={stepMock}
    />,
  );
  // select f2
  board
    .find('rect')
    .at(rowColAt(2, 6))
    .simulate('click');

  // move to f4
  board
    .find('rect')
    .at(rowColAt(4, 6))
    .simulate('click');
  expect(moveMock.mock.calls[0]).to.deep.equal(['f4']);
  expect(stepMock.mock.calls.length).to.equal(1);
});

test('AI gameover - all cases', () => {
  const moveMock = jest.fn();
  const stepMock = jest.fn();
  const board = Enzyme.mount(
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
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.AI,
      }}
      step={stepMock}
    />,
  );
  expect(board.html()).to.contain('draw');
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
  expect(board.html()).to.contain('you lost');
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
  expect(board.html()).to.contain('you won');
});

test('castling fix', () => {
  const board = Enzyme.mount(
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
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  const result = (board.find('Board').instance() as any)._fixHistory([
    { san: 'O-O-O', color: 'w' },
    { san: 'O-O-O', color: 'b' },
    { san: 'O-O', color: 'w' },
    { san: 'O-O', color: 'b' },
  ]);
  expect(result).to.deep.equal([
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
  let testBoard: Enzyme.ReactWrapper;
  let board: Enzyme.ReactWrapper;
  beforeEach(() => {
    moveMock = jest.fn();
    testBoard = Enzyme.mount(
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
        gameArgs={{
          gameCode: 'chess',
          mode: GameMode.LocalFriend,
        }}
      />,
    );
    board = testBoard.find(Board);
  });

  it('should drag', () => {
    (board.instance() as any)._shouldDrag({ x: 0, y: 6 });
    expect(board.state('dragged')).to.equal('a2');
  });

  it("should not drag opponent's pieces", () => {
    (board.instance() as any)._shouldDrag({ x: 0, y: 1 });
    expect(board.state('dragged')).to.equal('');
  });

  it('should drag and drop', () => {
    (board.instance() as any)._onDrag({ x: 6, y: 4, originalX: 6, originalY: 6 });
    (board.instance() as any)._onDrop({ x: 6, y: 4 });
    expect(moveMock.mock.calls[0]).to.deep.equal(['g4']);
  });

  it('should not drag and drop unless a square is selected', () => {
    (board.instance() as any)._onDrop({ x: 6, y: 4 });
    expect(moveMock.mock.calls.length).to.equal(0);
  });

  it('should not drag and drop when not fully moved into position', () => {
    (board.instance() as any)._onDrag({ x: 6, y: 5.9, originalX: 6, originalY: 6 });
    expect(board.state('selected')).to.equal('');
    expect(moveMock.mock.calls.length).to.equal(0);
  });
});

describe('sound toggle', () => {
  let moveMock: jest.Mock;
  let testBoard: Enzyme.ReactWrapper;
  let board: Enzyme.ReactWrapper;

  beforeEach(() => {
    moveMock = jest.fn();
    testBoard = Enzyme.mount(
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
        gameArgs={{
          gameCode: 'chess',
          mode: GameMode.LocalFriend,
        }}
      />,
    );
    board = testBoard.find(Board);
  });

  it('should start with sound enabled', () => {
    expect(board.state('soundEnabled')).to.be.true;
  });

  it('should toggle sound preference', () => {
    (board.instance() as any)._toggleSoundPref();
    expect(board.state('soundEnabled')).to.be.false;
  });
});
