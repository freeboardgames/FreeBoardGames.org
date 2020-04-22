import { IGameArgs } from 'boardgame.io/core';
import { HANGMAN_INITIAL_STATE } from './constants';
import { HangmanState } from './definitions';
import { setSecret, selectLetter, getWinner } from './util';

export const HangmanGame: IGameArgs = {
  name: 'hangman',

  setup: () => HANGMAN_INITIAL_STATE,

  // playerView: (G, ctx, playerID) => {
  //   return StripSecrets(G, ctx, playerID);
  // },

  phases: {
    prepare: {
      moves: { setSecret },
      start: true,
      turn: {
        moveLimit: 1,
      },
      next: 'play',
      endIf: (G: HangmanState) => {
        return G.players['0'] && G.players['1'];
      },
    },
    play: {
      //moves: { selectLetter: { move: selectLetter, client: false } },
      moves: { selectLetter },
    },
  },
  endIf: getWinner,
};
