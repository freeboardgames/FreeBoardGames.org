import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx, Game } from 'boardgame.io';

interface ICheckerPiece {
  id: number;
  playerID: string;
  isKing: boolean;
}

interface ICoord {
  readonly x: number;
  readonly y: number;
}

export class Coord implements ICoord {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  sum(other: Coord): Coord {
    return new Coord(this.x + other.x, this.y + other.y);
  }

  multiply(multiplier: number): Coord {
    return new Coord(this.x * multiplier, this.y * multiplier);
  }

  toIndex(): number {
    return this.x + this.y * 8;
  }
  inBounds(): boolean {
    return this.x >= 0 && this.x < 8 && this.y >= 0 && this.y < 8;
  }

  equals(other: ICoord): boolean {
    return this.x === other.x && this.y === other.y;
  }

  static fromPosition(position: number): Coord {
    const x = position % 8;
    const y = Math.floor(position / 8);
    return new Coord(x, y);
  }
}

interface ICheckerPieceWithCoord {
  data: ICheckerPiece;
  coord: Coord;
}

export interface IMove {
  from: Coord;
  to: Coord;
  jumped: Coord;
}

type Piece = ICheckerPiece | null;
export interface IG {
  board: Piece[];
  jumping: ICheckerPieceWithCoord;
}

const piece = (id: number, player: number): ICheckerPiece => ({ id, playerID: player.toString(), isKing: false });

// prettier-ignore
export const INITIAL_BOARD: Piece[] = [
          null,  piece(0, 1),         null,  piece(1, 1),         null,  piece(2, 1),         null,  piece(3, 1),
   piece(4, 1),         null,  piece(5, 1),         null,  piece(6, 1),         null,  piece(7, 1),         null,
          null,  piece(8, 1),         null,  piece(9, 1),         null, piece(10, 1),         null, piece(11, 1),
          null,         null,         null,         null,         null,         null,         null,         null,
          null,         null,         null,         null,         null,         null,         null,         null,
  piece(12, 0),         null, piece(13, 0),         null, piece(14, 0),         null, piece(15, 0),         null,
          null, piece(16, 0),         null, piece(17, 0),         null, piece(18, 0),         null, piece(19, 0),
  piece(20, 0),         null, piece(21, 0),         null, piece(22, 0),         null, piece(23, 0),         null,
];

const MAN_DIRS: Coord[][] = [
  [new Coord(-1, -1), new Coord(1, -1)],
  [new Coord(-1, 1), new Coord(1, 1)],
];

const KING_DIRS: Coord[] = [new Coord(-1, 1), new Coord(1, 1), new Coord(-1, -1), new Coord(1, -1)];

export function checkPosition(
  G: IG,
  playerID: string,
  piece: ICheckerPiece,
  coord: Coord,
): { moves: IMove[]; jumped: boolean } {
  const dirs = piece.isKing ? KING_DIRS : MAN_DIRS[playerID as any];
  let moves: IMove[] = [];
  let jumped = false;

  for (const dir of dirs) {
    // Look into all valid directions
    let opponentBefore = null;
    for (let i = 1; piece.isKing ? true : i < 3; i++) {
      const final = coord.sum(dir.multiply(i));

      // Break if move is out of bounds
      if (!final.inBounds()) {
        break;
      }

      const moveTo = G.board[final.toIndex()];

      // Break if we encounter our piece
      if (moveTo !== null && moveTo.playerID === playerID) {
        break;
      }

      if (moveTo !== null && moveTo.playerID !== playerID) {
        // If we already encountered opponent the directions is blocked
        if (opponentBefore) {
          break;
        }
        opponentBefore = final;
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
  }

  return { moves, jumped };
}

export function getValidMoves(G: IG, playerID: string, jumping?: ICheckerPieceWithCoord) {
  let movesTotal: IMove[] = [];
  let jumpedTotal = false;

  if (typeof jumping === 'undefined') {
    G.board.forEach((piece, index) => {
      if (piece !== null && piece.playerID === playerID) {
        const coord = Coord.fromPosition(index);
        const { moves, jumped } = checkPosition(G, playerID, piece, coord);
        movesTotal.push(...moves);
        jumpedTotal = jumpedTotal || jumped;
      }
    });
  } else {
    const { moves, jumped } = checkPosition(G, playerID, jumping.data, jumping.coord);
    movesTotal = moves;
    jumpedTotal = jumped;
  }

  if (jumpedTotal) {
    return movesTotal.filter((move) => move.jumped);
  } else {
    return movesTotal;
  }
}

export function move(G: IG, ctx: Ctx, from: ICoord, to: ICoord): IG | string {
  const fromCoord = new Coord(from.x, from.y);
  const toCoord = new Coord(to.x, to.y);
  const indexFrom = fromCoord.toIndex();
  const indexTo = toCoord.toIndex();
  const piece = G.board[indexFrom];
  const crownhead = ctx.playerID === '0' ? 0 : 7;

  if (piece === null || piece.playerID !== ctx.playerID || G.board[indexTo] !== null) {
    return INVALID_MOVE;
  }

  const moves = G.jumping === null ? getValidMoves(G, ctx.playerID) : getValidMoves(G, ctx.playerID, G.jumping);
  const move = moves.find((move) => move.from.equals(from) && move.to.equals(to));

  if (typeof move === 'undefined') {
    return INVALID_MOVE;
  }

  const jumped = move.jumped !== null ? move.jumped.toIndex() : -1;
  const isKing = piece.isKing || to.y === crownhead;

  const newG: IG = {
    ...G,
    board: G.board.map((square, i) => {
      switch (i) {
        case indexFrom:
          return null;
        case indexTo:
          return {
            ...piece,
            isKing,
          };
        case jumped:
          return null;
        default:
          return square;
      }
    }),
    jumping: null,
  };

  if (move.jumped === null) {
    return newG;
  }

  const jumping = {
    data: {
      ...piece,
      isKing,
    },
    coord: toCoord,
  };
  const postMoves = getValidMoves(newG, ctx.playerID, jumping);

  if (postMoves.length > 0 && postMoves[0].jumped !== null) {
    return {
      ...newG,
      jumping,
    };
  }

  return newG;
}

export const CheckersGame: Game<IG> = {
  name: 'checkers',
  setup: (): IG => ({ board: INITIAL_BOARD, jumping: null }),
  moves: {
    move,
  },
  turn: {
    moveLimit: 1,
    order: {
      first: () => 0,
      next: (G: IG, ctx) => (G.jumping === null ? (ctx.playOrderPos + 1) % ctx.numPlayers : ctx.playOrderPos),
    },
  },
  endIf: (G: IG, ctx) => {
    if (getValidMoves(G, ctx.currentPlayer === '0' ? '1' : '0').length === 0) {
      return { winner: ctx.currentPlayer };
    }
  },
};
