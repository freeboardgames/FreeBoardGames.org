import { INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { NineMensMorrisGame, IG, removePiece, placePiece, movePiece } from './game';
import { Client } from '@freeboardgame.org/boardgame.io/client';

test('invalid moves', () => {
  let G: any = {
    haveToRemovePiece: false,
    points: [{ piece: null}]
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
    multiplayer: { local: true },
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.connect();
  p1.connect();

  p0.moves.placePiece(0);
  p1.moves.placePiece(9);
  p0.moves.placePiece(7);
  p1.moves.placePiece(6);
  p0.moves.placePiece(8);
  p1.moves.placePiece(18);
  p0.moves.placePiece(23);
  p1.moves.placePiece(15);
  p0.moves.placePiece(14);
  p1.moves.placePiece(22);
  p0.moves.placePiece(13);
  p1.moves.placePiece(21);
  p0.moves.placePiece(20);
  p1.moves.placePiece(2);
  p0.moves.placePiece(3);
  p1.moves.placePiece(4);
  p0.moves.placePiece(1);
  p1.moves.placePiece(5);
  p1.moves.removePiece(13);
  p0.moves.movePiece(14, 13);
  p1.moves.movePiece(9, 17);
  p0.moves.movePiece(20, 19);
  p1.moves.movePiece(21, 20);
  p0.moves.movePiece(13, 12);
  p1.moves.movePiece(5, 13);
  p0.moves.movePiece(12, 11);
  p0.moves.removePiece(20);
  p1.moves.movePiece(13, 5);
  p1.moves.removePiece(23);
  p0.moves.movePiece(11, 12);
  p1.moves.movePiece(15, 23);
  p0.moves.movePiece(12, 11);
  p0.moves.removePiece(23);
  p1.moves.movePiece(22, 23);
  p0.moves.movePiece(8, 15);
  p1.moves.movePiece(23, 16);
  p1.moves.removePiece(15);
  p0.moves.movePiece(7, 15);
  p1.moves.movePiece(16, 23);
  p0.moves.movePiece(1, 9);
  p1.moves.movePiece(23, 16);
  p1.moves.removePiece(15);
  p0.moves.movePiece(11, 10);
  p1.moves.movePiece(2, 1);
  p0.moves.movePiece(10, 11);
  p0.moves.removePiece(1);
  p1.moves.movePiece(16, 23);
  p0.moves.movePiece(9, 8);
  p1.moves.movePiece(23, 16);
  p1.moves.removePiece(8);
  p0.moves.movePiece(11, 12);
  p1.moves.movePiece(16, 23);
  p0.moves.movePiece(12, 11);
  p0.moves.removePiece(23);
  p1.moves.movePiece(5, 13);
  p0.moves.movePiece(0, 7);
  p1.moves.movePiece(13, 5);
  p1.moves.removePiece(7);
  p0.moves.movePiece(11, 12);
  p1.moves.movePiece(17, 16);
  p0.moves.movePiece(12, 11);
  p0.moves.removePiece(18);
  p1.moves.movePiece(5, 13);
  p0.moves.movePiece(3, 5);
  p1.moves.movePiece(16, 23);
  p0.moves.movePiece(5, 3);
  p0.moves.removePiece(13);
  p1.moves.movePiece(23, 13);
  p0.moves.movePiece(11, 9);
  p1.moves.movePiece(13, 5);
  p1.moves.removePiece(19);

  // player '1' should be declared the winner
  const { ctx } = p0.getState();
  expect(ctx.gameover).toEqual({ winner: '1' });
});
