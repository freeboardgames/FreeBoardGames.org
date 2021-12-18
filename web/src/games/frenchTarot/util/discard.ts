import { Suit } from 'gamesShared/definitions/cards';

import { Contract, IG, IPlayer } from '../types';
import * as util from './misc';

export function prepareDiscard(G: IG): boolean {
  // returns false if no discard is done in this contract
  const taker = G.players.find((P) => P.isTaker);
  if (G.contract < Contract.GuardWithout) {
    taker.discardSelection = [];
    taker.hand = taker.hand.concat(G.kitty).sort(util.cmpCards);
    G.kittyRevealed = true;
    return true;
  } else if (G.contract == Contract.GuardWithout) {
    G.resolvedTricks.push({
      cards: G.kitty.splice(0, G.kitty.length),
      winnerId: taker.id,
    });
    return false;
  } else if (G.contract == Contract.GuardAgainst) {
    G.resolvedTricks.push({
      cards: G.kitty.splice(0, G.kitty.length),
      winnerId: G.players.find((P) => P.id != G.calledTakerId && !P.isTaker).id,
    });
    return false;
  }
}

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  const discard_num = util.kittySize(G.players.length);
  if (player.discardSelection === undefined) {
    return player.hand.map(() => false);
  }
  const trump_allowed = canDiscardTrump(G, player);
  return player.hand.map((C, i) => {
    if (player.discardSelection.length == discard_num) {
      return player.discardSelection.includes(i);
    }
    if (C.suit == Suit.Excuse) return false;
    if (C.suit == Suit.Trumps) {
      if ([1, 21].includes(C.value)) return false;
      return player.discardSelection.includes(i) || trump_allowed;
    } else {
      return C.value < 14;
    }
  });
}

function canDiscardTrump(G: IG, player: IPlayer): boolean {
  const discard_num = util.kittySize(G.players.length);
  const num_suit_cards = player.hand.filter(util.isSuitCard).filter((C) => C.value < 14).length;
  const num_discarded_trumps = player.discardSelection.filter((i) => !util.isSuitCard(player.hand[i])).length;
  return num_discarded_trumps < discard_num - num_suit_cards;
}
