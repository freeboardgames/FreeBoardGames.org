import { moveChosePriest } from './moves';

export let phaseChosePriest = {
  start: true,
  onBegin: (G, ctx) => {
    console.log('staring phaseChosePriest');

    let p = G.mayorID;
    let activePlayers = { value: {} };
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
    if (G.voting) {
      return { next: 'phaseVotePriest' };
    }
  },
  onEnd: (G, ctx) => {
    console.log('ending phaseChosePriest');
    return G;
  },
};
