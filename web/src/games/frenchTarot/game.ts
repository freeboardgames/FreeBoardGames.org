import { Ctx, Game } from 'boardgame.io';

import { Phases, Stages, IG, DefaultIG, IPlayer, DefaultIPlayer, ICard, CardColor, ITrick } from './types';
import * as util from './util/misc';
import * as u_poignee from './util/poignee';
import * as u_summary from './util/summary';
import { Moves } from './moves';

/*
TODO before publishing:
- add short game description in own words
- translations
*/
export const FrenchTarotGame: Game<IG> = {
  name: 'frenchTarot',

  setup: (ctx: Ctx): IG => {
    const game = { ...DefaultIG };
    game.players = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
      ...DefaultIPlayer,
      id: i.toString(),
      isDealer: i == 0,
    }));
    game.trick = { cards: [], leader: game.players[1] };
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
      resolvedTricks: G.resolvedTricks.map((T, i) =>
        i > 0 && i == G.resolvedTricks.length - 1
          ? { ...T, winner: stripSecrets(T.winner), leader: stripSecrets(T.leader) }
          : dummyTrick,
      ),
    };
  },

  phases: {
    dealing: {
      start: true,
      next: Phases.bidding,

      // this phase doesn't have any user interaction, but ends immediately
      endIf: () => true,

      onEnd: (G: IG, ctx: Ctx) => {
        const handSize = util.handSize(ctx.numPlayers);
        const dealerId = G.players.findIndex((P) => P.isDealer);
        const leader = G.players[util.mod(dealerId + 1, ctx.numPlayers)];
        G.deck = getSortedDeck();
        G.deck = ctx.random.Shuffle(G.deck);
        G.players.forEach((P, i) => {
          P.bid = -1;
          P.isTaker = false;
          P.isReady = true;
          P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
        });
        G.takerId = '';
        G.calledCard = null;
        G.calledTakerId = null;
        G.kitty = G.deck.slice(-util.kittySize(ctx.numPlayers)).sort(cmpCards);
        G.kittyRevealed = false;
        G.announcedSlam = false;
        G.poignee = 0;
        G.trick = { cards: [], leader: leader };
      },
    },

    bidding: {
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
            } while (G.players[i].bid == 0);
            return i;
          },
        },
      },

      moves: {
        MakeBid: Moves.MakeBid,
      },

      endIf: (G: IG) => {
        if (G.players.some((P) => P.bid == 4)) {
          return { next: Phases.calling };
        }
        if (G.players.some((P) => P.bid == -1)) return;
        if (G.players.every((P) => P.bid == 0)) {
          return { next: Phases.dealing };
        } else if (G.players.filter((P) => P.bid > 0).length == 1) {
          return { next: Phases.calling };
        }
      },

      onEnd: (G: IG, ctx: Ctx) => {
        var taker: IPlayer;
        var highestBid: number = 0;
        G.players.forEach((P) => {
          if (P.bid > highestBid) {
            highestBid = P.bid;
            taker = P;
          }
          P.bid = -1;
        });
        if (highestBid == 0) {
          const dealerPos = G.players.findIndex((P) => P.isDealer);
          G.players[dealerPos].isDealer = false;
          G.players[util.mod(dealerPos + 1, ctx.numPlayers)].isDealer = true;
          return;
        }
        G.takerId = taker.id;
        G.contract = highestBid;
        taker.isTaker = true;
      },
    },

    calling: {
      next: Phases.discard,
      turn: {
        moveLimit: 1,
        order: {
          first: (G) => +G.takerId,
          next: (G) => +G.takerId,
        },
      },

      moves: {
        Call: Moves.Call,
      },

      endIf: (G, ctx) => ctx.numPlayers < 5 || !!G.calledCard,

      onEnd: (G: IG) => {
        if (G.calledCard) {
          G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
        }
        const taker = G.players.find((P) => P.isTaker);
        if (G.contract < 3) {
          taker.discardSelection = [];
          taker.hand = taker.hand.concat(G.kitty).sort(cmpCards);
          G.kittyRevealed = true;
        } else if (G.contract == 3) {
          G.resolvedTricks.push({
            cards: G.kitty.splice(0, G.kitty.length),
            winner: taker,
          });
        } else if (G.contract == 4) {
          G.resolvedTricks.push({
            cards: G.kitty.splice(0, G.kitty.length),
            winner: G.players.find((P) => !P.isTaker),
          });
        }
      },
    },

    discard: {
      next: Phases.announce_slam,
      turn: {
        moveLimit: 1,
        order: {
          first: (G) => +G.takerId,
          next: (G) => +G.takerId,
        },
      },

      moves: {
        SelectCards: Moves.SelectCards,
        Discard: Moves.Discard,
      },

      endIf: (G) => G.resolvedTricks.length > 0,

      onEnd: (G: IG) => {
        const taker = G.players[+G.takerId];
        delete taker.discardSelection;
        taker.isReady = false;
        G.kittyRevealed = false;
        G.kitty = [];
      },
    },

    announce_slam: {
      next: Phases.placement,
      turn: {
        moveLimit: 1,
        order: {
          first: (G) => +G.takerId,
          next: (G) => +G.takerId,
        },
      },
      moves: { AnnounceSlam: Moves.AnnounceSlam },
      endIf: (G) => G.players[+G.takerId].isReady,
    },

    placement: {
      turn: {
        onBegin: (G: IG, ctx: Ctx) => {
          const hand = util.getPlayerById(G, ctx.currentPlayer).hand;
          const num_players = ctx.numPlayers;
          if (G.resolvedTricks.length == 1 && u_poignee.maxPoigneeLevel(hand, num_players) > 0) {
            u_poignee.preselectPoignee(G, ctx);
            ctx.events.setActivePlayers({ currentPlayer: Stages.declare_poignee });
          } else {
            ctx.events.setActivePlayers({
              currentPlayer: Stages.place_card,
              moveLimit: 1,
            });
          }
        },
        stages: {
          declare_poignee: {
            next: Stages.place_card,
            moves: {
              SelectCards: Moves.SelectCards,
              DeclarePoignee: Moves.DeclarePoignee,
            },
          },
          place_card: { moves: { SelectCards: Moves.SelectCards } },
        },
        order: {
          first: (G) => +G.trick.leader.id,
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
        },
      },

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
      next: Phases.dealing,
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
      return T.winner.id == G.takerId || T.winner.id == G.calledTakerId;
    });
  const excuseLeads = G.trick.cards[0].color == CardColor.Excuse;
  const winnerId = isAlmostSlam && excuseLeads ? G.trick.leader.id : getTrickWinnerId(G.trick);
  G.trick.winner = util.getPlayerById(G, winnerId);
  G.resolvedTricks.push(G.trick);
  G.trick = { cards: [], leader: G.trick.winner };
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
  const leaderId = +T.leader.id;
  const max_trump = Math.max(...T.cards.map((C) => (C.color == CardColor.Trumps ? C.value : 0)));
  if (max_trump > 0) {
    return util
      .mod(leaderId + T.cards.findIndex((C) => C.color == CardColor.Trumps && C.value == max_trump), T.cards.length)
      .toString();
  }
  var lead_color = T.cards[0].color;
  if (lead_color == CardColor.Excuse) {
    lead_color = T.cards[1].color;
  }
  const max_value = Math.max(...T.cards.map((C) => (C.color == lead_color ? C.value : 0)));
  return util
    .mod(leaderId + T.cards.findIndex((C) => C.color == lead_color && C.value == max_value), T.cards.length)
    .toString();
}

export function getSortedDeck(): ICard[] {
  var deck: ICard[] = [{ color: CardColor.Excuse, value: 0 }];
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

export function cmpCards(a: ICard, b: ICard): number {
  return (a.color - b.color) * 100 + (a.value - b.value);
}
