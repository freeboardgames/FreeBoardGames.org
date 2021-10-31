import { Ctx, Game } from 'boardgame.io';
import { Stage } from 'boardgame.io/core';
import { ITrick, CardColor, ICard } from 'gamesShared/definitions/cards';

import { Phases, Stages, Contract, IG, DefaultIG, IPlayer, DefaultIPlayer } from './types';
import * as util from './util/misc';
import * as u_summary from './util/summary';
import { Moves } from './moves';

export const DoppelkopfGame: Game<IG> = {
  name: 'doppelkopf',

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
      takerId: G.takerId == playerID || takersRevealed >= 1 ? G.takerId : null,
      partnerId: G.partnerId == playerID || takersRevealed == 2 ? G.partnerId : null,
      resolvedTricks: G.resolvedTricks.map((T, i) => (i == G.resolvedTricks.length - 1 ? T : dummyTrick)),
    };
  },

  phases: {
    bidding: {
      start: true,
      next: Phases.placement,

      onBegin: (G: IG, ctx: Ctx) => {
        const handSize = 12;
        const dealerId = G.players.findIndex((P) => P.isDealer);
        const leader = G.players[util.mod(dealerId + 1, 4)];
        const cmpCards = util.get_cmpCards(Contract.None, CardColor.Diamonds);
        Object.assign(G, {
          ...DefaultIG,
          players: G.players,
          deck: ctx.random.Shuffle(getSortedDeck()),
          trick: { cards: [], leaderId: leader.id },
          roundSummaries: G.roundSummaries,
        });
        G.players.forEach((P, i) => {
          P.bid = Contract.None;
          P.isTaker = false;
          P.isReady = true;
          P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
        });
      },

      turn: {
        stages: {
          select_trump: { moves: { SelectTrumpSuit: Moves.SelectTrumpSuit } },
        },
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
        return G.contract > Contract.None && G.contract != Contract.SoloTrump;
      },

      onEnd: (G: IG) => {
        G.players.forEach((P) => {
          P.bid = Contract.None;
        });
        if (G.contract == Contract.Normal) {
          const takers = G.players.filter((P) => P.hand.some(util.isOld));
          G.takerId = takers[0].id;
          G.partnerId = takers.length > 1 ? takers[1].id : '';
        }
        if (G.contract < Contract.Solo) {
          G.trumpSuit = CardColor.Diamonds;
        }
        const cmpCards = util.get_cmpCards(G.contract, G.trumpSuit);
        G.players.forEach((P) => {
          P.hand = P.hand.sort(cmpCards);
        });
      },
    },

    placement: {
      turn: {
        activePlayers: { all: Stage.NULL },
        order: {
          first: (G) => +G.trick.leaderId,
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
        },
      },

      moves: {
        SelectCards: Moves.SelectCards,
        Announce: Moves.Announce,
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
  const winnerId = getTrickWinnerId(G.contract, G.trumpSuit, G.trick);
  const winner = util.getPlayerById(G, winnerId);
  G.trick.winnerId = winnerId;
  G.resolvedTricks.push(G.trick);
  if (G.contract == Contract.Marriage) {
    if (G.trick.winnerId != G.takerId) {
      G.contract = Contract.Normal;
      winner.isTaker = true;
      G.partnerId = winner.id;
      G.marriageShift = G.resolvedTricks.length - 1;
    } else if (G.resolvedTricks.length == 3) {
      G.contract = Contract.SoloTrump;
      G.marriageShift = 2;
    }
  }
  G.trick = { cards: [], leaderId: winner.id };
  return G.players.every((P) => P.hand.length == 0);
}

export function getTrickWinnerId(contract: Contract, trumpSuit: CardColor, T: ITrick): string {
  const leaderId = +T.leaderId;
  let ranks = T.cards.map((C) => util.cardRank(contract, trumpSuit, C));
  if (ranks.every((R) => R < 500)) {
    const lead_color = T.cards[0].color;
    ranks = ranks.map((R, i) => (T.cards[i].color == lead_color ? R : -1));
  }
  const max_rank = Math.max(...ranks);
  return util.mod(leaderId + ranks.findIndex((R) => R == max_rank), T.cards.length).toString();
}

export function getSortedDeck(): ICard[] {
  let deck: ICard[] = [];
  for (let col of ['Diamonds', 'Hearts', 'Spades', 'Clubs']) {
    deck = deck.concat(
      Array(6)
        .fill(0)
        .map((_, i) => {
          return { color: CardColor[col], value: i + 9 };
        }),
    );
  }
  return deck.concat(deck);
}
