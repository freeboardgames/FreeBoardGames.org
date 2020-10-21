import { validateOnEntry, validateEndIf, validateOnExit } from './validateState';
import {moveChosePriest } from './moves'

export var phaseChosePriest = {
    start: true,
    onBegin: (G, ctx) => {
      console.log('staring phaseChosePriest');

      if (!validateOnEntry(G, ctx)) {
        console.log('Error 1 !');
      }

      var p = G.mayorID;
      var activePlayers = { value: {} };
      activePlayers.value[p] = 'phaseChosePriest';
      ctx.events.setActivePlayers(activePlayers);

      return G;
    },
    moves: {
      moveChosePriest: {
        move: moveChosePriest,
        client: false,
      },
    },
    endIf: (G, ctx) => {
      if (validateEndIf(G, ctx)) {
        return { next: 'phaseVotePriest' };
      }
    },
    onEnd: (G, ctx) => {
      console.log('ending phaseChosePriest');
      if (!validateOnExit(G, ctx)) {
        console.log('Error 2 !');
      }
      return G;
    },
  }