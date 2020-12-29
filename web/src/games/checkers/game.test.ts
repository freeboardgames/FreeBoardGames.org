import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { Coord, CheckersGame, IG, move, INITIAL_BOARD } from './game';
import { Local } from 'boardgame.io/multiplayer';

test('invalid moves', () => {
  let G: IG = {
    board: INITIAL_BOARD,
    jumping: null,
  };

  const ctx: any = { playerID: '1' };
  expect(move(G, ctx, { x: 4, y: 4 }, { x: 4, y: 5 })).toEqual(INVALID_MOVE);
  expect(move(G, ctx, { x: 1, y: 0 }, { x: 4, y: 4 })).toEqual(INVALID_MOVE);
});

it('should declare player 1 as the winner', () => {
  const spec = {
    game: CheckersGame,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.start();
  p1.start();

  p0.moves.move({ x: 4, y: 5 }, { x: 5, y: 4 });
  p1.moves.move({ x: 5, y: 2 }, { x: 4, y: 3 });
  p0.moves.move({ x: 3, y: 6 }, { x: 4, y: 5 });
  p1.moves.move({ x: 4, y: 1 }, { x: 5, y: 2 });
  p0.moves.move({ x: 4, y: 5 }, { x: 3, y: 4 });
  p1.moves.move({ x: 3, y: 2 }, { x: 2, y: 3 });
  p0.moves.move({ x: 5, y: 4 }, { x: 3, y: 2 });
  p1.moves.move({ x: 2, y: 1 }, { x: 4, y: 3 });
  p0.moves.move({ x: 5, y: 6 }, { x: 4, y: 5 });
  p1.moves.move({ x: 3, y: 0 }, { x: 2, y: 1 });
  p0.moves.move({ x: 6, y: 5 }, { x: 7, y: 4 });
  p1.moves.move({ x: 7, y: 2 }, { x: 6, y: 3 });
  p0.moves.move({ x: 4, y: 7 }, { x: 5, y: 6 });
  p1.moves.move({ x: 5, y: 0 }, { x: 4, y: 1 });
  p0.moves.move({ x: 2, y: 7 }, { x: 3, y: 6 });
  p1.moves.move({ x: 4, y: 1 }, { x: 3, y: 2 });
  p0.moves.move({ x: 5, y: 6 }, { x: 6, y: 5 });
  p1.moves.move({ x: 6, y: 1 }, { x: 7, y: 2 });
  p0.moves.move({ x: 6, y: 7 }, { x: 5, y: 6 });
  p1.moves.move({ x: 7, y: 0 }, { x: 6, y: 1 });
  p0.moves.move({ x: 4, y: 5 }, { x: 5, y: 4 });
  p1.moves.move({ x: 6, y: 3 }, { x: 4, y: 5 });
  p1.moves.move({ x: 4, y: 5 }, { x: 6, y: 7 });
  p0.moves.move({ x: 3, y: 6 }, { x: 4, y: 5 });
  p1.moves.move({ x: 7, y: 2 }, { x: 6, y: 3 });
  p0.moves.move({ x: 4, y: 5 }, { x: 5, y: 4 });
  p1.moves.move({ x: 6, y: 3 }, { x: 4, y: 5 });
  p0.moves.move({ x: 2, y: 5 }, { x: 1, y: 4 });
  p1.moves.move({ x: 4, y: 3 }, { x: 2, y: 5 });
  p0.moves.move({ x: 1, y: 6 }, { x: 3, y: 4 });
  p1.moves.move({ x: 4, y: 5 }, { x: 3, y: 6 });
  p0.moves.move({ x: 1, y: 4 }, { x: 0, y: 3 });
  p1.moves.move({ x: 2, y: 3 }, { x: 4, y: 5 });
  p0.moves.move({ x: 6, y: 5 }, { x: 5, y: 4 });
  p1.moves.move({ x: 3, y: 6 }, { x: 2, y: 7 });
  p0.moves.move({ x: 5, y: 4 }, { x: 6, y: 3 });
  p1.moves.move({ x: 5, y: 2 }, { x: 4, y: 3 });
  p0.moves.move({ x: 6, y: 3 }, { x: 7, y: 2 });
  p1.moves.move({ x: 4, y: 5 }, { x: 5, y: 6 });
  p0.moves.move({ x: 7, y: 2 }, { x: 5, y: 0 });
  p0.moves.move({ x: 5, y: 0 }, { x: 2, y: 3 });
  p1.moves.move({ x: 1, y: 2 }, { x: 3, y: 4 });
  p0.moves.move({ x: 0, y: 3 }, { x: 1, y: 2 });
  p1.moves.move({ x: 2, y: 1 }, { x: 0, y: 3 });
  p0.moves.move({ x: 0, y: 5 }, { x: 1, y: 4 });
  p1.moves.move({ x: 0, y: 3 }, { x: 2, y: 5 });
  p0.moves.move({ x: 0, y: 7 }, { x: 1, y: 6 });
  p1.moves.move({ x: 2, y: 5 }, { x: 0, y: 7 });
  p0.moves.move({ x: 7, y: 4 }, { x: 6, y: 3 });
  p1.moves.move({ x: 2, y: 7 }, { x: 7, y: 2 });
  p0.moves.move({ x: 7, y: 6 }, { x: 6, y: 5 });
  p1.moves.move({ x: 1, y: 0 }, { x: 2, y: 1 });
  p0.moves.move({ x: 6, y: 5 }, { x: 5, y: 4 });
  p1.moves.move({ x: 7, y: 2 }, { x: 4, y: 5 });

  // player '1' should be declared the winner
  const { ctx } = p0.getState();
  expect(ctx.gameover).toEqual({ winner: '1' });
});

describe('Coord', () => {
  it('sums with another coord.', () => {
    const initial = new Coord(5, 10);

    const result = initial.sum(new Coord(-1, 6));

    expect(result.x).toEqual(4);
    expect(result.y).toEqual(16);
  });

  it('multiplies by a scalar.', () => {
    const initial = new Coord(5, 10);

    const result = initial.multiply(3);

    expect(result.x).toEqual(15);
    expect(result.y).toEqual(30);
  });

  it('compares to another coord.', () => {
    const coord = new Coord(5, 10);

    expect(coord.equals({ x: 5, y: 10 })).toBeTrue();
    expect(coord.equals({ x: 8, y: 10 })).toBeFalse();
    expect(coord.equals({ x: 5, y: 11 })).toBeFalse();
  });

  it('converts to an index.', () => {
    const coord = new Coord(2, 1);

    expect(coord.toIndex()).toEqual(10);
  });

  it('checks boundaries.', () => {
    expect(new Coord(-1, 2).inBounds()).toBeFalse();
    expect(new Coord(1, -2).inBounds()).toBeFalse();
    expect(new Coord(8, 2).inBounds()).toBeFalse();
    expect(new Coord(1, 8).inBounds()).toBeFalse();

    expect(new Coord(3, 4).inBounds()).toBeTrue();
  });

  it('constructs from an index.', () => {
    const result = Coord.fromPosition(10);

    expect(result.equals({ x: 2, y: 1 })).toBeTrue();
  });
});
