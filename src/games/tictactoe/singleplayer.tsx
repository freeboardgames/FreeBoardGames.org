/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as React from 'react';
import { Client } from 'flamecoals-boardgame.io/react';
import { AI } from 'flamecoals-boardgame.io/ai';
import { TictactoeGame } from './game';
import Board from './board';
import { GameLayout } from '../../App/Game/GameLayout';

const App = Client({
  game: TictactoeGame,
  board: Board,
  ai: AI({
    enumerate: (G: any) => {
      const r = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          r.push({ move: 'clickCell', args: [i] });
        }
      }
      return r;
    },
  }),
});

const Singleplayer = () => (
  <div>
    <h1>Singleplayer</h1>
    <App gameID="single" />
  </div>
);

export default Singleplayer;
