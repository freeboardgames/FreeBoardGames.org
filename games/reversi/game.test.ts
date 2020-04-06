import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { ReversiGame, IG, placePiece } from './game';

test('invalid moves', () => {
  let points = new Array(64).fill(null);
  points[0] = '0';
  let G: IG = {
    points,
  };

  const ctx: any = { playerID: '0' };
  expect(placePiece(G, ctx, 0, 0)).toEqual(INVALID_MOVE);
  expect(placePiece(G, ctx, 5, 5)).toEqual(INVALID_MOVE);
});

it('should declare player 0 as the winner', () => {
  const spec = {
    game: ReversiGame,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.start();
  p1.start();

  p0.moves.placePiece(5, 3);
  p1.moves.placePiece(2, 2);
  p0.moves.placePiece(2, 3);
  p1.moves.placePiece(2, 4);
  p0.moves.placePiece(1, 3);
  p1.moves.placePiece(1, 2);
  p0.moves.placePiece(3, 1);
  p1.moves.placePiece(2, 1);
  p0.moves.placePiece(1, 1);
  p1.moves.placePiece(2, 0);
  p0.moves.placePiece(2, 5);
  p1.moves.placePiece(4, 5);
  p0.moves.placePiece(5, 6);
  p1.moves.placePiece(4, 2);
  p0.moves.placePiece(4, 1);
  p1.moves.placePiece(6, 3);
  p0.moves.placePiece(7, 3);
  p1.moves.placePiece(5, 4);
  p0.moves.placePiece(6, 5);
  p1.moves.placePiece(0, 1);
  p0.moves.placePiece(3, 5);
  p1.moves.placePiece(2, 6);
  p0.moves.placePiece(2, 7);
  p1.moves.placePiece(3, 2);
  p0.moves.placePiece(0, 2);
  p1.moves.placePiece(5, 1);
  p0.moves.placePiece(0, 0);
  p1.moves.placePiece(1, 4);
  p0.moves.placePiece(4, 0);
  p1.moves.placePiece(1, 5);
  p0.moves.placePiece(1, 6);
  p1.moves.placePiece(0, 3);
  p0.moves.placePiece(0, 4);
  p1.moves.placePiece(0, 5);
  p0.moves.placePiece(0, 6);
  p1.moves.placePiece(1, 7);
  p0.moves.placePiece(0, 7);
  p1.moves.placePiece(3, 6);
  p0.moves.placePiece(3, 7);
  p1.moves.placePiece(4, 7);
  p0.moves.placePiece(1, 0);
  p1.moves.placePiece(5, 2);
  p0.moves.placePiece(5, 0);
  p1.moves.placePiece(6, 0);
  p0.moves.placePiece(3, 0);
  p1.moves.placePiece(7, 6);
  p0.moves.placePiece(5, 5);
  p1.moves.placePiece(5, 7);
  p0.moves.placePiece(4, 6);
  p1.moves.placePiece(7, 2);
  p0.moves.placePiece(6, 2);
  p1.moves.placePiece(6, 1);
  p0.moves.placePiece(6, 4);
  p1.moves.placePiece(7, 4);
  p0.moves.placePiece(7, 5);
  p1.moves.placePiece(6, 6);
  p0.moves.placePiece(6, 7);
  p1.moves.placePiece(7, 7);
  p0.moves.placePiece(7, 1);
  p1.moves.placePiece(7, 0);

  // player '0' should be declared the winner
  const { ctx } = p0.getState();
  expect(ctx.gameover).toEqual({
    scoreboard: [
      { playerID: '0', score: 38 },
      { playerID: '1', score: 26 },
    ],
  });
});
