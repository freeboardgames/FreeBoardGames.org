import { Ctx } from 'boardgame.io';
import { ActivePlayers } from 'boardgame.io/core';
import { IG } from './types';
import { defaultDeck, cardDefinitions } from './cards';

export function setupRound(g: IG, ctx: Ctx): IG {
  let dessertsPlayed = 0;

  for (let i = 0; i < ctx.numPlayers; i++) {
    g.players[i].playedCards = [];
    g.players[i].chipsCount = 0;
    g.players[i].unusedMayo = 0;
    g.players[i].unusedForks = 0;
    dessertsPlayed += g.players[i].dessertsCount;
  }

  let unshuffledDeck = defaultDeck;
  for (let i = 0; i < dessertsPlayed; i++) {
    unshuffledDeck.splice(
      unshuffledDeck.findIndex((e) => e === 'cake'),
      1,
    );
  }

  let deck = ctx.random.Shuffle(unshuffledDeck);

  let hands = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
    currentOwner: i,
    hand: new Array(12 - ctx.numPlayers).fill(0).map(() => {
      const card = deck.pop();
      return card;
    }),
    selected: null,
  }));

  let round = g.round + 1;

  return {
    deck,
    players: g.players,
    hands,
    round,
  };
}

export const PicnicGoGame = {
  name: 'picnicGo',

  setup: (ctx) => {
    const baseState = {
      deck: defaultDeck,
      players: new Array(ctx.numPlayers).fill({
        playedCards: [],
        score: 0,
        dessertsCount: 0,
        chipsCount: 0,
        unusedMayo: 0,
        unusedForks: 0,
      }),
      hands: [{ currentOwner: 0, hand: [], selected: null }],
      round: 0,
    };

    return setupRound(baseState, ctx);
  },

  phases: {
    round: {
      moves: {
        selectCard: (g, ctx, index) => {
          g.hands[ctx.playerID].selected = index;
          return g;
        },
      },
      next: 'round',
      start: true,
      turn: {
        activePlayers: ActivePlayers.ALL_ONCE,
        onMove: (_, ctx) => {
          if (ctx.activePlayers === null) {
            ctx.events.endPhase();
          }
        },
      },
      onEnd: (g, ctx) => {
        for (let i = 0; i < ctx.numPlayers; i++) {
          const h = g.hands[i];
          g.players[h.currentOwner].playedCards.push(h.hand[h.selected]);

          const cdef = cardDefinitions.find((e) => e.id === h.hand[h.selected]);
          g.players[h.currentOwner] = cdef.scoreFunc(g.players[h.currentOwner]);

          g.hands[i].hand.splice(h.selected, 1);
          g.hands[i].selected = null;
          g.hands[i].currentOwner = (h.currentOwner + 1) % ctx.numPlayers;
        }
      },
    },
  },
};
