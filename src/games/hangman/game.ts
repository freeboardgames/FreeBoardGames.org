import { ActivePlayers, IGameArgs } from 'boardgame.io/core';
import { HANGMAN_INITIAL_STATE } from './constants';
import { setSecret, selectLetter, getWinner } from './util';

export const HangmanGame: IGameArgs = {
  name: 'hangman',

  setup: () => HANGMAN_INITIAL_STATE,

  phases: {
    prepare: {
      //moves: { setSecret: { move: setSecret, client: false } },
      moves: { setSecret },
      start: true,
      next: 'play',
      turn: {
        activePlayers: ActivePlayers.ALL_ONCE,
        onMove: (_, ctx) => {
          if (ctx.activePlayers === null) {
            ctx.events.endPhase();
          }
        },
      },
    },
    play: {
      //moves: { selectLetter: { move: selectLetter, client: false } },
      moves: { selectLetter },
    },
  },
  endIf: getWinner,
};
