import { Suit } from 'gamesShared/definitions/cards';

import { IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (G.trick.cards.length == 0) {
    return player.hand.map(() => true);
  }
  const lead_suit = G.trick.cards[0].suit;
  if (lead_suit == Suit.Excuse) {
    return player.hand.map(() => true);
  }
  const can_follow_suit = player.hand.filter((C) => C.suit == lead_suit).length > 0;
  const max_trump_in_hand = Math.max(...player.hand.map((C) => (C.suit == Suit.Trumps ? C.value : 0)));
  if (!can_follow_suit && max_trump_in_hand == 0) {
    return player.hand.map(() => true);
  }
  const max_trump_in_trick = Math.max(...G.trick.cards.map((C) => (C.suit == Suit.Trumps ? C.value : 0)));
  return player.hand.map((C) => {
    if (C.suit == Suit.Excuse) return true;
    if (lead_suit != Suit.Trumps && can_follow_suit) {
      return C.suit == lead_suit;
    }
    if (C.suit != Suit.Trumps) return false;
    if (max_trump_in_hand < max_trump_in_trick) return true;
    return C.value > max_trump_in_trick;
  });
}
