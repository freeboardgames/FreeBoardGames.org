import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { blue, green, common, yellow, brown, red, lightGreen } from '@material-ui/core/colors';
import { IG, generateSecret, checkSecret, isVictory, isGameOver } from './service';

export const BullsAndCowsGame = {
  name: 'bullsAndCows',

  setup: (ctx: Ctx) => {
    const secretLength = 4;
    const limitOfAttempts = 12;
    const allowToRepeat = false;

    const colours = [
      { id: 1, img: 'certificate', hex: common['black'] },
      { id: 2, img: 'circle', hex: brown[800] },
      { id: 3, img: 'heart', hex: red[700] },
      { id: 4, img: 'moon', hex: blue[300] },
      { id: 5, img: 'play', hex: green[700] },
      { id: 6, img: 'square', hex: lightGreen['A400'] },
      { id: 7, img: 'star', hex: yellow[700] },
    ];

    const secret = generateSecret(ctx, colours, secretLength, allowToRepeat);

    return {
      attempts: [],
      colours,
      current: Array(secretLength).fill(null),
      currentAttempt: null,
      secret,
      secretLength,
      limitOfAttempts,
    };
  },

  playerView: (G: IG, ctx: Ctx) => {
    return {
      ...G,
      secret: ctx.gameover ? G.secret : [],
    };
  },

  moves: {
    setColourInPosition(G: IG, ctx: Ctx, colourId: number, position: number) {
      G.current[position] = G.colours.find((c) => c.id === colourId);
    },
    check(G: IG) {
      if (G.current.some((n) => n === null)) {
        return INVALID_MOVE;
      }

      const attempt = checkSecret(G.current, G.secret);

      if (!isVictory(G) && !isGameOver(G)) {
        G.attempts.push(attempt);
        G.currentAttempt = attempt;
      }
    },
  },

  turn: {
    moveLimit: 1,
  },

  endIf: (G: IG, ctx: Ctx) => {
    if (isVictory(G)) {
      return { winner: ctx.currentPlayer };
    }

    if (isGameOver(G)) {
      return { loose: true };
    }
  },
};
