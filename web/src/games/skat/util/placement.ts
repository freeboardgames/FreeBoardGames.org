import { ICard } from 'gamesShared/definitions/cards';

import { Contract, IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (G.trick.cards.length == 0) {
    return player.hand.map(() => true);
  }
  const is_trump = player.hand.map((C) => isTrump(G, C));
  if (isTrump(G, G.trick.cards[0])) {
    return is_trump.some((v) => v) ? is_trump : player.hand.map(() => true);
  }
  const lead_suit = G.trick.cards[0].suit;
  const can_follow_suit = player.hand.filter((C, i) => C.suit == lead_suit && !is_trump[i]).length > 0;
  if (!can_follow_suit) {
    return player.hand.map(() => true);
  }
  return player.hand.map((C, i) => {
    return C.suit == lead_suit && !is_trump[i];
  });
}

export function isTrump(G: IG, C: ICard): boolean {
  if (G.contract == Contract.Grand) {
    return C.value == 11;
  }
  if (G.contract == Contract.Null) {
    return false;
  }
  return C.value == 11 || C.suit == G.trumpSuit;
}
