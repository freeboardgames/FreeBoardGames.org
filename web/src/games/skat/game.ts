import { Ctx, Game } from 'boardgame.io';
import { ITrick, Suit, ICard } from 'gamesShared/definitions/cards';

import { Phases, Stages, Announcement, Contract, IG, DefaultIG, IPlayer, DefaultIPlayer } from './types';
import * as util from './util/misc';
import * as u_summary from './util/summary';
import { Moves } from './moves';

export const SkatGame: Game<IG> = {
  name: 'skat',

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
      if (P.id == playerID || (P.isTaker && G.announcement == Announcement.Ouvert)) return P;
      return <IPlayer>{
        ...P,
        discardSelection: null,
        hand: P.hand.map(() => dummyCard),
      };
    };
    return {
      ...G,
      players: G.players.map(stripSecrets),
      deck: G.deck.map(() => dummyCard),
      kitty: G.kittyRevealed || (playerID == G.takerId && G.hand === false) ? G.kitty : G.kitty.map(() => dummyCard),
      resolvedTricks: G.resolvedTricks.map((T, i) => (i > 0 && i == G.resolvedTricks.length - 1 ? T : dummyTrick)),
    };
  },

  phases: {
    bidding: {
      start: true,

      onBegin: (G: IG, ctx: Ctx) => {
        const handSize = 10;
        const dealerId = G.players.findIndex((P) => P.isDealer);
        const leader = G.players[util.mod(dealerId + 1, ctx.numPlayers)];
        const cmpCards = util.get_cmpCards(Contract.None, null);
        Object.assign(G, {
          ...DefaultIG,
          players: G.players,
          kittyPrev: G.kittyPrev,
          deck: ctx.random.Shuffle(getSortedDeck()),
          holderId: util.mod(dealerId + 1, G.players.length).toString(),
          bidderId: util.mod(dealerId + 2, G.players.length).toString(),
          trick: { cards: [], leaderId: leader.id },
          roundSummaries: G.roundSummaries,
        });
        G.players.forEach((P, i) => {
          P.bid = 1;
          P.isTaker = false;
          P.isReady = true;
          P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
        });
        G.kitty = G.deck.slice(-2).sort(cmpCards);
      },

      turn: {
        minMoves: 1,
        maxMoves: 1,
        order: {
          first: (G: IG) => +G.bidderId,
          next: (G: IG, ctx: Ctx) => (ctx.playOrderPos != +G.bidderId ? +G.bidderId : +G.holderId),
        },
      },

      moves: {
        MakeBid: Moves.MakeBid,
      },

      endIf: (G: IG) => {
        if (G.players[0].hand.length == 0) return;
        if (G.players.some((P) => P.bid == 1)) return;
        const n_pass = G.players.filter((P) => P.bid == 0).length;
        if (n_pass == 1) return;
        return { next: n_pass == 3 ? Phases.bidding : Phases.discard };
      },

      onEnd: (G: IG, ctx: Ctx) => {
        if (G.players.every((P) => P.bid <= 1)) {
          const dealer = G.players.find((P) => P.isDealer);
          dealer.isDealer = false;
          G.players[util.mod(+dealer.id + 1, ctx.numPlayers)].isDealer = true;
          G.kittyPrev = G.kitty;
          G.players.forEach((P) => {
            P.hand = [];
          });
          return;
        }
        const taker = G.players.find((P) => P.bid > 1);
        G.kittyPrev = [];
        G.bidderId = null;
        G.holderId = null;
        G.takerId = taker.id;
        taker.isTaker = true;
      },
    },

    discard: {
      next: Phases.placement,
      turn: {
        activePlayers: { currentPlayer: Stages.declare_hand },
        stages: {
          declare_hand: { moves: { DeclareHand: Moves.DeclareHand } },
          select_contract: { moves: { SelectContract: Moves.SelectContract } },
          select_trump: { moves: { SelectTrumpSuit: Moves.SelectTrumpSuit } },
          announce: { moves: { Announce: Moves.Announce } },
        },
        order: {
          first: (G) => +G.takerId,
          next: (G) => +G.takerId,
        },
      },

      moves: {
        SelectCards: Moves.SelectCards,
        Discard: Moves.Discard,
      },

      endIf: (G) => G.resolvedTricks.length > 0 && G.announcement !== null,
    },

    placement: {
      turn: {
        minMoves: 1,
        maxMoves: 1,
        order: {
          first: (G) => +G.trick.leaderId,
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
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

      endIf: (G: IG, ctx: Ctx) => {
        return G.trick.cards.length == ctx.numPlayers;
      },

      onEnd: (G: IG) => {
        if (resolveTrick(G)) {
          const roundSummary = u_summary.getRoundSummary(G);
          G.roundSummaries.push(roundSummary);
          G.players.forEach((P, i) => {
            P.score += roundSummary.scoring[i];
            P.isReady = false;
          });
          G.kitty = G.deck.slice(-2);
          G.kittyRevealed = true;
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
      onEnd: (G: IG, ctx: Ctx) => {
        G.kitty = [];
        G.kittyPrev = [];
        G.resolvedTricks = [];
        const dealerPos = G.players.findIndex((P) => P.isDealer);
        const newDealerPos = util.mod(dealerPos + 1, ctx.numPlayers);
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
  const winnerId = getTrickWinnerId(G.contract, G.trumpSuit, G.trick);
  const winner = util.getPlayerById(G, winnerId);
  G.trick.winnerId = winner.id;
  G.resolvedTricks.push(G.trick);
  G.trick = { cards: [], leaderId: winner.id };
  if (G.contract == Contract.Null && winner.isTaker) {
    return true;
  }
  return G.players.every((P) => P.hand.length == 0);
}

export function getTrickWinnerId(contract: Contract, trumpSuit: Suit, T: ITrick): string {
  const leaderId = +T.leaderId;
  let ranks = T.cards.map((C) => util.cardRank(contract, trumpSuit, C));
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
      Array(8)
        .fill(0)
        .map((_, i) => {
          return { suit: Suit[suit], value: i + 7 };
        }),
    );
  }
  return deck;
}
