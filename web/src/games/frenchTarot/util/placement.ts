import { CardColor } from 'gamesShared/definitions/cards';

import { IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (G.trick.cards.length == 0) {
    return player.hand.map(() => true);
  }
  const lead_color = G.trick.cards[0].color;
  if (lead_color == CardColor.Excuse) {
    return player.hand.map(() => true);
  }
  const can_follow_suit = player.hand.filter((C) => C.color == lead_color).length > 0;
  const max_trump_in_hand = Math.max(...player.hand.map((C) => (C.color == CardColor.Trumps ? C.value : 0)));
  if (!can_follow_suit && max_trump_in_hand == 0) {
    return player.hand.map(() => true);
  }
  const max_trump_in_trick = Math.max(...G.trick.cards.map((c) => (c.color == CardColor.Trumps ? c.value : 0)));
  return player.hand.map((C) => {
    if (C.color == CardColor.Excuse) return true;
    if (lead_color != CardColor.Trumps && can_follow_suit) {
      return C.color == lead_color;
    }
    if (C.color != CardColor.Trumps) return false;
    if (max_trump_in_hand < max_trump_in_trick) return true;
    return C.value > max_trump_in_trick;
  });
}
