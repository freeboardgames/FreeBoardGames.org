import { Ctx, Game } from 'boardgame.io';
import { ITrick, Suit, ICard } from 'gamesShared/definitions/cards';

import { Phases, Stages, IG, DefaultIG, IPlayer, DefaultIPlayer } from './types';
import * as util from './util/misc';
import * as u_summary from './util/summary';
import { Moves } from './moves';

export const BridgeGame: Game<IG> = {
  name: 'bridge',

  setup: (): IG => {
    const game = { ...DefaultIG };
    game.players = new Array(4).fill(0).map((_, i) => ({
      ...DefaultIPlayer,
      id: i.toString(),
      isDealer: i == 0,
    }));
    game.trick = { cards: [], leaderId: game.players[1].id };
    return game;
  },

  playerView: (G: IG, ctx: Ctx, playerID: string): IG => {
    if (ctx.gameover || playerID === null || ctx.phase == Phases.round_end) return G;
    const dummyCard: ICard = { suit: Suit.Clubs, value: 1 };
    const dummyTrick: ITrick = { cards: [] };
    const openingDone = G.resolvedTricks.length > 0 || G.trick.cards.length > 0;
    const showPrevTrick = G.trick.cards.length == 0;
    const stripSecrets: (IPlayer) => IPlayer = (P) => {
      if (P.id == playerID) return P;
      if (openingDone && P.id == G.partnerId) return P;
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
        showPrevTrick && i == G.resolvedTricks.length - 1 ? T : dummyTrick,
      ),
    };
  },

  phases: {
    bidding: {
      start: true,

      onBegin: (G: IG, ctx: Ctx) => {
        const handSize = 13;
        Object.assign(G, {
          ...DefaultIG,
          players: G.players,
          deck: ctx.random.Shuffle(getSortedDeck()),
          trick: { cards: [], leaderId: null },
          roundSummaries: G.roundSummaries,
        });
        const cmpCards = util.get_cmpCards(null);
        G.players.forEach((P, i) => {
          P.bids = [];
          P.isDeclarer = false;
          P.isReady = true;
          P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
        });
      },

      turn: {
        minMoves: 1,
        maxMoves: 1,
        order: {
          first: (G: IG) => G.players.findIndex((P) => P.isDealer),
          next: (G: IG, ctx: Ctx) => {
            return util.mod(ctx.playOrderPos + 1, ctx.playOrder.length);
          },
        },
      },

      moves: {
        MakeBid: Moves.MakeBid,
      },

      endIf: (G: IG) => {
        if (G.players[0].hand.length == 0) return;
        if (G.players.some((P) => P.bids.length == 0)) return;
        if (G.passCount == 3) {
          return { next: Phases.placement };
        } else if (G.passCount == 4) {
          return { next: Phases.bidding };
        }
      },

      onEnd: (G: IG, ctx: Ctx) => {
        if (G.contract === null) {
          const dealerPos = G.players.findIndex((P) => P.isDealer);
          G.players[dealerPos].isDealer = false;
          G.players[util.mod(dealerPos + 1, ctx.numPlayers)].isDealer = true;
          return;
        }
        let declarer = util.getPlayerById(G, G.declarerId);
        declarer.isDeclarer = true;
        let partner = util.getPlayerById(G, G.partnerId);
        partner.isDeclarer = true;
        let leader = G.players[util.mod(+G.partnerId - 1, ctx.numPlayers)];
        G.trick.leaderId = leader.id;
        const cmpCards = util.get_cmpCards(G.contract.trumps);
        G.players.forEach((P) => {
          P.hand = P.hand.sort(cmpCards);
        });
      },
    },

    placement: {
      turn: {
        maxMoves: 1,
        order: {
          first: (G) => +G.trick.leaderId,
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
        },
        stages: { select_dummy_card: { moves: { SelectDummyCards: Moves.SelectDummyCards } } },
        onBegin: (G, ctx) => {
          if (G.partnerId == ctx.playOrderPos.toString()) {
            let activePlayers = {
              value: {},
              minMoves: 1,
              maxMoves: 1,
            };
            activePlayers.value[G.declarerId] = Stages.select_dummy_card;
            ctx.events.setActivePlayers(activePlayers);
          }
        },
      },

      moves: {
        SelectCards: Moves.SelectCards,
      },

      next: (G: IG) => {
        if (G.players.some((P) => !P.isReady)) {
          return Phases.round_end;
        }
        return Phases.placement;
      },

      endIf: (G: IG) => G.trick.cards.length == 4,

      onEnd: (G: IG) => {
        if (resolveTrick(G)) {
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
      next: Phases.bidding,
      turn: {
        stages: { get_ready: { moves: { Finish: Moves.Finish } } },
        activePlayers: { all: Stages.get_ready, maxMoves: 1 },
      },
      endIf: (G: IG) => G.players.every((P) => P.isReady),
      onEnd: (G: IG) => {
        G.resolvedTricks = [];
        const dealerPos = G.players.findIndex((P) => P.isDealer);
        const newDealerPos = util.mod(dealerPos + 1, 4);
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
  const winnerId = getTrickWinnerId(G.contract.trumps, G.trick);
  const winner = util.getPlayerById(G, winnerId);
  G.trick.winnerId = winnerId;
  G.resolvedTricks.push(G.trick);
  G.trick = { cards: [], leaderId: winner.id };
  return G.players.every((P) => P.hand.length == 0);
}

export function getTrickWinnerId(trumpSuit: Suit, T: ITrick): string {
  const leaderId = +T.leaderId;
  let is_trump = T.cards.map((C) => C.suit == trumpSuit);
  let ranks = T.cards.map((C) => util.cardRank(trumpSuit, C));
  if (is_trump.some((v) => v)) {
    ranks = ranks.map((R, i) => (is_trump[i] ? R : -1));
  } else {
    ranks = ranks.map((R, i) => (T.cards[i].suit == T.cards[0].suit ? R : -1));
  }
  const max_rank = Math.max(...ranks);
  return util.mod(leaderId + ranks.findIndex((R) => R == max_rank), T.cards.length).toString();
}

export function getSortedDeck(): ICard[] {
  let deck: ICard[] = [];
  for (let suit of ['Hearts', 'Diamonds', 'Spades', 'Clubs']) {
    deck = deck.concat(
      Array(13)
        .fill(0)
        .map((_, i) => i + 2)
        .map((i) => ({ suit: Suit[suit], value: i })),
    );
  }
  return deck;
}
