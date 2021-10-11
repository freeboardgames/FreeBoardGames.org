import { Contract, IG } from '../types';
import { resolveTrick, getSortedDeck } from '../game';
import * as util from '../util/misc';
import * as u_placement from '../util/placement';

// helper functions to generate (random) test cases
/* Example:
import { trick2str, card2str } from './util';
import { playRandomTricks, dealCards } from './gen';
  for (let N = 0; N < 1000; N++) {
    const G = setup_normal();
    dealCards(G);
    playRandomTricks(G);
    const summary = getRoundSummary(G);
    if (summary.rePoints > 120) {
      console.log(summary);
      console.log(G.resolvedTricks.map(trick2str));
      console.log(G.deck.map(card2str).join(' '));
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
  const handSize = 12;
  const cmpCards = util.get_cmpCards(G.contract, G.trumpSuit);
  G.deck = getSortedDeck();
  shuffleArray(G.deck);
  if (G.contract == Contract.Normal) {
    G.takerId = null;
    G.partnerId = null;
    G.players.forEach((P) => {
      P.isTaker = false;
    });
  }
  G.players.forEach((P, i) => {
    P.hand = G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
    if (G.contract == Contract.Normal) {
      const has_highest_trump = P.hand.some(util.isOld);
      if (!has_highest_trump) return;
      if (G.takerId == null) {
        G.takerId = P.id;
        P.isTaker = true;
      } else {
        G.partnerId = P.id;
      }
    }
  });
  if (G.contract == Contract.Normal && G.partnerId == null) {
    return dealCards(G);
  }
}
