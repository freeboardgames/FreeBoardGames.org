import { Game, IGameArgs, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';

export interface IG {
  points: string[];
}

function toPosition(x: number, y: number) {
  return y * 8 + x;
}

function inBounds(x: number, y: number) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

export function placePiece(G: IG, ctx: IGameCtx, x: number, y: number) {
  let changed: number[] = [toPosition(x, y)];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      let valid = false;
      let update = [];
      let currX = x + i;
      let currY = y + j;
      for (let k = 2; inBounds(currX, currY) && G.points[toPosition(currX, currY)] !== null; k++) {
        if (G.points[toPosition(currX, currY)] === ctx.currentPlayer) {
          valid = true;
          break;
        }
        update.push(toPosition(currX, currY));

        currX = x + i * k;
        currY = y + j * k;
      }

      if (valid) {
        changed.push(...update);
      }
    }
  }

  if (changed.length === 1) {
    return INVALID_MOVE;
  } else {
    changed.sort((a, b) => b - a);
    return {
      ...G,
      points: G.points.map((point, i) => {
        if (changed.length > 0 && i === changed[changed.length - 1]) {
          changed.pop();
          return ctx.playerID;
        } else {
          return point;
        }
      }),
    };
  }
}

const GameConfig: IGameArgs = {
  name: 'rolit',
  flow: {
    movesPerTurn: 1,
    endGameIf: (G: IG) => {
      if (!G.points.some(point => point === null)) {
        // TODO
      }
    },
  },
  moves: {
    placePiece,
  },
  setup: (): IG => {
    let points = Array(64).fill(null);
    points[toPosition(3, 3)] = '0';
    points[toPosition(4, 3)] = '1';
    points[toPosition(4, 4)] = '2';
    points[toPosition(3, 4)] = '3';
    return {
      points,
    };
  },
};

export const RolitGame = Game(GameConfig);
