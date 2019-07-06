import { Game } from '@freeboardgame.org/boardgame.io/core';
interface ICheckerPiece {
  id: number;
  player: number;
  isKing?: boolean;
}

interface ICoord {
  x: number;
  y: number;
}

type Piece = ICheckerPiece | null;
export interface IG {
  board: Piece[][];
}

const piece = (id: number, player: number): ICheckerPiece => ({ id, player });

const INITIAL_BOARD: Piece[][] = [
  [null, piece(0, 0), null, piece(1, 0), null, piece(2, 0), null, piece(3, 0)],
  [piece(4, 0), null, piece(5, 0), null, piece(6, 0), null, piece(7, 0), null],
  [null, piece(8, 0), null, piece(9, 0), null, piece(10, 0), null, piece(11, 0)],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [piece(12, 1), null, piece(13, 1), null, piece(14, 1), null, piece(15, 1), null],
  [null, piece(16, 1), null, piece(17, 1), null, piece(18, 1), null, piece(19, 1)],
  [piece(20, 1), null, piece(21, 1), null, piece(22, 1), null, piece(23, 1), null],
];

export const CheckersGame = Game({
  name: 'checkers',

  setup: () => ({ board: INITIAL_BOARD }),

  moves: {
    move(G: IG) {
      return { ...G };
    },
  },

  flow: {
    movesPerTurn: 1,
  },
});
