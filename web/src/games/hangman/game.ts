import { Game } from 'boardgame.io';
import { HangmanState } from './definitions';
import { HANGMAN_INITIAL_STATE } from './constants';
import { setSecret, selectLetter, getWinner } from './util';

export const HangmanGame: Game<HangmanState> = {
  name: 'hangman',

  setup: () => HANGMAN_INITIAL_STATE,
  phases: {
    prepare: {
      moves: { setSecret },
      start: true,
      turn: {
        minMoves: 1,
        maxMoves: 1,
      },
      next: 'play',
      endIf: (G: HangmanState) => {
        return '0' in G.players && '1' in G.players;
      },
    },
    play: {
      //moves: { selectLetter: { move: selectLetter, client: false } },
      moves: { selectLetter },
    },
  },
  endIf: getWinner,
};
