import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx, Game } from 'boardgame.io';
import { ICoord, sum, multiply, inBounds, toIndex, fromPosition, createCoord, equals } from './coord';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import { FullCustomizationState, DEFAULT_FULL_CUSTOMIZATION } from './customization';

interface ICheckerPiece {
  id: number;
  playerID: string;
  isKing: boolean;
}

interface ICheckerPieceWithCoord {
  data: ICheckerPiece;
  coord: ICoord;
}

export interface IMove {
  from: ICoord;
  to: ICoord;
  jumped: ICoord;
}

type Piece = ICheckerPiece | null;

export interface IG {
  board: Piece[];
  jumping: ICheckerPieceWithCoord;
  config: FullCustomizationState;
}

const piece = (id: number, player: number): ICheckerPiece => ({ id, playerID: player.toString(), isKing: false });

// prettier-ignore
export const INITIAL_BOARD: Piece[][] = [
  [
            null,  piece(0, 1),         null,  piece(1, 1),         null,  piece(2, 1),         null,  piece(3, 1),
     piece(4, 1),         null,  piece(5, 1),         null,  piece(6, 1),         null,  piece(7, 1),         null,
            null,  piece(8, 1),         null,  piece(9, 1),         null, piece(10, 1),         null, piece(11, 1),
            null,         null,         null,         null,         null,         null,         null,         null,
            null,         null,         null,         null,         null,         null,         null,         null,
    piece(12, 0),         null, piece(13, 0),         null, piece(14, 0),         null, piece(15, 0),         null,
            null, piece(16, 0),         null, piece(17, 0),         null, piece(18, 0),         null, piece(19, 0),
    piece(20, 0),         null, piece(21, 0),         null, piece(22, 0),         null, piece(23, 0),         null,
  ],
  [
            null,  piece(0, 1),         null,  piece(1, 1),         null,  piece(2, 1),         null,  piece(3, 1),
     piece(4, 1),         null,  piece(5, 1),         null,  piece(6, 1),         null,  piece(7, 1),         null,
            null,         null,         null,         null,         null,         null,         null,         null,
            null,         null,         null,         null,         null,         null,         null,         null,
            null,         null,         null,         null,         null,         null,         null,         null,
            null,         null,         null,         null,         null,         null,         null,         null,
            null,  piece(8, 0),         null,  piece(9, 0),         null, piece(10, 0),         null, piece(11, 0),
    piece(12, 0),         null, piece(13, 0),         null, piece(14, 0),         null, piece(15, 0),         null,
  ]
];

const MAN_DIRS: ICoord[][] = [
  [createCoord(-1, -1), createCoord(1, -1)],
  [createCoord(-1, 1), createCoord(1, 1)],
];

const KING_DIRS: ICoord[] = [createCoord(-1, 1), createCoord(1, 1), createCoord(-1, -1), createCoord(1, -1)];

export function checkPosition(
  G: IG,
  playerID: string,
  piece: ICheckerPiece,
  coord: ICoord,
): { moves: IMove[]; jumped: boolean } {
  const dirs = piece.isKing ? KING_DIRS : MAN_DIRS[playerID as any];
  let moves: IMove[] = [];
  let jumped = false;
  const infiniteDistance: boolean = piece.isKing && G.config.flyingKings;

  for (const dir of dirs) {
    // Look into all valid directions
    let opponentBefore = null;
    for (let i = 1; infiniteDistance ? true : i < 3; i++) {
      const final = sum(coord, multiply(dir, i));

      // Break if move is out of bounds
      if (!inBounds(final)) {
        break;
      }

      const moveTo = G.board[toIndex(final)];

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

        // If there is nothing and the piece can't move infinitely there is no need to continue
        if (!infiniteDistance) {
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
        const coord = fromPosition(index);
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
  const indexFrom = toIndex(from);
  const indexTo = toIndex(to);
  const piece = G.board[indexFrom];
  const crownhead = ctx.playerID === '0' ? 0 : 7;

  if (piece === null || piece.playerID !== ctx.playerID || G.board[indexTo] !== null) {
    return INVALID_MOVE;
  }

  const moves = G.jumping === null ? getValidMoves(G, ctx.playerID) : getValidMoves(G, ctx.playerID, G.jumping);
  const move = moves.find((move) => equals(move.from, from) && equals(move.to, to));

  if (typeof move === 'undefined') {
    return INVALID_MOVE;
  }

  const jumped = move.jumped !== null ? toIndex(move.jumped) : -1;
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
  if (G.config.stopJumpOnKing && !piece.isKing && to.y === crownhead) {
    return newG;
  }

  const jumping = {
    data: {
      ...piece,
      isKing,
    },
    coord: to,
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
  setup: (_, customData: GameCustomizationState): IG => {
    const fullCustomization = (customData?.full as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
    return {
      board: INITIAL_BOARD[fullCustomization.piecesPerPlayer],
      jumping: null,
      config: fullCustomization,
    };
  },
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
