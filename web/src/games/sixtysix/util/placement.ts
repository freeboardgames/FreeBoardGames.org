import { IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (!G.closed && player.hand.length < 6) {
    return player.hand.map(() => false);
  }
  if (G.trick.cards.length == 0 && player.melds.length > 0) {
    const lastMeld = player.melds[player.melds.length - 1];
    const isMeldCard = player.hand.map((C) => C.suit == lastMeld && [12, 13].includes(C.value));
    if (isMeldCard.filter((v) => v).length == 2) {
      return isMeldCard;
    }
  }
  if (G.trick.cards.length == 0 || !G.closed) {
    return player.hand.map(() => true);
  }
  const isTrump = player.hand.map((C) => C.suit == G.trumpSuit);
  const leadSuit = G.trick.cards[0].suit;
  const isLeadSuit = player.hand.map((C) => C.suit == leadSuit);
  if (!isLeadSuit.some((v) => v)) {
    return isTrump.some((v) => v) ? isTrump : player.hand.map(() => true);
  }
  const leadRank = util.cardRank(G.trumpSuit, G.trick.cards[0]);
  const ranks = player.hand.map((C) => util.cardRank(G.trumpSuit, C));
  const isHigherCard = player.hand.map((C, i) => isLeadSuit[i] && ranks[i] > leadRank);
  return isHigherCard.some((v) => v) ? isHigherCard : isLeadSuit;
}
