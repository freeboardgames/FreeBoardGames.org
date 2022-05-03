import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';

import { Call, Bid, IG } from './types';
import * as util from './util/misc';

export const Moves = {
  MakeBid(G: IG, ctx: Ctx, bid: Bid) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    player.bids.push(bid);
    if (typeof bid !== 'number') {
      G.contract = bid;
      G.declarerId = player.id;
      G.partnerId = G.players[util.mod(+G.declarerId + 2, ctx.numPlayers)].id;
      G.doubling = 1;
      G.passCount = 0;
    } else if (bid != Call.Pass) {
      G.doubling *= 2;
      G.passCount = 0;
    } else {
      G.passCount += 1;
    }
    return G;
  },

  SelectCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (handIndex.length == 0) {
      return INVALID_MOVE;
    }
    const card = player.hand.splice(handIndex[0], 1)[0];
    G.trick.cards.push(card);
    return G;
  },

  SelectDummyCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const dummyPlayer = util.getPlayerById(G, G.partnerId);
    if (handIndex.length == 0) {
      return INVALID_MOVE;
    }
    const card = dummyPlayer.hand.splice(handIndex[0], 1)[0];
    G.trick.cards.push(card);
    ctx.events.endStage();
    ctx.events.endTurn();
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
