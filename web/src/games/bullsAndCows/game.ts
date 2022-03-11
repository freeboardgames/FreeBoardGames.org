import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { blue, green, common, yellow, brown, red, lightGreen } from '@material-ui/core/colors';
import { IG, generateSecret, checkSecret, isVictory, isGameOver } from './service';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import { FullCustomizationState, DEFAULT_FULL_CUSTOMIZATION } from './customization';

export const BullsAndCowsGame = {
  name: 'bullsAndCows',

  setup: (ctx: Ctx, customData: GameCustomizationState) => {
    const fullCustomization = (customData?.full as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
    const { allowToRepeat, secretLength, limitOfAttempts, totalOfColours } = fullCustomization;

    const defaultColours = [
      { id: 1, img: 'certificate', hex: common['black'] },
      { id: 2, img: 'circle', hex: brown[800] },
      { id: 3, img: 'heart', hex: red[700] },
      { id: 4, img: 'moon', hex: blue[300] },
      { id: 5, img: 'play', hex: green[700] },
      { id: 6, img: 'square', hex: lightGreen['A400'] },
      { id: 7, img: 'star', hex: yellow[700] },
    ];

    const colours = defaultColours.slice(0, totalOfColours);

    const secret = generateSecret(ctx, colours, secretLength, allowToRepeat);

    return {
      attempts: [],
      colours,
      current: Array(secretLength).fill(null),
      lastAttempt: null,
      secret,
      secretLength,
      limitOfAttempts,
      allowToRepeat: allowToRepeat,
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
    pass(G: IG, ctx: Ctx) {
      ctx.events.endTurn();
    },
    check(G: IG) {
      if (G.current.some((n) => n === null)) {
        return INVALID_MOVE;
      }

      const attempt = checkSecret(G.current, G.secret);

      if (!isVictory(G) && !isGameOver(G)) {
        G.attempts.push(attempt);
        G.lastAttempt = attempt;
      }
    },
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
