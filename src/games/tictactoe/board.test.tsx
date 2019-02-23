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
      G={{ cells: [null, null, null, null, null, null, null, null, null]}}
      ctx={{
        numPlayer: 2, gameover: false,
        currentPlayer: '0', currentPlayerMoves: 0,
      }}
      moves={{ move: moveMock }}
      playerID="0"
      isActive={true}
      isConnected={true}
    />
  ));
  // this is an offline game
  expect(board.html()).not.to.contain('Player: X');
  expect(board.html()).to.contain('X\'s turn');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, gameover: false,
      currentPlayer: '1', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('O\'s turn');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, gameover: {winner: '0'},
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('Game Over, X won');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, gameover: {winner: '1'},
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('Game Over, O won');
  board.setProps({
    ...board.props(),
    ctx: {
      numPlayer: 2, turn: 0,
      currentPlayer: '0', currentPlayerMoves: 0,
    },
    G: { cells: ['0', '1', '0', '1', '1', '0', '1', '0', null]},
  });
  // 9: 0
  (board.instance() as Board).onClick(9);
  // board.props.instance().moves.clickCell(8);
  expect(board.html()).to.contain('draw');

// test('render board - all states - online friend', () => {
  // const moveMock = jest.fn();
  // const board = Enzyme.mount((
    // <TestBoard
      // G={{ pgn: '' }}
      // ctx={{
        // numPlayer: 2, turn: 0, gameover: 'd',
        // currentPlayer: '0', currentPlayerMoves: 0,
      // }}
      // moves={{ move: moveMock }}
      // playerID="0"
      // isActive={true}
      // isConnected={true}
      // gameArgs={{
        // gameCode: 'chess',
        // mode: GameMode.OnlineFriend,
      // }}
    // />
  // ));
  // expect(board.html()).to.contain('draw');
  // board.setProps({
    // ...board.props(),
    // ctx: {
      // numPlayer: 2, turn: 0, gameover: 'b',
      // currentPlayer: '0', currentPlayerMoves: 0,
    // },
  // });
  // expect(board.html()).to.contain('you lost');
  // board.setProps({
    // ...board.props(),
    // ctx: {
      // numPlayer: 2, turn: 0, gameover: 'w',
      // currentPlayer: '0', currentPlayerMoves: 0,
    // },
  // });
  // expect(board.html()).to.contain('you won');
  // board.setProps({
    // ...board.props(),
    // playerID: '1',
  // });
  // expect(board.html()).to.contain('you lost');
  // board.setProps({
    // ...board.props(),
    // ctx: {
      // numPlayer: 2, turn: 0,
      // currentPlayer: '0', currentPlayerMoves: 0,
    // },
    // G: { pgn: '1.f4 e5 2.g4 Qh4#' },
  // });
  // expect(board.html()).to.contain('CHECK');
// });

// function rowColAt(row: number, col: number) {
  // return 8 * (col - 1) + (8 - row);
// }

// test('little game', () => {
  // const moveMock = jest.fn();
  // const board = Enzyme.mount((
    // <TestBoard
      // G={{ pgn: '' }}
      // ctx={{
        // numPlayer: 2, turn: 0,
        // currentPlayer: '0', currentPlayerMoves: 0,
      // }}
      // moves={{ move: moveMock }}
      // playerID="0"
      // isActive={true}
      // isConnected={true}
      // gameArgs={{
        // gameCode: 'chess',
        // mode: GameMode.OnlineFriend,
      // }}
    // />
  // ));
  // expect(board.html()).to.contain('YOUR TURN');
  // // select a2
  // board.find('rect').at(rowColAt(2, 1)).simulate('click');
  // expect(board.find('rect').at(rowColAt(2, 1)).html()).to.contain('green');

  // // unselect
  // board.find('rect').at(rowColAt(2, 1)).simulate('click');
  // expect(board.find('rect').at(rowColAt(2, 1)).html()).to.not.contain('green');

  // // select f2
  // board.find('rect').at(rowColAt(2, 6)).simulate('click');
  // expect(board.find('rect').at(rowColAt(2, 6)).html()).to.contain('green');

  // // move to f4
  // board.find('rect').at(rowColAt(4, 6)).simulate('click');
  // expect(moveMock.mock.calls[0]).to.deep.equal(['f4']);

  // // mock move
  // board.setProps({
    // ...board.props(),
    // ctx: {
      // numPlayer: 2, turn: 1,
      // currentPlayer: '1', currentPlayerMoves: 0,
    // },
    // G: { pgn: '1.f4' },
  // });
  // expect(board.html()).to.contain('Waiting for opponent');

  // // try invalid selection
  // board.find('rect').at(rowColAt(2, 1)).simulate('click');
  // expect(board.find('rect').at(rowColAt(2, 1)).html()).to.not.contain('green');

  // // test inactive
  // board.setProps({
    // ...board.props(),
    // isActive: false,
  // });

  // // cant select a7
  // board.find('rect').at(rowColAt(7, 1)).simulate('click');
  // expect(board.find('rect').at(rowColAt(7, 1)).html()).to.not.contain('green');

  // // make it active again
  // board.setProps({
    // ...board.props(),
    // isActive: true,
  // });

  // // select a7
  // board.find('rect').at(rowColAt(7, 1)).simulate('click');
  // expect(board.find('rect').at(rowColAt(7, 1)).html()).to.contain('green');

  // // move to a5
  // board.find('rect').at(rowColAt(5, 1)).simulate('click');
  // expect(moveMock.mock.calls[1]).to.deep.equal(['a5']);
});
