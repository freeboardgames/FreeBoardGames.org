import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { Suit } from 'gamesShared/definitions/cards';

import { IG } from './types';
import * as util from './util/misc';

export const Moves = {
  GoOut(G: IG, ctx: Ctx) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    G.out = player.id;
    return G;
  },

  Close(G: IG) {
    G.closed = true;
    const cmpCards = util.get_cmpCards(G.trumpSuit);
    G.players.some((P) => {
      const pos9 = P.hand.findIndex((C) => C.suit == G.trumpSuit && C.value == 9);
      if (pos9 >= 0) {
        const [card9] = P.hand.splice(pos9, 1);
        P.hand = P.hand.concat(G.stock.splice(0, 1, card9)).sort(cmpCards);
        G.exchanged9 = P.id;
        return true;
      }
      return false;
    });
    return G;
  },

  DrawCards(G: IG, ctx: Ctx) {
    // players draw from the stock, one card each, starting from the current
    const player = util.getPlayerById(G, ctx.currentPlayer);
    const numPlayers = G.players.length;
    const cmpCards = util.get_cmpCards(G.trumpSuit);
    for (let i = +player.id; G.players[i].hand.length < 6; i = util.mod(i + 1, numPlayers)) {
      G.players[i].hand = G.players[i].hand.concat([G.stock.pop()]).sort(cmpCards);
    }
    if (G.stock.length > 0 && G.stock[0].value != 9) {
      const hasWonSomeTrick = G.resolvedTricks.some((T) => T.winnerId == player.id);
      const pos9 = player.hand.findIndex((C) => C.suit == G.trumpSuit && C.value == 9);
      if (hasWonSomeTrick && pos9 >= 0) {
        const [card9] = player.hand.splice(pos9, 1);
        player.hand = player.hand.concat(G.stock.splice(0, 1, card9)).sort(cmpCards);
        G.exchanged9 = player.id;
      }
    }
    if (G.stock.length == 0) {
      G.closed = true;
    }
    return G;
  },

  Meld(G: IG, ctx: Ctx, suit: Suit) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (G.exchanged9 == player.id) {
      G.exchanged9 = null;
    }
    player.melds.push(suit);
    return G;
  },

  SelectCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (handIndex.length == 0) {
      return INVALID_MOVE;
    }
    G.trick.cards.push(player.hand.splice(handIndex[0], 1)[0]);
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
