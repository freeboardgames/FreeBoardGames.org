import { Game, IGameArgs, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { pieces } from './pieces';

export interface IScore {}

export interface IPiecePosition {
  x: number;
  y: number;
  rotation: number;
  flipX: boolean;
  flipY: boolean;
}

export interface IG {
  board: string[];
}

export function getXY(position: number, size: number) {
  return { x: position % size, y: Math.floor(position / size) };
}

export function rotatePiece(squares: boolean[]) {
  const size = Math.sqrt(squares.length);
  let rotated = [];
  for (let n = 0; n < squares.length; n++) {
    const x = n % size;
    const y = Math.floor(n / size);
    rotated[n] = squares[(size - x - 1) * size + y];
  }
  return squares;
}

export function placePiece(G: IG, ctx: IGameCtx, id: number, position: IPiecePosition) {
  let positions = pieces[id]
    .map((square, index) => ({ square, index }))
    .filter(piece => piece.square)
    .map(piece => {
      const { x, y } = getXY(piece.index, Math.sqrt(pieces[id].length));
      return (y + position.y) * 20 + (x + position.x);
    })
    .sort((a, b) => b - a);
  console.log(positions);
  return {
    ...G,
    board: G.board.map((square, i) => {
      if (i === positions[positions.length - 1]) {
        positions.pop();
        return ctx.playerID;
      } else {
        return square;
      }
    }),
  };
}

const GameConfig: IGameArgs = {
  name: 'cornerus',
  flow: {
    movesPerTurn: 1,
    endGameIf: (G: IG, ctx) => {},
  },
  moves: {
    placePiece,
  },
  setup: (ctx): IG => {
    return {
      board: Array(400).fill(null),
    };
  },
};

export const CornerusGame = Game(GameConfig);
