import { Game, IGameArgs, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { pieces } from './pieces';

export interface IScore {
  playerID: string;
  score: number;
}

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
}

export function getXY(position: number, size: number) {
  return { x: position % size, y: Math.floor(position / size) };
}

export function getPosition(x: number, y: number) {
  return x + y * 20;
}

function inBounds(x: number, y: number) {
  return x >= 0 && x < 20 && y >= 0 && y < 20;
}

export function getPlayer(ctx: IGameCtx, playerID: string) {
  const numMoves = ctx.stats.phase.numMoves[playerID];
  if (ctx.numPlayers === 2) {
    if (playerID === '0') {
      return numMoves % 2 === 1 ? '1' : '0';
    } else {
      return numMoves % 2 === 1 ? '3' : '2';
    }
  } else {
    return playerID;
  }
}

function isFirstTurn(ctx: IGameCtx) {
  const numMoves = ctx.stats.phase.numMoves[ctx.playerID];
  if (ctx.numPlayers === 2) {
    return typeof numMoves === 'undefined' || numMoves === 1;
  } else {
    return typeof numMoves === 'undefined';
  }
}

function getScoreBoard(G: IG, ctx: IGameCtx) {
  const scoreBoard: IScore[] = G.players.map((player, i) => ({
    playerID: i.toString(),
    score: player.pieces.reduce((acc, piece) => acc - pieces[piece].filter(square => square).length, 0),
  }));

  if (ctx.numPlayers === 2) {
    return [
      { playerID: '0', score: scoreBoard[0].score + scoreBoard[1].score },
      { playerID: '1', score: scoreBoard[2].score + scoreBoard[3].score },
    ].sort((a, b) => b.score - a.score);
  } else {
    return scoreBoard.sort((a, b) => b.score - a.score);
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

function playerEnded(G: IG, ctx: IGameCtx) {
  const player = G.players[getPlayer(ctx, ctx.currentPlayer) as any];
  return player.end || player.pieces.length === 0;
}

const corners = [[0, 0], [19, 0], [19, 19], [0, 19]];

export function placePiece(G: IG, ctx: IGameCtx, id: number, transform: IPieceTransform) {
  const playerID = getPlayer(ctx, ctx.playerID);

  let piece = pieces[G.players[playerID as any].pieces[id]];

  if (transform.flipX) {
    piece = flipPieceX(piece);
  }
  if (transform.flipY) {
    piece = flipPieceY(piece);
  }
  for (let i = 0; i < transform.rotation; i++) {
    piece = rotatePiece(piece);
  }

  let positions = piece
    .map((square, index) => ({ square, index }))
    .filter(piece => piece.square)
    .map(square => {
      const { x, y } = getXY(square.index, Math.sqrt(piece.length));
      return { x: x + transform.x, y: y + transform.y };
    })
    .sort((a, b) => getPosition(b.x, b.y) - getPosition(a.x, a.y));

  if (
    positions.some(pos => !inBounds(pos.x, pos.y)) || // Check if piece is on board
    positions.some(
      // Check if squares don't touch with edges
      pos =>
        G.board[getPosition(pos.x, pos.y)] !== null ||
        positions.some(pos =>
          [[-1, 0], [1, 0], [0, -1], [0, 1]].some(
            dir =>
              inBounds(pos.x + dir[0], pos.y + dir[1]) &&
              G.board[getPosition(pos.x + dir[0], pos.y + dir[1])] === playerID,
          ),
        ),
    ) ||
    (!positions.some((
      pos, // Check if squares are touching with corner atleast 1 time
    ) =>
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].some(
        dir =>
          inBounds(pos.x + dir[0], pos.y + dir[1]) && G.board[getPosition(pos.x + dir[0], pos.y + dir[1])] === playerID,
      ),
    ) &&
      (!isFirstTurn(ctx) ||
        !positions.some(pos => pos.x === corners[playerID as any][0] && pos.y === corners[playerID as any][1])))
  ) {
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

export function endGame(G: IG, ctx: IGameCtx) {
  return {
    ...G,
    players: Object.values({
      ...G.players,
      [getPlayer(ctx, ctx.playerID)]: {
        ...G.players[getPlayer(ctx, ctx.playerID) as any],
        end: true,
      },
    }),
  };
}

const GameConfig: IGameArgs = {
  name: 'cornerus',
  flow: {
    movesPerTurn: 1,
    endGameIf: (G: IG, ctx) => {
      if (!G.players.some(player => !player.end && player.pieces.length > 0)) {
        return { scoreboard: getScoreBoard(G, ctx) };
      }
    },
    onTurnBegin: (G: IG, ctx) => {
      if (playerEnded(G, ctx)) {
        do {
          ctx.stats.phase.numMoves[ctx.currentPlayer as any] += 1;
          ctx.currentPlayer = ((parseInt(ctx.currentPlayer) + 1) % ctx.numPlayers).toString();
          ctx.actionPlayers = [ctx.currentPlayer];
          ctx.playOrderPos = (ctx.playOrderPos + 1) % ctx.playOrder.length;
          ctx.turn++;
        } while (playerEnded(G, ctx));
        ctx.events.endTurn();
      }
    },
  },
  moves: {
    placePiece,
    endGame,
  },
  setup: (): IG => {
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
    };
  },
};

export const CornerusGame = Game(GameConfig);
