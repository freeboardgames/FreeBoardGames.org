import { Contract, IG } from '../types';
import { resolveTrick, getSortedDeck } from '../game';
import * as util from '../util/misc';
import * as u_placement from '../util/placement';

// helper functions to generate (random) test cases
/* Example:
import { Pattern } from 'gamesShared/definitions/cards';
import { trick2str, card2str } from 'gamesShared/helpers/cards';
import { playRandomTricks, dealCards } from './gen';
  for (let N = 0; N < 1000; N++) {
    const G = setup_normal();
    dealCards(G);
    playRandomTricks(G);
    const summary = getRoundSummary(G);
    if (summary.rePoints > 44) {
      console.log(summary);
      console.log(G.resolvedTricks.map((T) => trick2str(T, Pattern.Tarot)));
      console.log(G.deck.map((C) => card2str(C, Pattern.Tarot)).join(' '));
      break;
    }
  }
*/

export function playRandomTricks(G: IG) {
  const numTricks = G.players[0].hand.length;
  for (let i = 0; i < numTricks; i++) {
    const leaderId = G.trick.leaderId;
    for (let j = 0; j < 4; j++) {
      const player = G.players[util.mod(+leaderId + j, 4)];
      const sel_bool = u_placement.selectableCards(G, player.id);
      const sel_id = sel_bool.map((_, i) => i).filter((i) => sel_bool[i]);
      const i_card = sel_id[(sel_id.length * Math.random()) | 0];
      G.trick.cards.push(player.hand.splice(i_card, 1)[0]);
    }
    resolveTrick(G);
  }
}

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function dealCards(G: IG) {
  const handSize = 10;
  G.deck = getSortedDeck();
  shuffleArray(G.deck);
  if (G.contract == Contract.Normal) {
    G.partnerId = null;
    G.calledCard = null;
  }
  G.players.forEach((P, i) => {
    P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(util.cmpCards);
    if (P.isTaker) {
      G.calledCard = util.getCallCard(P.hand);
    }
  });
  if (G.contract == Contract.Normal) {
    if (G.calledCard == null) {
      return dealCards(G);
    }
    G.partnerId = G.players.find((P) =>
      P.hand.some((C) => C.color == G.calledCard.color && C.value == G.calledCard.value),
    ).id;
  }
}
