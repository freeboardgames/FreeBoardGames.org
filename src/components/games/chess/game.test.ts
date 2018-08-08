import { getWinner } from './game';
import ChessGame from './game';
import { expect } from 'chai';

test('little game', () => {
  let initialState = { pgn: '' };
  let action = { type: 'move', args: ['f4'] };
  let ctx = ChessGame.flow.ctx(2);
  expect(ChessGame.processMove(initialState, action, ctx)).to.deep.equal(
      { pgn: '1. f4'}); 
  
  ctx.currentPlayer = '1';
  expect(ChessGame.processMove(initialState, action, ctx)).to.deep.equal(initialState); 

  // test flow
  let checkMateG = { pgn: '1.f3 e5 2.g4 Qh4#' };
  ctx.stats = {turn: {numMoves: {1: 1},}};
  const newState = ChessGame.flow.processGameEvent({
	  ctx, G: checkMateG}, {
		  type: 'GAME_EVENT',
		  payload: {type: 'endTurn'}
    });
  expect(newState.ctx.gameover).to.equal('b');
});

test('get winner', () => {
  expect(getWinner({ game_over: () => false })).to.equal(undefined);
  expect(getWinner({ 
    game_over: () => true, 
    in_draw: () => true 
  })).to.deep.equal('d');
  expect(getWinner({ 
    game_over: () => true,
    in_draw: () => false,
    in_threefold_repetition: () => false,
    insufficient_material: () => false,
    in_stalemate: () => false,
    in_checkmate: () => true,
    turn: () => 'w'
  })).to.deep.equal('b');
  expect(getWinner({ 
    game_over: () => true, 
    in_draw: () => false,
    in_threefold_repetition: () => false,
    insufficient_material: () => false,
    in_stalemate: () => false,
    in_checkmate: () => true,
    turn: () => 'b'
  })).to.deep.equal('w');
});
