import { INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { CornerusGame, placePiece, getPlayer, isFirstTurn, getScoreBoard } from './game';

test('invalid moves', () => {
  const G: any = { players: [{ pieces: [0, 1, 2] }] };
  const ctx: any = { playerID: '0', numPlayers: 2, stats: { phase: { numMoves: { '0': 0 } } } };
  expect(placePiece(G, ctx, 0, { x: 30, y: 30, rotation: 0, flipX: false, flipY: false })).toEqual(INVALID_MOVE);
});

test('playerID mapping', () => {
  const ctx: any = { stats: { phase: { numMoves: { '0': 0, '1': 0, '2': 0, '3': 0 } } } };
  expect(getPlayer({ ...ctx, numPlayers: 3 } as any, '2')).toEqual('2');
  expect(getPlayer({ ...ctx, numPlayers: 3, turn: 3 } as any, '2')).toEqual('3');
  expect(getPlayer({ ...ctx, numPlayers: 4 } as any, '3')).toEqual('3');
});

test('first turn detection', () => {
  const ctx: any = { playerID: '0', stats: { phase: { numMoves: { '0': 1, '1': 1, '2': 1, '3': 1 } } } };
  expect(isFirstTurn({ ...ctx, numPlayers: 3 } as any)).toEqual(false);
  expect(isFirstTurn({ ...ctx, numPlayers: 4 } as any)).toEqual(false);
});

test('scoreboard', () => {
  const G: any = {
    players: [{ pieces: [10] }, { pieces: [10] }, { pieces: [10] }, { pieces: [10] }],
  };
  expect(getScoreBoard(G, { numPlayers: 3 } as any).length).toEqual(3);
  expect(getScoreBoard(G, { numPlayers: 4 } as any).length).toEqual(4);
});

it('should declare player 1 as the winner', () => {
  const spec = {
    game: CornerusGame,
    multiplayer: { local: true },
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.connect();
  p1.connect();

  p0.moves.placePiece(3, { x: 0, y: 0, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(6, { x: 16, y: 17, rotation: 0, flipX: false, flipY: false });
  p0.moves.placePiece(5, { x: 17, y: -1, rotation: 2, flipX: false, flipY: false });
  p1.moves.placePiece(7, { x: 0, y: 18, rotation: 0, flipX: false, flipY: false });
  p0.moves.placePiece(4, { x: 2, y: 1, rotation: 0, flipX: false, flipY: false });
  p1.moves.endGame();
  p0.moves.placePiece(5, { x: 14, y: 0, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(5, { x: 3, y: 16, rotation: 0, flipX: false, flipY: false });
  p0.moves.placePiece(0, { x: 5, y: 1, rotation: 0, flipX: false, flipY: false });
  p0.moves.endGame();
  p1.moves.placePiece(6, { x: 0, y: 15, rotation: 0, flipX: true, flipY: false });
  p0.moves.placePiece(0, { x: 6, y: -1, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(6, { x: 6, y: 17, rotation: 0, flipX: false, flipY: true });
  p0.moves.endGame();
  p1.moves.placePiece(6, { x: 4, y: 13, rotation: 2, flipX: false, flipY: false });
  p1.moves.placePiece(3, { x: 7, y: 14, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(5, { x: 10, y: 17, rotation: 3, flipX: true, flipY: false });
  p1.moves.placePiece(6, { x: 13, y: 16, rotation: 1, flipX: false, flipY: false });
  p1.moves.placePiece(4, { x: 16, y: 15, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(4, { x: 15, y: 13, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(5, { x: 11, y: 13, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(2, { x: 2, y: 13, rotation: 2, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: 3, y: 12, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: 7, y: 11, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: 12, y: 11, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: -1, y: 8, rotation: 1, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: 10, y: 10, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: 4, y: 10, rotation: 1, flipX: false, flipY: true });
  p1.moves.placePiece(0, { x: 7, y: 8, rotation: 1, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: 14, y: 9, rotation: 0, flipX: false, flipY: false });
  p1.moves.placePiece(0, { x: 11, y: 7, rotation: 2, flipX: false, flipY: false });

  // player '1' should be declared the winner
  const { ctx } = p0.getState();
  expect(ctx.gameover).toEqual({
    scoreboard: [
      { playerID: '1', score: -85 },
      { playerID: '0', score: -159 },
    ],
  });
});
