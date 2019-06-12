import { Game, IGameArgs, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import Point from './point';
import Player from './player';
import Piece from './piece';

export enum Phase {
  Place = 'Place',
  Move = 'Move',
}

export interface IG {
  points: Point[];
  players: Player[];
  mills: string[];
  piecesPlaced: number;
  haveToRemovePiece: boolean;
}

const millsPositions = [
  [0, 1, 2],
  [2, 3, 4],
  [4, 5, 6],
  [6, 7, 0],
  [8, 9, 10],
  [10, 11, 12],
  [12, 13, 14],
  [14, 15, 8],
  [16, 17, 18],
  [18, 19, 20],
  [20, 21, 22],
  [22, 23, 16],
  [1, 9, 17],
  [3, 11, 19],
  [5, 13, 21],
  [7, 15, 23],
];

function getMills(G: IG) {
  return millsPositions.map(positions =>
    G.points[positions[0]].piece !== null &&
    G.points[positions[1]].piece !== null &&
    G.points[positions[2]].piece !== null &&
    G.points[positions[0]].piece.player === G.points[positions[1]].piece.player &&
    G.points[positions[1]].piece.player === G.points[positions[2]].piece.player
      ? G.points[positions[0]].piece.player
      : null,
  );
}

export function placePiece(G: IG, ctx: IGameCtx, position: number): IG | string {
  if (G.points[position].piece !== null || G.haveToRemovePiece) {
    return INVALID_MOVE;
  }

  const newG: IG = {
    ...G,
    points: Object.values({
      ...G.points,
      [position]: {
        ...G.points[position],
        piece: new Piece(ctx.playerID, G.piecesPlaced),
      },
    }),
    piecesPlaced: G.piecesPlaced + 1,
  };

  const newMills = getMills(newG);

  return {
    ...newG,
    mills: newMills,
    haveToRemovePiece:
      newMills.filter(mill => mill === ctx.playerID).length > G.mills.filter(mill => mill === ctx.playerID).length,
  };
}

export function movePiece(G: IG, ctx: IGameCtx, position: number, newPosition: number): IG | string {
  if (
    G.points[position].piece === null ||
    G.points[position].piece.player !== ctx.playerID || // Check if player owns this piece // Check if piece exists
    G.points[newPosition].piece !== null || // Check if point isn't already occupied
    G.haveToRemovePiece || // Check if player has to remove piece
    !G.points[position].connections.some(connection => connection === newPosition) // Check if direct connection exists
  ) {
    return INVALID_MOVE;
  }

  const newG: IG = {
    ...G,
    points: Object.values({
      ...G.points,
      [position]: {
        ...G.points[position],
        piece: null,
      },
      [newPosition]: {
        ...G.points[newPosition],
        piece: G.points[position].piece,
      },
    }),
  };

  const newMills = getMills(newG);

  return {
    ...newG,
    mills: newMills,
    haveToRemovePiece: G.mills.some((mill, index) => mill !== ctx.playerID && newMills[index] === ctx.playerID),
  };
}

export function removePiece(G: IG, ctx: IGameCtx, position: number) {
  if (
    !G.haveToRemovePiece || // Check if player is allowed
    G.points[position].piece === null || // Check if piece exists
    G.points[position].piece.player === ctx.playerID || // Check if doesn't player own this piece
    G.mills
      .map((mill, index) => ({ owner: mill, index }))
      .filter(mill => mill.owner !== null && mill.owner !== ctx.playerID)
      .some(mill => millsPositions[mill.index].some(pos => pos === position))
  ) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    points: Object.values({
      ...G.points,
      [position]: {
        ...G.points[position],
        piece: null,
      },
    }),
    players: Object.values({
      ...G.players,
      [ctx.playerID]: {
        lostPieces: G.players[ctx.playerID as any].lostPieces + 1,
      },
    }),
    haveToRemovePiece: false,
  };
}

const GameConfig: IGameArgs = {
  name: 'ninemensmorris',
  flow: {
    startingPhase: Phase.Place,
    phases: {
      Place: {
        allowedMoves: ['placePiece', 'removePiece'],
        next: Phase.Move,
        endPhaseIf: (G: IG) => G.piecesPlaced === 18,
      },
      Move: {
        allowedMoves: ['movePiece', 'removePiece'],
      },
    },
    onMove: (G: IG, ctx) => {
      if (!G.haveToRemovePiece) {
        ctx.events.endTurn();
      }
    },
    endGameIf: (G: IG) => {
      if (G.players.some(player => player.lostPieces === 9)) {
        return { winner: G.players.find(player => player.lostPieces !== 9) };
      }
    },
  },
  moves: {
    placePiece,
    movePiece,
    removePiece,
  },
  setup: (ctx): IG => {
    /* 00-------01-------02
     * |        |         |
     * |  08----09----10  |
     * |  |     |      |  |
     * |  |  16-17-18  |  |
     * |  |  |      |  |  |
     * 07-15-23    19-11-03
     * |  |  |      |  |  |
     * |  |  22-21-20  |  |
     * |  |     |      |  |
     * |  14----13----12  |
     * |        |         |
     * 06-------05-------04
     */

    const points = new Array(24).fill(0).map(() => new Point());
    // Connect "circles"
    points.forEach((point, i) => {
      const prev = i % 8 === 0 ? i + 7 : i - 1;
      const next = (i + 1) % 8 === 0 ? i - 7 : i + 1;
      point.connections.push(prev, next);
    });
    // Connect junctions
    for (let i = 1; i < 9; i += 2) {
      points[i].connections.push(i + 8);
      points[i + 8].connections.push(i, i + 16);
      points[i + 16].connections.push(i + 8);
    }

    const players = new Array(ctx.numPlayers).fill(0).map(() => new Player());

    return {
      points,
      players,
      mills: new Array(16).fill(null),
      piecesPlaced: 0,
      haveToRemovePiece: false,
    };
  },
};

export const NineMensMorrisGame = Game(GameConfig);
