import { Game, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
interface ICheckerPiece {
  id: number;
  playerID: string;
  isKing: boolean;
}

interface ICoord {
  x: number;
  y: number;
}

interface IMove {
  from: ICoord;
  to: ICoord;
  jumped: boolean;
}

type Piece = ICheckerPiece | null;
export interface IG {
  board: Piece[];
}

const piece = (id: number, player: number): ICheckerPiece => ({ id, playerID: player.toString(), isKing: false });

const INITIAL_BOARD: Piece[] = [
  null,
  piece(0, 1),
  null,
  piece(1, 1),
  null,
  piece(2, 1),
  null,
  piece(3, 1),
  piece(4, 1),
  null,
  piece(5, 1),
  null,
  piece(6, 1),
  null,
  piece(7, 1),
  null,
  null,
  piece(8, 1),
  null,
  piece(9, 1),
  null,
  piece(10, 1),
  null,
  piece(11, 1),
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  piece(12, 0),
  null,
  piece(13, 0),
  null,
  piece(14, 0),
  null,
  piece(15, 0),
  null,
  null,
  piece(16, 0),
  null,
  piece(17, 0),
  null,
  piece(18, 0),
  null,
  piece(19, 0),
  piece(20, 0),
  null,
  piece(21, 0),
  null,
  piece(22, 0),
  null,
  piece(23, 0),
  null,
];

export function sumCoords(a: ICoord, b: ICoord) {
  return { x: a.x + b.x, y: a.y + b.y };
}

export function multiplyCoord(coord: ICoord, multiplier: number) {
  return { x: coord.x * multiplier, y: coord.y * multiplier };
}

export function inBounds(coord: ICoord) {
  return coord.x >= 0 && coord.x < 8 && coord.y >= 0 && coord.y < 8;
}

export function toCoord(position: number): ICoord {
  const x = position % 8;
  const y = Math.floor(position / 8);
  return { x, y };
}

export function toIndex(coord: ICoord) {
  return coord.x + coord.y * 8;
}

export function normalizeCoord(coord: ICoord) {
  const length = Math.floor(coord.x ** 2 + coord.y ** 2);
  return {
    x: coord.x / length,
    y: coord.y / length,
    length,
  };
}

export function areCoordsEqual(a: ICoord, b: ICoord) {
  return a.x === b.x && a.y === b.y;
}

export function getValidMoves(G: IG, ctx: IGameCtx) {
  let dirs = [{ x: -1, y: 1 }, { x: 1, y: 1 }];
  if (ctx.playerID === '0') {
    dirs = [{ x: -1, y: -1 }, { x: 1, y: -1 }];
  }

  let moves: IMove[] = [];
  let jumped = false;

  G.board.forEach((piece, index) => {
    if (piece !== null && piece.playerID === ctx.playerID) {
      const coord = toCoord(index);
      dirs.forEach(dir => {
        // Look into all valid directions
        let opponentBefore = false;
        for (let i = 1; piece.isKing ? true : i < 3; i++) {
          const final = sumCoords(coord, multiplyCoord(dir, i));

          // Break if move is out of bounds
          if (!inBounds(final)) {
            break;
          }

          const moveTo = G.board[toIndex(final)];

          // Break if we encounter our piece
          if (moveTo !== null && moveTo.playerID === ctx.playerID) {
            break;
          }

          if (moveTo !== null && moveTo.playerID !== ctx.playerID) {
            // If we already encountered opponent the directions is blocked
            if (opponentBefore) {
              break;
            }
            opponentBefore = true;
          }

          if (moveTo === null) {
            moves.push({ from: coord, to: final, jumped: opponentBefore });
            if (opponentBefore) {
              jumped = true;
              break;
            }

            // If there is nothing and the piece isn't king there is no need to continue
            if (!piece.isKing) {
              break;
            }
          }
        }
      });
    }
  });

  if (jumped) {
    return moves.filter(move => move.jumped);
  } else {
    return moves;
  }
}

export function move(G: IG, ctx: IGameCtx, from: ICoord, to: ICoord) {
  const indexFrom = toIndex(from);
  const indexTo = toIndex(to);
  const piece = G.board[indexFrom];

  if (
    piece === null ||
    piece.playerID !== ctx.playerID ||
    G.board[indexTo] !== null ||
    !getValidMoves(G, ctx).some(move => areCoordsEqual(move.from, from) && areCoordsEqual(move.to, to))
  ) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    board: G.board.map((square, i) => {
      switch (i) {
        case indexFrom:
          return null;
        case indexTo:
          return piece;
        default:
          return square;
      }
    }),
  };
}

export const CheckersGame = Game({
  name: 'checkers',

  setup: () => ({ board: INITIAL_BOARD }),

  moves: {
    move,
  },

  flow: {
    movesPerTurn: 1,
  },
});
