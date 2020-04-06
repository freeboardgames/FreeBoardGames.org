import { INVALID_MOVE } from 'boardgame.io/core';
import { NineMensMorrisGame, removePiece, placePiece, movePiece } from './game';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';

test('invalid moves', () => {
  let G: any = {
    haveToRemovePiece: false,
    points: [{ piece: null }],
  };
  const ctx: any = { playerID: '0' };

  expect(movePiece(G, ctx, 0, 1)).toEqual(INVALID_MOVE);
  expect(removePiece(G, ctx, 0)).toEqual(INVALID_MOVE);
  G.haveToRemovePiece = true;
  expect(placePiece(G, ctx, 0)).toEqual(INVALID_MOVE);
});

it('should declare player 1 as the winner', () => {
  const spec = {
    game: NineMensMorrisGame,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.start();
  p1.start();

  p0.moves.placePiece(0);
  p1.moves.placePiece(8);
  p0.moves.placePiece(7);
  p1.moves.placePiece(15);
  p0.moves.placePiece(12);
  p1.moves.placePiece(14);
  p1.moves.removePiece(12);
  p0.moves.placePiece(6);
  p0.moves.removePiece(14); // Force remove piece from mill
  p1.moves.placePiece(5);
  p0.moves.placePiece(1);
  p1.moves.placePiece(2);
  p0.moves.placePiece(9);
  p1.moves.placePiece(17);
  p0.moves.placePiece(10);
  p1.moves.placePiece(14);
  p1.moves.removePiece(9);
  p0.moves.placePiece(19);
  p1.moves.placePiece(11);
  p0.moves.placePiece(21);
  p1.moves.placePiece(20);
  p0.moves.movePiece(1, 9);
  p1.moves.movePiece(14, 13);
  p0.moves.movePiece(21, 22);
  p1.moves.movePiece(13, 14);
  p1.moves.removePiece(22);
  p0.moves.movePiece(9, 1);
  p1.moves.movePiece(20, 21);
  p0.moves.movePiece(1, 9);
  p1.moves.movePiece(14, 13);
  p1.moves.removePiece(9);
  p0.moves.movePiece(0, 1);
  p1.moves.movePiece(13, 14);
  p1.moves.removePiece(1);
  p0.moves.movePiece(10, 9);
  p1.moves.movePiece(14, 13);
  p1.moves.removePiece(19);
  p0.moves.movePiece(9, 14);
  p1.moves.movePiece(13, 12);
  p0.moves.movePiece(7, 10);
  p1.moves.movePiece(12, 13);
  p1.moves.removePiece(10);

  // player '1' should be declared the winner
  const { ctx } = p0.getState();
  expect(ctx.gameover).toEqual({ winner: '1' });
});
