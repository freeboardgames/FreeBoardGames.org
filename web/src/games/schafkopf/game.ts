import { Ctx, Game } from 'boardgame.io';

import { Phases, Stages, Contract, IG, DefaultIG, IPlayer, DefaultIPlayer, ICard, CardColor, ITrick } from './types';
import * as util from './util/misc';
import * as u_summary from './util/summary';
import { Moves } from './moves';

export const SchafkopfGame: Game<IG> = {
  name: 'schafkopf',

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
    const dummyCard: ICard = { color: CardColor.Schell, value: 14 };
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
      kitty: G.kittyRevealed || playerID == G.takerId ? G.kitty : G.kitty.map(() => dummyCard),
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
        const kittySize = util.kittySize(ctx.numPlayers);
        const dealerId = G.players.findIndex((P) => P.isDealer);
        const leader = G.players[util.mod(dealerId + 1, ctx.numPlayers)];
        const cmpCards = get_cmpCards(Contract.None, CardColor.Herz);
        G.deck = getSortedDeck();
        G.deck = ctx.random.Shuffle(G.deck);
        G.players.forEach((P, i) => {
          P.bid = Contract.None;
          P.isTaker = false;
          P.isReady = true;
          P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
        });
        G.takerId = '';
        G.calledCard = null;
        G.calledTakerId = null;
        G.trumpSuit = CardColor.Herz;
        G.contract = Contract.None;
        G.kitty = kittySize == 0 ? [] : G.deck.slice(-kittySize).sort(cmpCards);
        G.kittyRevealed = false;
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
        if (G.players.some((P) => P.bid == Contract.Solo)) {
          return { next: Phases.discard };
        }
        if (G.players.some((P) => P.bid == Contract.None)) return;
        if (G.players.every((P) => P.bid == Contract.Pass)) {
          return { next: Phases.dealing };
        } else if (G.players.filter((P) => P.bid > Contract.Pass).length == 1) {
          return { next: Phases.discard };
        }
      },

      onEnd: (G: IG, ctx: Ctx) => {
        let taker: IPlayer;
        let highestBid: Contract = Contract.Pass;
        G.players.forEach((P) => {
          if (P.bid > highestBid) {
            highestBid = P.bid;
            taker = P;
          }
          P.bid = Contract.None;
        });
        if (highestBid == 0) {
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
        if (util.kittySize(ctx.numPlayers) > 0) {
          taker.discardSelection = [];
          taker.hand = taker.hand.concat(G.kitty).sort(get_cmpCards(G.contract, G.trumpSuit));
          G.kittyRevealed = false;
        }
      },
    },

    discard: {
      next: Phases.calling,
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

      endIf: (G, ctx) => util.kittySize(ctx.numPlayers) == 0 || G.resolvedTricks.length > 0,

      onEnd: (G: IG) => {
        const taker = G.players[+G.takerId];
        delete taker.discardSelection;
        taker.isReady = true;
        G.kittyRevealed = false;
        G.kitty = [];
      },
    },

    calling: {
      next: Phases.placement,
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

      endIf: (G) => G.contract == Contract.Wenz || G.contract == Contract.Bettel || !!G.calledCard,

      onEnd: (G: IG) => {
        if (G.calledCard) {
          if (G.contract == Contract.Solo) {
            G.trumpSuit = G.calledCard.color;
          } else {
            G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
          }
        }
        const cmpCards = get_cmpCards(G.contract, G.trumpSuit);
        G.players.forEach((P) => {
          P.hand = P.hand.sort(cmpCards);
        });
      },
    },

    placement: {
      turn: {
        onBegin: (G: IG, ctx: Ctx) => {
          ctx.events.setActivePlayers({
            currentPlayer: Stages.place_card,
            moveLimit: 1,
          });
        },
        stages: {
          place_card: { moves: { SelectCards: Moves.SelectCards } },
        },
        order: {
          first: (G) => +G.trick.leader.id,
          next: (G, ctx) => util.mod(ctx.playOrderPos + 1, ctx.playOrder.length),
        },
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

      onEnd: (G: IG, ctx: Ctx) => {
        if (resolveTrick(G)) {
          const roundSummary = u_summary.getRoundSummary(G);
          G.roundSummaries.push(roundSummary);
          G.players.forEach((P, i) => {
            P.score += roundSummary.scoring[i];
            P.isReady = false;
          });
          if (util.kittySize(ctx.numPlayers) > 0) {
            G.kitty = G.resolvedTricks[0].cards;
            G.kittyRevealed = true;
          }
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
  const winnerId = getTrickWinnerId(G.contract, G.trumpSuit, G.trick);
  const winner = util.getPlayerById(G, winnerId);
  G.trick.winner = winner;
  G.resolvedTricks.push(G.trick);
  G.trick = { cards: [], leader: winner };
  if (G.contract == Contract.Bettel && winner.isTaker) {
    return true;
  }
  return G.players.every((P) => P.hand.length == 0);
}

export function getCalledTakerId(players: IPlayer[], card: ICard): string {
  const takerId = players.find((P) => P.isTaker).id;
  const calledTaker = players.find((P) => {
    return P.hand.some((C) => C.color == card.color && C.value == card.value);
  });
  return calledTaker ? calledTaker.id : takerId;
}

export function getTrickWinnerId(contract: Contract, trumpSuit: CardColor, T: ITrick): string {
  const leaderId = +T.leader.id;
  let ranks = T.cards.map((C) => cardRank(contract, trumpSuit, C));
  if (ranks.every((R) => R < 500)) {
    const lead_color = T.cards[0].color;
    ranks = ranks.map((R, i) => (T.cards[i].color == lead_color ? R : -1));
  }
  const max_rank = Math.max(...ranks);
  return util.mod(leaderId + ranks.findIndex((R) => R == max_rank), T.cards.length).toString();
}

export function getSortedDeck(): ICard[] {
  let deck: ICard[] = [];
  for (let col of ['Schell', 'Herz', 'Gras', 'Eichel']) {
    deck = deck.concat(
      Array(8)
        .fill(0)
        .map((_, i) => {
          return { color: CardColor[col], value: i + 7 };
        }),
    );
  }
  return deck;
}

export function cardRank(contract: Contract, trumpSuit: CardColor, card: ICard): number {
  if (contract == Contract.Bettel) {
    return 100 * card.color + card.value;
  }
  if (card.value == 11) {
    return 1000 + card.color;
  }
  if (contract != Contract.Wenz && card.value == 12) {
    return 10000 + card.color;
  }
  let color_rank: number = contract != Contract.Wenz && card.color == trumpSuit ? 5 : card.color;
  let val_order: number[] = contract == Contract.Wenz ? [7, 8, 9, 12, 13, 10, 14] : [7, 8, 9, 13, 10, 14];
  return 100 * color_rank + val_order.indexOf(card.value);
}

export function get_cmpCards(contract: Contract, trumpSuit: CardColor) {
  return function (a: ICard, b: ICard): number {
    return cardRank(contract, trumpSuit, a) - cardRank(contract, trumpSuit, b);
  };
}
