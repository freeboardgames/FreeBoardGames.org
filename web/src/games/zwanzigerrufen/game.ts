import { Ctx, Game } from 'boardgame.io';
import { ITrick, CardColor, ICard } from 'gamesShared/definitions/cards';

import { Phases, Stages, Contract, IG, DefaultIG, IPlayer, DefaultIPlayer, DefaultIAnnouncements } from './types';
import * as util from './util/misc';
import * as u_summary from './util/summary';
import { Moves } from './moves';

export const ZwanzigerrufenGame: Game<IG> = {
  name: 'zwanzigerrufen',

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
    const dummyCard: ICard = { color: CardColor.Diamonds, value: 14 };
    const dummyTrick: ITrick = { cards: [] };
    const takersRevealed = G.players.filter((P) => P.isTaker).length;
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
      partnerId: G.partnerId == playerID || takersRevealed == 2 ? G.partnerId : null,
      resolvedTricks: G.resolvedTricks.map((T, i) => (i == G.resolvedTricks.length - 1 ? T : dummyTrick)),
    };
  },

  phases: {
    bidding: {
      start: true,
      next: Phases.announce,

      onBegin: (G: IG, ctx: Ctx) => {
        const handSize = 10;
        const dealerId = G.players.findIndex((P) => P.isDealer);
        const leader = G.players[util.mod(dealerId + 1, 4)];
        let deal = true;
        while (deal) {
          Object.assign(G, {
            ...DefaultIG,
            players: G.players,
            deck: ctx.random.Shuffle(getSortedDeck()),
            announcementsRe: { ...DefaultIAnnouncements },
            announcementsContra: { ...DefaultIAnnouncements },
            trick: { cards: [], leaderId: leader.id },
            roundSummaries: G.roundSummaries,
          });
          G.players.forEach((P, i) => {
            P.bid = Contract.None;
            P.isTaker = false;
            P.isReady = true;
            P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(util.cmpCards);
          });
          deal = G.players.some((P) => {
            const trumps = P.hand.filter(util.isTrump);
            return trumps.length == 0 || (trumps.length == 1 && util.isTrull(trumps[0]));
          });
        }
      },

      turn: {
        moveLimit: 1,
        order: {
          first: (G: IG, ctx: Ctx) => {
            const dealerPos = G.players.findIndex((P) => P.isDealer);
            return util.mod(dealerPos + 1, ctx.playOrder.length);
          },
          next: (G: IG, ctx: Ctx) => {
            let i = ctx.playOrderPos;
            do {
              i = util.mod(i + 1, ctx.playOrder.length);
            } while (G.players[i].bid == Contract.Pass);
            return i;
          },
        },
      },

      moves: {
        MakeBid: Moves.MakeBid,
      },

      endIf: (G: IG) => {
        if (G.players[0].hand.length == 0) return;
        if (G.players.some((P) => P.bid == Contract.Solo)) {
          return true;
        }
        if (G.players.some((P) => P.bid == Contract.None)) return;
        if (G.players.filter((P) => P.bid > Contract.Pass).length == 1) {
          return true;
        }
      },

      onEnd: (G) => {
        let taker: IPlayer;
        G.players.forEach((P) => {
          if (P.bid > G.contract) {
            G.contract = P.bid;
            taker = P;
          }
          P.bid = Contract.None;
        });
        G.takerId = taker.id;
        taker.isTaker = true;
        if (G.contract == Contract.Normal) {
          G.partnerId = G.players.find((P) => {
            return P.hand.some((C) => C.color == G.calledCard.color && C.value == G.calledCard.value);
          }).id;
        } else {
          G.calledCard = null;
        }
      },
    },

    announce: {
      next: Phases.placement,

      turn: {
        moveLimit: 1,
        order: {
          first: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
        },
      },

      moves: {
        Announce: Moves.Announce,
      },

      endIf: (G) =>
        G.players.every((P) => P.bid == Contract.Pass) ||
        [G.announcementsRe.Valat, G.announcementsContra.Valat].includes(16),

      onEnd: (G) => {
        G.players.forEach((P) => {
          P.bid = Contract.None;
        });
      },
    },

    placement: {
      turn: {
        moveLimit: 1,
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
        activePlayers: { all: Stages.get_ready, moveLimit: 1 },
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
  const winnerId = getTrickWinnerId(G.contract, G.trick);
  const winner = util.getPlayerById(G, winnerId);
  G.trick.winnerId = winnerId;
  G.resolvedTricks.push(G.trick);
  G.trick = { cards: [], leaderId: winner.id };
  return G.players.every((P) => P.hand.length == 0);
}

export function getTrickWinnerId(contract: Contract, T: ITrick): string {
  const leaderId = +T.leaderId;
  let is_trump = T.cards.map(util.isTrump);
  if (contract == Contract.SoloSuit && !is_trump[0]) {
    is_trump = T.cards.map(() => false);
  }
  let ranks = T.cards.map((C) => (C.color == CardColor.Excuse ? 22 : C.value));
  if (is_trump.some((v) => v)) {
    const fairytalewinner = isFairyTaleTrick(T);
    if (fairytalewinner >= 0) {
      return util.mod(leaderId + fairytalewinner, T.cards.length).toString();
    }
    ranks = ranks.map((R, i) => (is_trump[i] ? R : -1));
  } else {
    ranks = ranks.map((R, i) => (T.cards[i].color == T.cards[0].color ? R : -1));
  }
  const max_rank = Math.max(...ranks);
  return util.mod(leaderId + ranks.findIndex((R) => R == max_rank), T.cards.length).toString();
}

export function isFairyTaleTrick(T: ITrick): number {
  // returns the position of the player with trump 1 (the trick winner)
  if (T.cards.filter(util.isTrull).length < 3) return -1;
  return T.cards.findIndex((C) => C.color == CardColor.Trumps && C.value == 1);
}

export function getSortedDeck(): ICard[] {
  let deck: ICard[] = [{ color: CardColor.Excuse, value: 0 }];
  for (let col of ['Hearts', 'Diamonds', 'Spades', 'Clubs']) {
    deck = deck.concat(
      Array(5)
        .fill(0)
        .map((_, i) => i + 10)
        .map((i) => ({ color: CardColor[col], value: i })),
    );
  }
  return deck.concat(
    Array(21)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i != 2 && i != 3)
      .map((i) => ({ color: CardColor.Trumps, value: i })),
  );
}
