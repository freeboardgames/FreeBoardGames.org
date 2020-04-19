import { Game } from 'boardgame.io';
import { HangmanState } from './definitions';
import { HANGMAN_INITIAL_STATE } from './constants';
import { setSecret, selectLetter, getWinner } from './util';

export const HangmanGame: Game<HangmanState> = {
  name: 'hangman',

  setup: () => HANGMAN_INITIAL_STATE,

  phases: {
    prepare: {
      //moves: { setSecret: { move: setSecret, client: false } },
      moves: { setSecret },
      start: true,
      turn: {
        moveLimit: 1,
      },
      next: 'play',
    },
    play: {
      //moves: { selectLetter: { move: selectLetter, client: false } },
      moves: { selectLetter },
    },
  },
  endIf: getWinner,
};
