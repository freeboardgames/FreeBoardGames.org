import { Ctx } from 'boardgame.io';
import { IG } from './types';
import { defaultDeck } from './cards';

export function setupRound(g: IG, ctx: Ctx): IG {
  let deck = ctx.random.Shuffle(defaultDeck);

  let hands = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
    currentOwner: i,
    hand: new Array(12 - ctx.numPlayers).fill(0).map(() => {
      const card = deck.pop();
      return card;
    }),
  }));

  for (let i = 0; i < ctx.numPlayers; i++) {
    g.players[i].playedCards = [];
  }

  return {
    deck,
    players: g.players,
    hands,
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
      hands: [{ currentOwner: 0, hand: [] }],
    };

    return setupRound(baseState, ctx);
  },

  moves: {},

  flow: {
    movesPerTurn: 1,
  },
};
