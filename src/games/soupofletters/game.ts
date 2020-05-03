/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { wordList } from './constants';
import { newPuzzle } from './puzzel'; 

export interface IG {
    puzzel: Array<Array<string>>;
}

export function isVictory() { 
    return false;
}

function initialSetup() {
    return newPuzzle(wordList, {});
}
  
export const SoupOfLettersGame = {
    name: 'soupofletters',

    setup: () => ({
        puzzel: initialSetup()
    }),

    moves: {
        wordFound(G: any, ctx: any, id: number) {
            return { ...G };
        },
    },

    turn: {
        moveLimit: 1,
    },

    endIf: (G, ctx) => {
        isVictory();
    },
};
  