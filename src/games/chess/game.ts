/*
 * Copyright 2018 The @freeboardgame.org/boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Game, Ctx } from 'boardgame.io';
import Chess from './chessjswrapper';

export interface IG {
  pgn: string;
  fen: string;
}

export function getWinner(chess: any) {
  if (chess.game_over()) {
    if (chess.in_draw() || chess.in_threefold_repetition() || chess.insufficient_material() || chess.in_stalemate()) {
      return 'd';
    } else {
      if (chess.turn() === 'w') {
        return 'b';
      } else {
        return 'w';
      }
    }
  }
}

export const ChessGame: Game<IG> = {
  name: 'chess',

  setup: () => ({ pgn: '', fen: '' }),

  moves: {
    move(G: IG, ctx: Ctx, san: string) {
      const chess = Chess();
      chess.load_pgn(G.pgn);
      chess.move(san, { sloppy: true });
      return { pgn: chess.pgn(), fen: chess.fen() };
    },
  },
  turn: {
    moveLimit: 1,
  },
  endIf: (G: IG) => {
    const chess = Chess();
    chess.load_pgn(G.pgn);
    return getWinner(chess);
  },
};
