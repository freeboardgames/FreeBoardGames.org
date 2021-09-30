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

interface IPieceStack {
  id: number;
  pieces: ICheckerPiece[];
  pos: number;
}

export interface IMove {
  from: ICoord;
  to: ICoord;
  dir: number;
  jumped: ICoord;
}

type PieceStack = IPieceStack | null;

export interface IG {
  board: IPieceStack[];
  jumping: PieceStack;
  moveCount: number;
  capturingDir: number | null;
  captured: number[];
  repetition: { [key: string]: number };
  forcedCapture: boolean;
}

const piece = (id: number, player: number, pos: number, isKing?: boolean): IPieceStack => ({
  id,
  pieces: [
    {
      id,
      playerID: player.toString(),
      isKing: typeof isKing === 'undefined' ? false : isKing,
    },
  ],
  pos,
});

export const INITIAL_BOARD: string = '1p1p1p1pp1p1p1p11p1p1p1p88P1P1P1P11P1P1P1PP1P1P1P1';

// Inspired by chess FEN notation
export function convertStringToBoard(str: string): IPieceStack[] {
  let index = 0;
  let board: IPieceStack[] = [];
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

// For checking threefold repetition
function convertBoardToString(board: IPieceStack[]) {
  board.sort((a, b) => a.pos - b.pos);
  let boardstr = '';
  for (const stack of board) {
    for (const piece of stack.pieces) {
      if (piece.playerID === '1') {
        if (piece.isKing) {
          boardstr += 'k';
        } else {
          boardstr += 'p';
        }
      } else {
        if (piece.isKing) {
          boardstr += 'K';
        } else {
          boardstr += 'P';
        }
      }
    }
    boardstr += stack.pos;
  }
  return boardstr;
}

// 0: SW, 1: SE, 2: NE, 3: NW
const DIRS: ICoord[] = [createCoord(-1, 1), createCoord(1, 1), createCoord(1, -1), createCoord(-1, -1)];

export function getStackFromPos(board: IPieceStack[], pos: number): PieceStack {
  const piece = board.find((p) => p.pos === pos);
  if (typeof piece === 'undefined') {
    return null;
  } else {
    return piece;
  }
}

export function checkPosition(G: IG, playerID: string, stack: IPieceStack): { moves: IMove[]; jumped: boolean } {
  let moves: IMove[] = [];
  let jumped = false;
  const coord = fromPosition(stack.pos);

  for (let dir = 0; dir < DIRS.length; dir++) {
    // Skip if it's a 180 degree turn compared to previous capture
    if (G.capturingDir !== null && dir === (G.capturingDir + 2) % 4) {
      continue;
    }

    // Look into all valid directions
    let opponentBefore = null;
    for (let i = 1; stack.pieces[stack.pieces.length - 1].isKing ? true : i < 3; i++) {
      const final = sum(coord, multiply(DIRS[dir], i));

      // Break if move is out of bounds
      if (!inBounds(final)) {
        break;
      }

      const moveTo = getStackFromPos(G.board, toIndex(final));

      // Break if we encounter our piece
      if (moveTo !== null && moveTo.pieces[moveTo.pieces.length - 1].playerID === playerID) {
        break;
      }

      if (moveTo !== null && moveTo.pieces[moveTo.pieces.length - 1].playerID !== playerID) {
        // If we already encountered opponent the directions is blocked
        if (opponentBefore || G.captured.includes(moveTo.pos)) {
          break;
        }

        opponentBefore = final;
      }

      if (moveTo === null) {
        moves.push({ from: coord, to: final, dir, jumped: opponentBefore });
        if (opponentBefore) {
          jumped = true;
        }

        // If there is nothing and the piece isn't a king there is no need to continue
        if (!stack.pieces[stack.pieces.length - 1].isKing) {
          break;
        }
      }
    }
  }

  if (!stack.pieces[stack.pieces.length - 1].isKing) {
    const lowerRange = playerID === '0' ? 2 : 0;
    const upperRange = playerID === '0' ? 4 : 2;
    moves = moves.filter((move) => move.jumped || (move.dir >= lowerRange && move.dir < upperRange));
  }

  return { moves, jumped };
}

export function getValidMoves(G: IG, playerID: string, jumping?: IPieceStack): IMove[] {
  let movesTotal: IMove[] = [];
  let jumpedTotal = false;

  if (typeof jumping === 'undefined') {
    G.board.forEach((stack) => {
      if (stack.pieces[stack.pieces.length - 1].playerID === playerID) {
        const { moves, jumped } = checkPosition(G, playerID, stack);
        movesTotal.push(...moves);
        jumpedTotal = jumpedTotal || jumped;
      }
    });
  } else {
    const { moves, jumped } = checkPosition(G, playerID, jumping);
    movesTotal = moves;
    jumpedTotal = jumped;
  }

  if ((jumpedTotal && G.forcedCapture) || jumping) {
    return movesTotal.filter((move) => move.jumped);
  } else {
    return movesTotal;
  }
}

export function move(G: IG, ctx: Ctx, from: ICoord, to: ICoord): IG | string {
  const indexFrom = toIndex(from);
  const indexTo = toIndex(to);
  const stack = getStackFromPos(G.board, indexFrom);
  const crownhead = ctx.playerID === '0' ? 0 : 7;

  if (
    stack === null ||
    stack.pieces[stack.pieces.length - 1].playerID !== ctx.playerID ||
    getStackFromPos(G.board, indexTo) !== null
  ) {
    return INVALID_MOVE;
  }

  const moves = G.jumping === null ? getValidMoves(G, ctx.playerID) : getValidMoves(G, ctx.playerID, G.jumping);
  const move = moves.find((move) => equals(move.from, from) && equals(move.to, to));

  if (typeof move === 'undefined') {
    return INVALID_MOVE;
  }

  const jumped = move.jumped !== null ? toIndex(move.jumped) : -1;
  const isKing = stack.pieces[stack.pieces.length - 1].isKing || to.y === crownhead;
  const irreversible = move.jumped !== null || !stack.pieces[stack.pieces.length - 1].isKing;

  G.moveCount = irreversible ? 0 : G.moveCount + 1;

  let newStack = {
    ...stack,
    pos: indexTo,
  };

  newStack.pieces[newStack.pieces.length - 1].isKing = isKing;

  if (jumped !== -1) {
    G.captured.push(jumped);
    newStack.pieces.unshift(getStackFromPos(G.board, jumped).pieces.slice(-1)[0]);
  }

  G.board = G.board.map((stack) => {
    if (stack.pos === indexFrom) {
      return newStack;
    } else {
      return stack;
    }
  });
  G.jumping = null;

  if (move.jumped === null) {
    G.captured = [];
    G.capturingDir = null;
    if (irreversible) {
      G.repetition = {};
      G.repetition[convertBoardToString(G.board)] = 1;
    } else {
      const boardstr = convertBoardToString(G.board);
      if (typeof G.repetition[boardstr] === 'undefined') {
        G.repetition[boardstr] = 1;
      } else {
        G.repetition[boardstr]++;
      }
    }
    return G;
  }

  G.capturingDir = move.dir;

  const postMoves = getValidMoves(G, ctx.playerID, newStack);

  if (postMoves.length > 0 && postMoves[0].jumped !== null) {
    G.jumping = newStack;
    return G;
  }

  const originalLength = G.board.length;
  G.board = G.board
    .map((stack) => {
      if (G.captured.includes(stack.pos)) {
        stack.pieces.pop();
      }
      return stack;
    })
    .filter((stack) => stack.pieces.length !== 0);

  if (originalLength > G.board.length) {
    G.repetition = {};
    G.repetition[convertBoardToString(G.board)] = 1;
  } else {
    const boardstr = convertBoardToString(G.board);
    if (typeof G.repetition[boardstr] === 'undefined') {
      G.repetition[boardstr] = 1;
    } else {
      G.repetition[boardstr]++;
    }
  }

  G.captured = [];
  G.capturingDir = null;
  return G;
}

export const BashniGame: Game<IG> = {
  name: 'bashni',
  setup: (_, customData: GameCustomizationState): IG => {
    const fullCustomization = (customData?.full as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
    return {
      board: convertStringToBoard(INITIAL_BOARD),
      jumping: null,
      moveCount: 0,
      capturingDir: null,
      captured: [],
      repetition: {},
      forcedCapture: fullCustomization.forcedCapture,
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
    onBegin: (G: IG, ctx) => {
      if (getValidMoves(G, ctx.currentPlayer).length === 0) {
        ctx.events.endGame({ winner: ctx.currentPlayer === '0' ? '1' : '0' });
      }
    },
  },
  endIf: (G: IG) => {
    if (G.moveCount >= 30) {
      return { winner: 'draw' };
    }
    for (const k in G.repetition) {
      if (G.repetition[k] >= 3) {
        return { winner: 'repetition' };
      }
    }
  },
};
