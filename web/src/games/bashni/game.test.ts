import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { BashniGame, IG, move, INITIAL_BOARD, convertStringToBoard } from './game';
import { Local } from 'boardgame.io/multiplayer';
import { DEFAULT_FULL_CUSTOMIZATION } from './customization';

test('invalid moves', () => {
  let G: IG = {
    board: convertStringToBoard(INITIAL_BOARD[0]),
    jumping: null,
    moveCount: 0,
    config: DEFAULT_FULL_CUSTOMIZATION,
  };

  const ctx: any = { playerID: '1' };
  expect(move(G, ctx, { x: 4, y: 4 }, { x: 4, y: 5 })).toEqual(INVALID_MOVE);
  expect(move(G, ctx, { x: 1, y: 0 }, { x: 4, y: 4 })).toEqual(INVALID_MOVE);
});

it("shouldn't end the game after one move", () => {
  const BashniGameWithSetup = {
    ...BashniGame,
    setup: () => ({
      board: convertStringToBoard('5p26p186p15P2888'),
      jumping: null,
      moveCount: 0,
      config: {
        ...DEFAULT_FULL_CUSTOMIZATION,
      },
    }),
  };

  const spec = {
    game: BashniGameWithSetup,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.start();
  p1.start();

  p0.moves.move({ x: 5, y: 4 }, { x: 7, y: 2 });

  // Even though white has no moves in this position, it's black to move
  // The game should not be over yet
  expect(p1.getState().ctx.gameover).toBeFalsy();
});

it('should declare player 1 as the winner', () => {
  const BashniGameWithSetup = {
    ...BashniGame,
    setup: () => ({
      board: convertStringToBoard(INITIAL_BOARD[0]),
      jumping: null,
      moveCount: 0,
      config: {
        ...DEFAULT_FULL_CUSTOMIZATION,
        flyingKings: true,
        stopJumpOnKing: false,
      },
    }),
  };

  const spec = {
    game: BashniGameWithSetup,
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

it('should declare a draw', () => {
  const BashniGameWithSetup = {
    ...BashniGame,
    setup: () => ({
      board: convertStringToBoard(INITIAL_BOARD[1]),
      jumping: null,
      moveCount: 0,
      config: {
        ...DEFAULT_FULL_CUSTOMIZATION,
        forcedCapture: false,
      },
    }),
  };

  const spec = {
    game: BashniGameWithSetup,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.start();
  p1.start();

  p0.moves.move({ x: 5, y: 6 }, { x: 4, y: 5 });
  p1.moves.move({ x: 2, y: 1 }, { x: 3, y: 2 });
  p0.moves.move({ x: 4, y: 5 }, { x: 3, y: 4 });
  p1.moves.move({ x: 3, y: 2 }, { x: 4, y: 3 });
  p0.moves.move({ x: 3, y: 4 }, { x: 2, y: 3 });
  p1.moves.move({ x: 4, y: 3 }, { x: 5, y: 4 });
  p0.moves.move({ x: 2, y: 3 }, { x: 1, y: 2 });
  p1.moves.move({ x: 5, y: 4 }, { x: 6, y: 5 });
  p0.moves.move({ x: 4, y: 7 }, { x: 5, y: 6 });
  p1.moves.move({ x: 3, y: 0 }, { x: 2, y: 1 });
  p0.moves.move({ x: 1, y: 2 }, { x: 3, y: 0 });
  p1.moves.move({ x: 6, y: 5 }, { x: 4, y: 7 });

  expect(p0.getState().G.moveCount).toEqual(0);

  for (let i = 0; i < 20; i++) {
    p0.moves.move({ x: 3, y: 0 }, { x: 2, y: 1 });
    p1.moves.move({ x: 4, y: 7 }, { x: 5, y: 6 });
    p0.moves.move({ x: 2, y: 1 }, { x: 3, y: 0 });
    p1.moves.move({ x: 5, y: 6 }, { x: 4, y: 7 });
  }

  expect(p0.getState().G.moveCount).toEqual(80);
  expect(p0.getState().ctx.gameover).toEqual({ winner: 'draw' });
});
