import { ICard } from 'gamesShared/definitions/cards';
import { Contract, IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (player.hand.length == 1) {
    return player.hand.map(() => true);
  }
  const is_trump = player.hand.map((C) => util.isTrump(G, C));
  const calledCard: ICard = G.contract == Contract.Ace ? G.calledCard : { suit: null, value: 0 };
  const is_called_suit = player.hand.map((C, i) => C.suit == calledCard.suit && !is_trump[i]);
  const has_called_card =
    G.contract == Contract.Ace && player.hand.some((C, i) => is_called_suit[i] && C.value == calledCard.value);
  if (G.trick.cards.length == 0) {
    return player.hand.map((C, i) => {
      if (!has_called_card || G.calledMayRun != 0) {
        return true;
      }
      return !is_called_suit[i] || C.value == calledCard.value;
    });
  }
  const lead_is_trump = util.isTrump(G, G.trick.cards[0]);
  const lead_suit = G.trick.cards[0].suit;
  const is_lead_suit = lead_is_trump ? is_trump : player.hand.map((C, i) => C.suit == lead_suit && !is_trump[i]);
  const can_follow_suit = is_lead_suit.some((v) => v);
  const called_has_run = G.calledMayRun < 0;
  return player.hand.map((C, i) => {
    if (!can_follow_suit) {
      return !has_called_card || called_has_run || !is_called_suit[i] || C.value != calledCard.value;
    }
    if (!has_called_card || lead_is_trump || lead_suit != calledCard.suit) {
      return is_lead_suit[i];
    }
    return is_lead_suit[i] && (called_has_run || C.value == calledCard.value);
  });
}
