import { Ctx, Game } from 'boardgame.io';
import { CardColor, ICard, ITrick } from 'gamesShared/definitions/cards';

import { Phases, Stages, Contract, IG, DefaultIG, IPlayer, DefaultIPlayer } from './types';
import * as util from './util/misc';
import * as u_discard from './util/discard';
import * as u_poignee from './util/poignee';
import * as u_summary from './util/summary';
import { Moves } from './moves';

export const FrenchTarotGame: Game<IG> = {
  name: 'frenchTarot',

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
    const dummyCard: ICard = { color: CardColor.Excuse, value: 0 };
    const dummyTrick: ITrick = { cards: [] };
    const stripSecrets: (IPlayer) => IPlayer = (P) => {
      if (P.id == playerID) return P;
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
      kitty: G.kittyRevealed ? G.kitty : G.kitty.map(() => dummyCard),
      calledTakerId: null,
      resolvedTricks: G.resolvedTricks.map((T, i) => (i > 0 && i == G.resolvedTricks.length - 1 ? T : dummyTrick)),
    };
  },

  phases: {
    bidding: {
      start: true,

      onBegin: (G: IG, ctx: Ctx) => {
        const handSize = util.handSize(ctx.numPlayers);
        const dealerId = G.players.findIndex((P) => P.isDealer);
        const leader = G.players[util.mod(dealerId + 1, ctx.numPlayers)];
        G.deck = getSortedDeck();
        G.deck = ctx.random.Shuffle(G.deck);
        G.players.forEach((P, i) => {
          P.bid = Contract.None;
          P.isTaker = false;
          P.isReady = true;
          P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(util.cmpCards);
        });
        G.takerId = '';
        G.calledCard = null;
        G.calledTakerId = null;
        G.kitty = G.deck.slice(-util.kittySize(ctx.numPlayers)).sort(util.cmpCards);
        G.kittyRevealed = false;
        G.announcedSlam = false;
        G.poignee = 0;
        G.trick = { cards: [], leaderId: leader.id };
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
        if (G.players.some((P) => P.bid == Contract.GuardAgainst)) {
          return { next: Phases.discard };
        }
        if (G.players.some((P) => P.bid == Contract.None)) return;
        if (G.players.every((P) => P.bid == Contract.Pass)) {
          return { next: Phases.bidding };
        } else if (G.players.filter((P) => P.bid > Contract.Pass).length == 1) {
          return { next: Phases.discard };
        }
      },

      onEnd: (G: IG, ctx: Ctx) => {
        let taker: IPlayer;
        let highestBid = Contract.Pass;
        G.players.forEach((P) => {
          if (P.bid > highestBid) {
            highestBid = P.bid;
            taker = P;
          }
          P.bid = Contract.None;
        });
        if (highestBid == Contract.Pass) {
          const dealerPos = G.players.findIndex((P) => P.isDealer);
          G.players[dealerPos].isDealer = false;
          G.players[util.mod(dealerPos + 1, ctx.numPlayers)].isDealer = true;
          G.kittyPrev = G.kitty;
          return;
        }
        G.kittyPrev = [];
        G.takerId = taker.id;
        G.contract = highestBid;
        taker.isTaker = true;
      },
    },

    discard: {
      next: Phases.placement,
      turn: {
        onBegin: (G: IG, ctx: Ctx) => {
          if (ctx.numPlayers == 5) {
            ctx.events.setActivePlayers({ currentPlayer: Stages.call_card });
          } else if (!u_discard.prepareDiscard(G)) {
            ctx.events.setActivePlayers({ currentPlayer: Stages.announce_slam });
          }
        },
        order: {
          first: (G) => +G.takerId,
          next: (G) => +G.takerId,
        },
        stages: {
          call_card: { moves: { Call: Moves.Call } },
          announce_slam: { moves: { AnnounceSlam: Moves.AnnounceSlam } },
        },
      },

      moves: {
        SelectCards: Moves.SelectCards,
        Discard: Moves.Discard,
      },

      onEnd: (G: IG) => {
        if (G.calledCard) {
          G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
        }
      },
    },

    placement: {
      turn: {
        onBegin: (G: IG, ctx: Ctx) => {
          const hand = util.getPlayerById(G, ctx.currentPlayer).hand;
          const num_players = ctx.numPlayers;
          if (G.resolvedTricks.length == 1 && u_poignee.maxPoigneeLevel(hand, num_players) > 0) {
            u_poignee.preselectPoignee(G, ctx);
            ctx.events.setActivePlayers({ currentPlayer: Stages.declare_poignee });
          }
        },
        stages: {
          declare_poignee: {
            moves: {
              SelectCards: Moves.SelectCards,
              DeclarePoignee: Moves.DeclarePoignee,
            },
          },
        },
        order: {
          first: (G) => +G.trick.leaderId,
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
        },
      },

      moves: { SelectCards: Moves.SelectCards },

      endIf: (G: IG, ctx: Ctx) => {
        if (G.trick.cards.length != ctx.numPlayers) return;
        if (G.players.every((P) => P.hand.length == 0)) {
          return { next: Phases.round_end };
        } else {
          return { next: Phases.placement };
        }
      },

      onEnd: (G: IG) => {
        if (resolveTrick(G)) {
          const roundSummary = u_summary.getRoundSummary(G);
          G.roundSummaries.push(roundSummary);
          G.players.forEach((P, i) => {
            P.score += roundSummary.scoring[i];
            P.isReady = false;
          });
          G.kitty = G.resolvedTricks[0].cards;
          G.kittyRevealed = true;
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
      onEnd: (G: IG, ctx: Ctx) => {
        G.kitty = [];
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
  const isRoundOver = G.players.every((P) => P.hand.length == 0);
  const isAlmostSlam =
    isRoundOver &&
    G.resolvedTricks.every((T) => {
      return T.winnerId == G.takerId || T.winnerId == G.calledTakerId;
    });
  const excuseLeads = G.trick.cards[0].color == CardColor.Excuse;
  G.trick.winnerId = isAlmostSlam && excuseLeads ? G.trick.leaderId : getTrickWinnerId(G.trick);
  G.resolvedTricks.push(G.trick);
  G.trick = { cards: [], leaderId: G.trick.winnerId };
  return isRoundOver;
}

export function getCalledTakerId(players: IPlayer[], card: ICard): string {
  const takerId = players.find((P) => P.isTaker).id;
  const calledTaker = players.find((P) => {
    return P.hand.some((C) => C.color == card.color && C.value == card.value);
  });
  return calledTaker ? calledTaker.id : takerId;
}

export function getTrickWinnerId(T: ITrick): string {
  const leaderId = +T.leaderId;
  const max_trump = Math.max(...T.cards.map((C) => (C.color == CardColor.Trumps ? C.value : 0)));
  if (max_trump > 0) {
    return util
      .mod(leaderId + T.cards.findIndex((C) => C.color == CardColor.Trumps && C.value == max_trump), T.cards.length)
      .toString();
  }
  let lead_color = T.cards[0].color;
  if (lead_color == CardColor.Excuse) {
    lead_color = T.cards[1].color;
  }
  const max_value = Math.max(...T.cards.map((C) => (C.color == lead_color ? C.value : 0)));
  return util
    .mod(leaderId + T.cards.findIndex((C) => C.color == lead_color && C.value == max_value), T.cards.length)
    .toString();
}

export function getSortedDeck(): ICard[] {
  let deck: ICard[] = [{ color: CardColor.Excuse, value: 0 }];
  for (let col of ['Hearts', 'Diamonds', 'Spades', 'Clubs']) {
    deck = deck.concat(
      Array(14)
        .fill(0)
        .map((_, i) => {
          return { color: CardColor[col], value: i + 1 };
        }),
    );
  }
  deck = deck.concat(
    Array(21)
      .fill(0)
      .map((_, i) => {
        return { color: CardColor.Trumps, value: i + 1 };
      }),
  );
  return deck;
}
