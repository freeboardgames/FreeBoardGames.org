import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { Suit } from 'gamesShared/definitions/cards';

import { Announcement, Contract, Phases, Stages, IG } from './types';
import * as util from './util/misc';

export const Moves = {
  MakeBid(G: IG, ctx: Ctx, value: number) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    player.bid = value;
    if (value == 0) {
      // bidder is passed on
      G.bidderId = util.mod(+G.bidderId + 1, ctx.numPlayers).toString();
      // holder is the remaining player that hasn't passed yet (if any)
      G.holderId = G.players.find((P) => P.bid != 0 && P.id != G.bidderId)?.id;
    }
    return G;
  },

  DeclareHand(G: IG, ctx: Ctx, declare: boolean) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    G.hand = declare;
    ctx.events.endStage();
    if (!declare) {
      player.discardSelection = [];
      player.hand = player.hand.concat(G.kitty).sort(util.get_cmpCards(Contract.None, null));
    } else {
      G.resolvedTricks.push({ cards: G.kitty, winnerId: player.id });
      G.kitty = [];
      ctx.events.setStage(Stages.select_contract);
    }
    return G;
  },

  Discard(G: IG, ctx: Ctx) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    const discard_num = 2;

    if (!player.discardSelection || player.discardSelection.length != discard_num || !player.isTaker) {
      return INVALID_MOVE;
    }

    G.resolvedTricks.push({
      // make sure we splice from right to left so that indices remain valid
      cards: player.discardSelection
        .sort((a, b) => b - a)
        .map((i) => player.hand.splice(i, 1)[0])
        .reverse(),
      winnerId: player.id,
    });
    G.kitty = [];
    delete player.discardSelection;

    ctx.events.setStage(Stages.select_contract);
    return G;
  },

  SelectContract(G: IG, ctx: Ctx, contract: Contract) {
    G.contract = contract;
    if (contract != Contract.Suit) {
      const cmpCards = util.get_cmpCards(G.contract, G.trumpSuit);
      G.players.forEach((P) => {
        P.hand = P.hand.sort(cmpCards);
      });
    }
    ctx.events.endStage();
    if (contract == Contract.Suit) {
      ctx.events.setStage(Stages.select_trump);
    } else if (G.hand || contract == Contract.Null) {
      ctx.events.setStage(Stages.announce);
    } else {
      G.announcement = Announcement.None;
    }
    return G;
  },

  SelectTrumpSuit(G: IG, ctx: Ctx, suit: Suit) {
    G.trumpSuit = suit;
    const cmpCards = util.get_cmpCards(G.contract, G.trumpSuit);
    G.players.forEach((P) => {
      P.hand = P.hand.sort(cmpCards);
    });
    ctx.events.endStage();
    if (G.hand) {
      ctx.events.setStage(Stages.announce);
    } else {
      G.announcement = Announcement.None;
      ctx.events.endTurn();
    }
    return G;
  },

  Announce(G: IG, ctx: Ctx, announcement: Announcement) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (!player.isTaker) return INVALID_MOVE;
    G.announcement = announcement;
    ctx.events.endStage();
    ctx.events.endTurn();
    return G;
  },

  SelectCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (ctx.phase == Phases.discard) {
      if (handIndex.length > 2) {
        return INVALID_MOVE;
      }
      player.discardSelection = [...handIndex];
    } else {
      if (handIndex.length == 0) {
        return INVALID_MOVE;
      }
      G.trick.cards.push(player.hand.splice(handIndex[0], 1)[0]);
    }
    return G;
  },

  Finish(G: IG, ctx: Ctx, quit: boolean) {
    const player = util.getPlayerById(G, ctx.playerID);
    player.isReady = true;
    ctx.events.endStage();
    ctx.events.endTurn();
    if (quit) ctx.events.endGame({ winner: 2 });
    return G;
  },
};
