import { Ctx } from 'boardgame.io';
import { ActivePlayers } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { PicnicGoGame } from 'games/picnicGo/game';

export interface IG {
  counts: number[][];
  shuffleStats: number[][];
  numPlayers: number;
}

const cardTypes = [0, 5, 15, 20, 26, 38, 46, 60, 74, 88, 98, 104, 108];

function countPicnicGoCards(numPlayers: number): number[] {
  let cardCounts = new Array(12).fill(0);
  const client = Client({
    game: PicnicGoGame,
    numPlayers,
  });
  const { G } = client.store.getState();
  G.hands.forEach(({ hand }) => {
    for (let i = 0; i < cardCounts.length; i++) {
      cardCounts[i] += hand.filter((e) => cardTypes[i] <= e && e < cardTypes[i + 1]).length;
    }
  });
  return cardCounts;
}

export function count(g: IG, ctx: Ctx, numPlayers: number) {
  if (g.numPlayers != numPlayers) {
    // reset counts when number of players changes
    g.counts = [];
    g.shuffleStats = [];
    g.numPlayers = numPlayers;
  }
  for (let i = 0; i < 100; i++) {
    g.counts.push(countPicnicGoCards(numPlayers));
  }
}

export function shuffleStatistics(g: IG, ctx: Ctx) {
  const N = 100;
  const nCards = [20, 27, 32, 35][g.numPlayers - 2];
  for (let n = 0; n < N; n++) {
    let deck = new Array(108).fill(0).map((_, i) => i);
    deck = ctx.random.Shuffle(deck).slice(-nCards);
    let cardCounts = new Array(12).fill(0);
    for (let i = 0; i < cardCounts.length; i++) {
      cardCounts[i] += deck.filter((e) => cardTypes[i] <= e && e < cardTypes[i + 1]).length;
    }
    g.shuffleStats.push(cardCounts);
  }
}

export const PicnicGoTGame = {
  name: 'picnicGoT',
  setup: () => {
    return {
      counts: [],
      shuffleStats: [],
      numPlayers: 4,
    };
  },

  phases: {
    play: {
      start: true,
      moves: { count, shuffleStatistics },
      turn: { activePlayers: ActivePlayers.ALL },
    },
  },
};
