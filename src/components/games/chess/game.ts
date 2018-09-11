/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Game } from 'boardgame.io/core';
import Chess from './chessjswrapper';

interface IGameCtx {
  numPlayer: number;
  turn: number;
  currentPlayer: string;
  currentPlayerMoves: number;
}

export function getWinner(chess: any) {
  if (chess.game_over()) {
    if (
      chess.in_draw() ||
      chess.in_threefold_repetition() ||
      chess.insufficient_material() ||
      chess.in_stalemate()
    ) {
      return 'd';
    }
    if (chess.in_checkmate()) {
      if (chess.turn() === 'w') {
        return 'b';
      } else {
        return 'w';
      }
    }
  }
}

const ChessGame = Game({
  name: 'chess',

  setup: () => ({ pgn: '' }),

  moves: {
    move(G: any, ctx: IGameCtx, san: string) {
      const chess = Chess();
      chess.load_pgn(G.pgn);
      if (
        (chess.turn() === 'w' && ctx.currentPlayer === '1') ||
        (chess.turn() === 'b' && ctx.currentPlayer === '0')
      ) {
        return { ...G };
      }
      chess.move(san);
      return { pgn: chess.pgn() };
    },
  },

  flow: {
    movesPerTurn: 1,

    endGameIf: (G: any) => {
      const chess = Chess();
      chess.load_pgn(G.pgn);
      return getWinner(chess);
    },
  },
});

export default ChessGame;
