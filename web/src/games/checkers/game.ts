import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx, Game } from 'boardgame.io';
import { ICoord, sum, multiply, inBounds, toIndex, fromPosition, createCoord, equals } from './coord';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import { FullCustomizationState, DEFAULT_FULL_CUSTOMIZATION } from './customization';

interface ICheckerPiece {
  id: number;
  playerID: string;
  isKing: boolean;
  pos: number;
}

export interface IMove {
  from: ICoord;
  to: ICoord;
  jumped: ICoord;
}

type Piece = ICheckerPiece | null;

export interface IG {
  board: ICheckerPiece[];
  jumping: Piece;
  moveCount: number;
  config: FullCustomizationState;
}

const piece = (id: number, player: number, pos: number, isKing?: boolean): ICheckerPiece => ({
  id,
  playerID: player.toString(),
  isKing: typeof isKing === 'undefined' ? false : isKing,
  pos,
});

export const INITIAL_BOARD: string[] = [
  '1p1p1p1pp1p1p1p11p1p1p1p88P1P1P1P11P1P1P1PP1P1P1P1',
  '1p1p1p1pp1p1p1p188881P1P1P1PP1P1P1P1',
];

// Inspired by chess FEN notation
export function convertStringToBoard(str: string): ICheckerPiece[] {
  let index = 0;
  let board: Piece[] = [];
  let position = 0;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], 10))) {
      index++;
      switch (str[i]) {
        case 'p':
          board.push(piece(index, 1, position));
          break;
        case 'P':
          board.push(piece(index, 0, position));
          break;
        case 'k':
          board.push(piece(index, 1, position, true));
          break;
        case 'K':
          board.push(piece(index, 0, position, true));
          break;
        default:
          index--;
      }
      position++;
    } else {
      position += parseInt(str[i], 10);
    }
  }
  return board;
}

const MAN_DIRS: ICoord[][] = [
  [createCoord(-1, -1), createCoord(1, -1)],
  [createCoord(-1, 1), createCoord(1, 1)],
];

const KING_DIRS: ICoord[] = [createCoord(-1, 1), createCoord(1, 1), createCoord(-1, -1), createCoord(1, -1)];

export function getPieceFromPos(board: Piece[], pos: number): Piece {
  const piece = board.find((p) => p.pos === pos);
  if (typeof piece === 'undefined') {
    return null;
  } else {
    return piece;
  }
}

export function checkPosition(G: IG, playerID: string, piece: ICheckerPiece): { moves: IMove[]; jumped: boolean } {
  const dirs = piece.isKing ? KING_DIRS : MAN_DIRS[playerID as any];
  let moves: IMove[] = [];
  let jumped = false;
  const infiniteDistance: boolean = piece.isKing && G.config.flyingKings;
  const coord = fromPosition(piece.pos);

  for (const dir of dirs) {
    // Look into all valid directions
    let opponentBefore = null;
    for (let i = 1; infiniteDistance ? true : i < 3; i++) {
      const final = sum(coord, multiply(dir, i));

      // Break if move is out of bounds
      if (!inBounds(final)) {
        break;
      }

      const moveTo = getPieceFromPos(G.board, toIndex(final));

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

export function getValidMoves(G: IG, playerID: string, jumping?: ICheckerPiece) {
  let movesTotal: IMove[] = [];
  let jumpedTotal = false;

  if (typeof jumping === 'undefined') {
    G.board.forEach((piece) => {
      if (piece.playerID === playerID) {
        const { moves, jumped } = checkPosition(G, playerID, piece);
        movesTotal.push(...moves);
        jumpedTotal = jumpedTotal || jumped;
      }
    });
  } else {
    const { moves, jumped } = checkPosition(G, playerID, jumping);
    movesTotal = moves;
    jumpedTotal = jumped;
  }

  if ((jumpedTotal && G.config.forcedCapture) || jumping) {
    return movesTotal.filter((move) => move.jumped);
  } else {
    return movesTotal;
  }
}

export function move(G: IG, ctx: Ctx, from: ICoord, to: ICoord): IG | string {
  const indexFrom = toIndex(from);
  const indexTo = toIndex(to);
  const piece = getPieceFromPos(G.board, indexFrom);
  const crownhead = ctx.playerID === '0' ? 0 : 7;

  if (piece === null || piece.playerID !== ctx.playerID || getPieceFromPos(G.board, indexTo) !== null) {
    return INVALID_MOVE;
  }

  const moves = G.jumping === null ? getValidMoves(G, ctx.playerID) : getValidMoves(G, ctx.playerID, G.jumping);
  const move = moves.find((move) => equals(move.from, from) && equals(move.to, to));

  if (typeof move === 'undefined') {
    return INVALID_MOVE;
  }

  const jumped = move.jumped !== null ? toIndex(move.jumped) : -1;
  const isKing = piece.isKing || to.y === crownhead;

  const moveCount = G.config.nMoveRule === -1 || move.jumped !== null || !piece.isKing ? 0 : G.moveCount + 1;
  const newPiece = {
    ...piece,
    isKing,
    pos: indexTo,
  };

  const newG: IG = {
    ...G,
    board: G.board
      .filter((piece) => piece.pos !== jumped)
      .map((piece) => {
        if (piece.pos === indexFrom) {
          return newPiece;
        } else {
          return piece;
        }
      }),
    jumping: null,
    moveCount,
  };

  if (move.jumped === null) {
    return newG;
  }
  if (G.config.stopJumpOnKing && !piece.isKing && to.y === crownhead) {
    return newG;
  }

  const postMoves = getValidMoves(newG, ctx.playerID, newPiece);

  if (postMoves.length > 0 && postMoves[0].jumped !== null) {
    return {
      ...newG,
      jumping: newPiece,
    };
  }

  return newG;
}

export const CheckersGame: Game<IG> = {
  name: 'checkers',
  setup: (_, customData: GameCustomizationState): IG => {
    const fullCustomization = (customData?.full as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
    return {
      board: convertStringToBoard(INITIAL_BOARD[fullCustomization.piecesPerPlayer]),
      jumping: null,
      moveCount: 0,
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
    } else if (G.config.nMoveRule !== -1 && G.moveCount >= G.config.nMoveRule * 2) {
      return { winner: 'draw' };
    }
  },
};
