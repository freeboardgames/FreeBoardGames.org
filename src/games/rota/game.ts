import { IGameArgs, IGameCtx, INVALID_MOVE } from 'boardgame.io/core';

// players are either allowed to place or move pieces
export enum Phase {
  Place = 'Place',
  Move = 'Move',
}

export interface Point {
  x: number;
  y: number;
  playerID: string;
  pieceID: number;
}

export interface IG {
  points: Point[];
  piecesPlaced: number;
  selectedPoint: Point;
}

function findPoint(G: IG, pointX: number, pointY: number): Point {
  for (const p of G.points) {
    if (p.x === pointX && p.y === pointY) {
      return p;
    }
  }
  return { x: null, y: null, playerID: null, pieceID:null };
}

function isSimilarHorizontally(G: IG, p: Point) {
  let testWin = true;
  const axisVar: number[] = [-1, 0, 1];
  for (const y of axisVar) {
    testWin = testWin && p.playerID === findPoint(G, p.x, y).playerID;
  }
  return testWin;
}

function isSimilarVertically(G: IG, p: Point) {
  let testWin = true;
  const axisVar: number[] = [-1, 0, 1];
  for (const x of axisVar) {
    testWin = testWin && p.playerID === findPoint(G, x, p.y).playerID;
  }
  return testWin;
}

function isSimilarDiagonally(G: IG, p: Point) {
  let testWin = p.playerID === findPoint(G, 0, 0).playerID && p.x !==0 && p.y !== 0;
  testWin = testWin && p.playerID === findPoint(G, -p.x, -p.y).playerID;
  return testWin;
}

function isSimilaOnEdge(G: IG, p: Point) {
  let testWin = false;
  if (p.x !== 0 && p.y !== 0) {
    // test around the circumference
    testWin = p.playerID === findPoint(G, 0, p.y).playerID;
    testWin = testWin && p.playerID === findPoint(G, p.x, 0).playerID;
  }
  return testWin;
}

function isVictory(G: IG): boolean {
  const filtered = G.points.filter((p) => p.playerID !== null);
  for (const p of filtered) {
      if (isSimilarHorizontally(G,p) || isSimilarVertically(G,p) || isSimilarDiagonally(G,p) || isSimilaOnEdge(G,p)){
        return true;
      }
  }
  return false;
}

function placePiece(G: IG, ctx: IGameCtx, pointID: number) {
  // if more than 6 pieces are placed, do nothing
  let piecesPlaced = G.piecesPlaced;
  if (piecesPlaced >= 6) {
    return { ...G };
  }

  // add player-id of player who clicked the point
  const points = G.points.map((point, idx) => {
    if (point.playerID === null && pointID === idx) {
      piecesPlaced = piecesPlaced + 1;
      return { ...point, playerID: ctx.currentPlayer, pieceID: G.piecesPlaced };
    } else {
      return { ...point };
    }
  });

  return { ...G, points, piecesPlaced };
}

export function movePiece(G: IG, ctx: IGameCtx, currentID: number, newID: number): IG | string {
  if (
    G.points[currentID].playerID === null ||
    G.points[newID].playerID !== null ||
    G.points[currentID].playerID !== ctx.playerID // Check if player owns this piece
  ) {
    return INVALID_MOVE;
  }

  // check if the move is valid (by checking if distance is greater than 1.5)
  const n1 = 1 / (Math.sqrt(G.points[currentID].x ** 2 + G.points[currentID].y ** 2) || 1);
  const n2 = 1 / (Math.sqrt(G.points[newID].x ** 2 + G.points[newID].y ** 2) || 1);
  const distance = Math.sqrt(
    (G.points[currentID].x * n1 - G.points[newID].x * n2) ** 2 +
      (G.points[currentID].y * n1 - G.points[newID].y * n2) ** 2,
  );
  if (distance > 1.1) {
    return INVALID_MOVE;
  }

  // update the state
  const points = G.points.map((p, idx) => {
    if (idx === currentID) {
      return { ...p, playerID: null, pieceID: null };
    } else if (idx === newID) {
      return { ...p, playerID: G.points[currentID].playerID, pieceID: G.points[currentID].pieceID };
    } else {
      return { ...p };
    }
  });

  return { ...G, points };
}

const GameConfig: IGameArgs = {
  name: 'rota',
  setup: () => {
    // available piece positions
    /*|  -1,1----0,1----1,1  |
     * |  |        |      |   |
     * |  -1,0----0,0----1,0  |
     * |  |        |      |   |
     * |  -1,-1---0,-1-- 1,-1 |
     */

    let points: Point[] = [];
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        points.push({ x, y, playerID: null, pieceID:null });
      }
    }
    return { points, piecesPlaced: 0, selectedPoint: null };
  },
  phases: {
    Place: {
      moves: { placePiece },
      next: Phase.Move,
      endIf: (G: IG) => G.piecesPlaced === 6,
      start: true,
    },
    Move: {
      moves: { movePiece },
    },
  },
  turn: { moveLimit: 1 },
  endIf: (G, ctx) => {
    if (isVictory(G)) {
      return { winner: ctx.currentPlayer };
    }
  },
};

export const RotaGame = GameConfig;
