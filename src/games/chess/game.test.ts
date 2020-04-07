import { getWinner } from './game';
import { ChessGame } from './game';
import { Client } from 'boardgame.io/client';

test("fool's move", () => {
  const client = Client({
    game: ChessGame,
  });
  client.moves.move('f3');
  expect(client.store.getState().G.pgn).toEqual('1. f3');
  client.updatePlayerID('1');
  client.moves.move('e5');
  client.updatePlayerID('0');
  client.moves.move('g4');
  client.updatePlayerID('1');
  client.moves.move('Qh4#');
  expect(client.store.getState().ctx.gameover).toEqual('b');
});

test('get winner', () => {
  expect(getWinner({ game_over: () => false })).toEqual(undefined);
  expect(
    getWinner({
      game_over: () => true,
      in_draw: () => true,
    }),
  ).toEqual('d');
  expect(
    getWinner({
      game_over: () => true,
      in_draw: () => false,
      in_threefold_repetition: () => false,
      insufficient_material: () => false,
      in_stalemate: () => false,
      in_checkmate: () => true,
      turn: () => 'w',
    }),
  ).toEqual('b');
  expect(
    getWinner({
      game_over: () => true,
      in_draw: () => false,
      in_threefold_repetition: () => false,
      insufficient_material: () => false,
      in_stalemate: () => false,
      in_checkmate: () => true,
      turn: () => 'b',
    }),
  ).toEqual('w');
});
