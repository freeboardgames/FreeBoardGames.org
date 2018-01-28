/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Game } from 'boardgame.io/core';
import Chess from 'chess.js';

interface IGameCtx {
  numPlayer: number;
  turn: number;
  currentPlayer: string;
  currentPlayerMoves: number;
};

// Helper to instantiate chess.js correctly on
// both browser and Node.
function Load(pgn: string) {
  let chess = null;
  const ChessPackage = Chess as any
  if (ChessPackage.Chess) {
    chess = new ChessPackage.Chess();
  } else {
    chess = new Chess();
  }
  chess.load_pgn(pgn);
  return chess;
}

const ChessGame = Game({
  name: 'chess',

  setup: () => ({ pgn: '' }),

  moves: {
    move(G: any, ctx: IGameCtx, san: string) {
      const chess = Load(G.pgn) as Chess;
      if (
        (chess.turn() == 'w' && ctx.currentPlayer == '1') ||
        (chess.turn() == 'b' && ctx.currentPlayer == '0')
      ) {
        return { ...G };
      }
      chess.move(san);
      return { pgn: chess.pgn() };
    },
  },

  flow: {
    movesPerTurn: 1,

    endGameIf: (G:any) => {
      const chess = Load(G.pgn);
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
          if (chess.turn() == 'w') {
            return 'b';
          } else {
            return 'w';
          }
        }
      }
    },
  },
});

export default ChessGame;
