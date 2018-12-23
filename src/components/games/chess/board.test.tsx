import * as React from 'react';
import getBoard from './board';
import { expect } from 'chai';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import RaisedButton from 'material-ui/RaisedButton';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-ga');

test('render board - all states', () => {
  const moveMock = jest.fn();
  const Board = getBoard('codeFoo');
  const board = Enzyme.mount((
    <Board
      G={{pgn: ''}}
      ctx={{numPlayer: 2, turn: 0,  gameover: 'd',
          currentPlayer: '0', currentPlayerMoves: 0}}
      moves={{move:  moveMock}}
      playerID="0"
      isActive={true}
      isConnected={true}
    />
  ));
  expect(board.html()).to.contain('Draw');
  board.setProps({
    ...board.props(),
    ctx: {numPlayer: 2, turn: 0,  gameover: 'b',
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('YOU LOST');
  board.setProps({
    ...board.props(),
    ctx: {numPlayer: 2, turn: 0,  gameover: 'w',
      currentPlayer: '0', currentPlayerMoves: 0,
    },
  });
  expect(board.html()).to.contain('YOU WON');
  board.setProps({
    ...board.props(),
    ctx: {numPlayer: 2, turn: 0,
      currentPlayer: '0', currentPlayerMoves: 0,
    },
    G: {pgn: '1.f4 e5 2.g4 Qh4#'},
  });
  expect(board.html()).to.contain('CHECK');
});

function rowColAt(row: number, col: number) {
  return 8 * (col - 1) + (8 - row);
}

test('little game', () => {
  const moveMock = jest.fn();
  const Board = getBoard('codeFoo');
  const board = Enzyme.mount((
    <Board
      G={{pgn: ''}}
      ctx={{numPlayer: 2, turn: 0,
          currentPlayer: '0', currentPlayerMoves: 0}}
      moves={{move:  moveMock}}
      playerID="0"
      isActive={true}
      isConnected={true}
    />
  ));
  expect(board.html()).to.contain('YOUR TURN');
  // select a2
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect((board.state() as any).selected).to.equal('a2');

  // unselect
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect((board.state() as any).selected).to.equal('');

  // select f2
  board.find('rect').at(rowColAt(2, 6)).simulate('click');
  expect((board.state() as any).selected).to.equal('f2');

  // move to f4
  board.find('rect').at(rowColAt(4, 6)).simulate('click');
  expect(moveMock.mock.calls[0]).to.deep.equal([ 'f4' ]);

  // mock move
  board.setProps({
    ...board.props(),
    ctx: {numPlayer: 2, turn: 1,
      currentPlayer: '1', currentPlayerMoves: 0,
    },
    G: {pgn: '1.f4'},
  });
  expect(board.html()).to.contain('Waiting opponent');

  // try invalid selection
  board.find('rect').at(rowColAt(2, 1)).simulate('click');
  expect((board.state() as any).selected).to.equal('');

  // test inactive
  board.setProps({
    ...board.props(),
    isActive: false,
  });

  // cant select a7
  board.find('rect').at(rowColAt(7, 1)).simulate('click');
  expect((board.state() as any).selected).to.equal('');

  // make it active again
  board.setProps({
    ...board.props(),
    isActive: true,
  });

  // select a7
  board.find('rect').at(rowColAt(7, 1)).simulate('click');
  expect((board.state() as any).selected).to.equal('a7');

  // move to a5
  board.find('rect').at(rowColAt(5, 1)).simulate('click');
  expect(moveMock.mock.calls[1]).to.deep.equal([ 'a5' ]);
});
