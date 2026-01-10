import { moveChosePriest } from './moves';

export const phaseChosePriest = {
  start: true,
  turn: {
    onBegin: (G, ctx) => {
      //- console.log('staring phaseChosePriest');

      const p = G.mayorID;
      const activePlayers = { value: {} };
      activePlayers.value[p] = 'phaseChosePriest';
      ctx.events.setActivePlayers(activePlayers);

      return G;
    },
  },
  moves: {
    moveChosePriest: {
      move: moveChosePriest,
      client: false,
    },
  },
  endIf: (G) => {
    if (G.voting) {
      return { next: 'phaseVotePriest' };
    }
  },
  onEnd: (G) => {
    //- console.log('ending phaseChosePriest');
    return G;
  },
};
