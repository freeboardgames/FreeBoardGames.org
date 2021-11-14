import { Ctx, Game } from 'boardgame.io';
import { ITrick, Suit, ICard } from 'gamesShared/definitions/cards';

import { Phases, Stages, IG, DefaultIG, IPlayer, DefaultIPlayer } from './types';
import * as util from './util/misc';
import * as u_summary from './util/summary';
import { Moves } from './moves';

export const SixtysixGame: Game<IG> = {
  name: 'sixtysix',

  setup: (ctx: Ctx): IG => {
    const game = { ...DefaultIG };
    game.players = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
      ...DefaultIPlayer,
      id: i.toString(),
      isDealer: i == 0,
    }));
    game.trick = { cards: [], leaderId: game.players[1].id };
    return game;
  },

  playerView: (G: IG, ctx: Ctx, playerID: string): IG => {
    if (ctx.gameover || playerID === null || ctx.phase == Phases.round_end) return G;
    const dummyCard: ICard = { suit: Suit.Diamonds, value: 14 };
    const dummyTrick: ITrick = { cards: [] };
    const stripSecrets: (IPlayer) => IPlayer = (P) => {
      if (P.id == playerID) return P;
      return <IPlayer>{
        ...P,
        hand: P.hand.map(() => dummyCard),
      };
    };
    return {
      ...G,
      players: G.players.map(stripSecrets),
      deck: G.deck.map(() => dummyCard),
      resolvedTricks: G.resolvedTricks.map((T, i) =>
        G.trick.cards.length == 0 && i == G.resolvedTricks.length - 1 ? T : dummyTrick,
      ),
      stock: G.stock.map((C, i) => (i == 0 ? C : dummyCard)),
    };
  },

  phases: {
    dealing: {
      start: true,

      onBegin: (G: IG, ctx: Ctx) => {
        const handSize = 6;
        const dealerId = G.players.findIndex((P) => P.isDealer);
        const leader = G.players[util.mod(dealerId + 1, ctx.numPlayers)];
        Object.assign(G, {
          ...DefaultIG,
          players: G.players,
          deck: ctx.random.Shuffle(getSortedDeck()),
          trick: { cards: [], leaderId: leader.id },
          roundSummaries: G.roundSummaries,
        });
        G.stock = G.deck.slice(-12);
        G.trumpSuit = G.stock[0].suit;
        const cmpCards = util.get_cmpCards(G.trumpSuit);
        G.players.forEach((P, i) => {
          P.isReady = true;
          P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
        });
      },

      endIf: (G) => G.players.every((P) => P.hand.length == 6),

      next: Phases.placement,
    },

    placement: {
      turn: {
        order: {
          first: (G) => +G.trick.leaderId,
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
        },
      },

      moves: {
        GoOut: Moves.GoOut,
        Close: Moves.Close,
        DrawCards: Moves.DrawCards,
        Meld: Moves.Meld,
        SelectCards: Moves.SelectCards,
      },

      next: (G: IG) => (G.players.some((P) => !P.isReady) ? Phases.round_end : Phases.placement),

      endIf: (G: IG, ctx: Ctx) => G.trick.cards.length == ctx.numPlayers || G.out !== null,

      onEnd: (G: IG) => {
        G.exchanged9 = null;
        if (G.out !== null || resolveTrick(G)) {
          const roundSummary = u_summary.getRoundSummary(G);
          G.roundSummaries.push(roundSummary);
          G.players.forEach((P, i) => {
            P.score += roundSummary.scoring[i];
            P.isReady = false;
          });
        }
      },
    },

    round_end: {
      next: Phases.dealing,
      turn: {
        stages: { get_ready: { moves: { Finish: Moves.Finish } } },
        activePlayers: { all: Stages.get_ready, maxMoves: 1 },
      },
      endIf: (G: IG) => G.players.every((P) => P.isReady),
      onEnd: (G: IG) => {
        G.stock = [];
        G.resolvedTricks = [];
        const dealerPos = G.players.findIndex((P) => P.isDealer);
        const roundSummary = G.roundSummaries[G.roundSummaries.length - 1];
        const roundWinner = roundSummary.scoring.find((s) => s > 0);
        const newDealerPos = roundWinner !== undefined ? roundWinner : dealerPos;
        G.players.forEach((P, i) => {
          P.isDealer = i == newDealerPos;
          P.hand = [];
        });
      },
    },
  },
};

export function resolveTrick(G: IG): boolean {
  // returns true if this was the last trick in the game
  const winnerId = getTrickWinnerId(G.trumpSuit, G.trick);
  const winner = util.getPlayerById(G, winnerId);
  G.trick.winnerId = winner.id;
  G.resolvedTricks.push(G.trick);
  G.trick = { cards: [], leaderId: winner.id };
  return G.players.every((P) => P.hand.length == 0);
}

export function getTrickWinnerId(trumpSuit: Suit, T: ITrick): string {
  const leaderId = +T.leaderId;
  let ranks = T.cards.map((C) => util.cardRank(trumpSuit, C));
  if (ranks.every((R) => R < 500)) {
    const lead_suit = T.cards[0].suit;
    ranks = ranks.map((R, i) => (T.cards[i].suit == lead_suit ? R : -1));
  }
  const max_rank = Math.max(...ranks);
  return util.mod(leaderId + ranks.findIndex((R) => R == max_rank), T.cards.length).toString();
}

export function getSortedDeck(): ICard[] {
  let deck: ICard[] = [];
  for (let suit of ['Diamonds', 'Hearts', 'Spades', 'Clubs']) {
    deck = deck.concat(
      Array(6)
        .fill(0)
        .map((_, i) => {
          return { suit: Suit[suit], value: i + 9 };
        }),
    );
  }
  return deck;
}
