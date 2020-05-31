import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';
import { Game, Ctx } from 'boardgame.io';
import { IScore } from 'gamesShared/components/scores/Scoreboard';
import { pieces } from './pieces';

export interface IPieceTransform {
  x: number;
  y: number;
  rotation: number;
  flipX: boolean;
  flipY: boolean;
}

export interface IPlayer {
  end: boolean;
  pieces: number[];
}

export interface IG {
  board: string[];
  players: IPlayer[];
  turnOrder: string[];
  turn: number;
  playOrderPos: number;
}

export function getXY(position: number, size: number) {
  return { x: position % size, y: Math.floor(position / size) };
}

export function getPosition(x: number, y: number) {
  return x + y * 20;
}

export function inBounds(x: number, y: number) {
  return x >= 0 && x < 20 && y >= 0 && y < 20;
}

// Map real playerID to 'fake' one
export function getPlayer(ctx: Ctx, G: IG, playerID: string) {
  if (ctx.numPlayers === 2) {
    if (playerID === '0') {
      return G.turn % 4 === 1 ? '0' : '1';
    } else {
      return G.turn % 4 === 2 ? '2' : '3';
    }
  } else if (ctx.numPlayers === 3) {
    return ctx.turn % 4 === 0 ? '3' : playerID;
  } else {
    return playerID;
  }
}

export function isFirstTurn(ctx: Ctx) {
  return ctx.turn <= 4;
}

export function getScoreBoard(G: IG, ctx: Ctx) {
  const scoreboard: IScore[] = G.players.map((player, i) => ({
    playerID: i.toString(),
    score: player.pieces.reduce((acc, piece) => acc - pieces[piece].filter((square) => square).length, 0),
  }));

  if (ctx.numPlayers === 2) {
    return [
      { playerID: '0', score: scoreboard[0].score + scoreboard[1].score },
      { playerID: '1', score: scoreboard[2].score + scoreboard[3].score },
    ].sort((a, b) => b.score - a.score);
  } else if (ctx.numPlayers === 3) {
    return scoreboard.filter((_, i) => i !== 3).sort((a, b) => b.score - a.score);
  } else {
    return scoreboard.sort((a, b) => b.score - a.score);
  }
}

export function rotatePiece(squares: boolean[]) {
  const size = Math.sqrt(squares.length);
  let rotated = new Array(squares.length);
  for (let n = 0; n < squares.length; n++) {
    const x = n % size;
    const y = Math.floor(n / size);
    rotated[n] = squares[(size - x - 1) * size + y];
  }
  return rotated;
}

export function flipPieceY(squares: boolean[]) {
  const size = Math.sqrt(squares.length);
  let flipped = new Array(squares.length);
  for (let n = 0; n < squares.length; n++) {
    flipped[n] = squares[n + size * (size - Math.floor(n / size) * 2 - 1)];
  }
  return flipped;
}

export function flipPieceX(squares: boolean[]) {
  const size = Math.sqrt(squares.length);
  let flipped = new Array(squares.length);
  for (let n = 0; n < squares.length; n++) {
    flipped[n] = squares[n + size - (n % size) * 2 - 1];
  }
  return flipped;
}

function playerEnded(G: IG, ctx: Ctx, playerID: string) {
  const player = G.players[getPlayer(ctx, G, playerID) as any];
  return player.end || player.pieces.length === 0;
}

const corners = [
  [0, 0],
  [19, 0],
  [19, 19],
  [0, 19],
];

export function getAllPositions(piece: boolean[], transform: IPieceTransform) {
  return piece
    .map((square, index) => ({ square, index }))
    .filter((piece) => piece.square)
    .map((square) => {
      const { x, y } = getXY(square.index, Math.sqrt(piece.length));
      return { x: x + transform.x, y: y + transform.y };
    })
    .sort((a, b) => getPosition(b.x, b.y) - getPosition(a.x, a.y));
}

export function getValidPositions(G: IG, ctx: Ctx, piece: boolean[], transform: IPieceTransform, playerID: string) {
  const positions = getAllPositions(piece, transform);
  if (
    positions.some((pos) => !inBounds(pos.x, pos.y)) || // Check if piece is on board
    positions.some(
      // Check if squares don't touch with edges
      (pos) =>
        G.board[getPosition(pos.x, pos.y)] !== null ||
        positions.some((pos) =>
          [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ].some(
            (dir) =>
              inBounds(pos.x + dir[0], pos.y + dir[1]) &&
              G.board[getPosition(pos.x + dir[0], pos.y + dir[1])] === playerID,
          ),
        ),
    ) ||
    (!positions.some((
      pos, // Check if squares are touching with corner atleast 1 time
    ) =>
      [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ].some(
        (dir) =>
          inBounds(pos.x + dir[0], pos.y + dir[1]) && G.board[getPosition(pos.x + dir[0], pos.y + dir[1])] === playerID,
      ),
    ) &&
      (!isFirstTurn(ctx) ||
        !positions.some((pos) => pos.x === corners[playerID as any][0] && pos.y === corners[playerID as any][1])))
  ) {
    return null;
  }
  return positions;
}

export function placePiece(G: IG, ctx: Ctx, id: number, transform: IPieceTransform) {
  const playerID = getPlayer(ctx, G, ctx.playerID);
  let piece = pieces[G.players[parseInt(playerID)].pieces[id]];

  if (transform.flipX) {
    piece = flipPieceX(piece);
  }
  if (transform.flipY) {
    piece = flipPieceY(piece);
  }
  for (let i = 0; i < transform.rotation; i++) {
    piece = rotatePiece(piece);
  }

  const positions = getValidPositions(G, ctx, piece, transform, playerID);

  if (positions === null) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    board: G.board.map((square, i) => {
      if (
        positions.length > 0 &&
        i === getPosition(positions[positions.length - 1].x, positions[positions.length - 1].y)
      ) {
        positions.pop();
        return playerID;
      } else {
        return square;
      }
    }),
    players: Object.values({
      ...G.players,
      [playerID]: {
        ...G.players[playerID as any],
        pieces: G.players[playerID as any].pieces.filter((_, i) => i !== id),
      },
    }),
  };
}

export function endGame(G: IG, ctx: Ctx) {
  return {
    ...G,
    players: Object.values({
      ...G.players,
      [getPlayer(ctx, G, ctx.playerID)]: {
        ...G.players[getPlayer(ctx, G, ctx.playerID) as any],
        end: true,
      },
    }),
  };
}

const GameConfig: Game<IG> = {
  name: 'cornerus',
  endIf: (G: IG, ctx) => {
    if (!G.players.some((player) => !player.end && player.pieces.length > 0)) {
      return { scoreboard: getScoreBoard(G, ctx) };
    }
  },
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onMove: (G, ctx) => {
      if (!G.players.some((player) => !player.end && player.pieces.length > 0)) {
        ctx.events.endGame({ scoreboard: getScoreBoard(G, ctx) });
        return;
      }

      let nextPlayer = ctx.playOrder[(G.playOrderPos + 1) % ctx.playOrder.length];
      let newG = {
        ...G,
        turn: G.turn + 1,
        playOrderPos: (G.playOrderPos + 1) % ctx.playOrder.length,
      };
      let turnPlus = 1;

      for (let i = 2; playerEnded(newG, ctx, nextPlayer); i++) {
        nextPlayer = ctx.playOrder[(G.playOrderPos + i) % ctx.playOrder.length];
        newG = {
          ...newG,
          turn: newG.turn + 1,
          playOrderPos: (newG.playOrderPos + 1) % ctx.playOrder.length,
        };
        turnPlus++;
      }

      ctx.events.endTurn({ next: ctx.playOrder[(G.playOrderPos + turnPlus) % ctx.playOrder.length] });
      return newG;
    },
  },
  moves: {
    placePiece,
    endGame,
  },
  setup: (ctx): IG => {
    const turnOrders = [
      ['0', '1'],
      ['0', '1', '2', '0', '0', '1', '2', '1', '0', '1', '2', '2'],
      ['0', '1', '2', '3'],
    ];

    return {
      board: Array(400).fill(null),
      players: Array(4)
        .fill(0)
        .map(() => ({
          end: false,
          pieces: Array(pieces.length)
            .fill(0)
            .map((_, i) => i),
        })),
      turnOrder: turnOrders[ctx.numPlayers - 2],
      turn: 1,
      playOrderPos: 0,
    };
  },
};

export const CornerusGame = GameConfig;
