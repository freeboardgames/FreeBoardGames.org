import React from 'react';
import { Board } from './board';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { GameMode } from '../../App/Game/GameModePicker';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-ga');
const TestBoard = (props: any) => {
  const board = React.createElement(Board, props, props.children);
  return <MemoryRouter>{board}</MemoryRouter>;
};

test('render board - all states - local friend', () => {
  const moveMock = jest.fn();
  const board = Enzyme.mount((
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2, turn: 0, gameover: 'd',
        currentPlayer: '0', currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
    />
  ));
  expect(board.html()).to.contain('draw');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0, gameover: 'b',
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('black won');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0, gameover: 'w',
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('white won');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0,
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('White\'s turn');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 1,
      currentPlayer: '1', currentPlayerMoves: 0,
    },
    G: { pgn: '1.f4' },
  });
  expect(board.html()).to.contain('Black\'s turn');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0,
      currentPlayer: '0', currentPlayerMoves: 0,
    },
    G: { pgn: '1.f4 e5 2.g4 Qh4#' },
  });
  expect(board.html()).to.contain('CHECK');
});

test('render board - all states - online friend', () => {
  const moveMock = jest.fn();
  const board = Enzyme.mount((
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2, turn: 0, gameover: 'd',
        currentPlayer: '0', currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.OnlineFriend,
      }}
    />
  ));
  expect(board.html()).to.contain('draw');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0, gameover: 'b',
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('you lost');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0, gameover: 'w',
      currentPlayer: '0', currentPlayerMoves: 0,
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
      numPlayer: 2, turn: 0,
      currentPlayer: '0', currentPlayerMoves: 0,
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
  const board = Enzyme.mount((
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2, turn: 0,
        currentPlayer: '0', currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.OnlineFriend,
      }}
    />
  ));
  expect(board.html()).to.contain('YOUR TURN');
  // select a2
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 1)).html()).to.contain('green');

  // unselect
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 1)).html()).to.not.contain('green');

  // select f2
  board.find('rect').at(rowColAt(2, 6)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 6)).html()).to.contain('green');

  // move to f4
  board.find('rect').at(rowColAt(4, 6)).simulate('click');
  expect(moveMock.mock.calls[0]).to.deep.equal(['f4']);

  // mock move
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 1,
      currentPlayer: '1', currentPlayerMoves: 0,
    },
    G: { pgn: '1.f4' },
  });
  expect(board.html()).to.contain('Waiting for opponent');

  // try invalid selection
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(2, 1)).html()).to.not.contain('green');

  // test inactive
  board.setProps({
    ...board.props(),
    isActive: false,
  });

  // cant select a7
  board.find('rect').at(rowColAt(7, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(7, 1)).html()).to.not.contain('green');

  // make it active again
  board.setProps({
    ...board.props(),
    isActive: true,
  });

  // select a7
  board.find('rect').at(rowColAt(7, 1)).simulate('click');
  expect(board.find('rect').at(rowColAt(7, 1)).html()).to.contain('green');

  // move to a5
  board.find('rect').at(rowColAt(5, 1)).simulate('click');
  expect(moveMock.mock.calls[1]).to.deep.equal(['a5']);
});

test('little AI game', () => {
  const moveMock = jest.fn();
  const stepMock = jest.fn();
  const board = Enzyme.mount((
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2, turn: 0,
        currentPlayer: '0', currentPlayerMoves: 0,
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
    />
  ));
  // select f2
  board.find('rect').at(rowColAt(2, 6)).simulate('click');

  // move to f4
  board.find('rect').at(rowColAt(4, 6)).simulate('click');
  expect(moveMock.mock.calls[0]).to.deep.equal(['f4']);
  expect(stepMock.mock.calls.length).to.equal(1);
});

test('AI gameover - all cases', () => {
  const moveMock = jest.fn();
  const stepMock = jest.fn();
  const board = Enzyme.mount((
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2, turn: 0, gameover: 'd',
        currentPlayer: '0', currentPlayerMoves: 0,
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
    />
  ));
  expect(board.html()).to.contain('draw');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0, gameover: 'b',
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('you lost');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0, gameover: 'w',
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('you won');
});

test('castling fix', () => {
  const board = Enzyme.mount((
    <TestBoard
      G={{ pgn: '' }}
      ctx={{
        numPlayer: 2, turn: 0,
        currentPlayer: '0', currentPlayerMoves: 0,
      }}
      moves={{}}
      playerID="0"
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'chess',
        mode: GameMode.LocalFriend,
      }}
    />
  ));
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
