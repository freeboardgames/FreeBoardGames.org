import { CardColor } from 'gamesShared/definitions/cards';
import { str2cards, str2trick } from 'gamesShared/helpers/cards';

import { Contract, DefaultIPlayer, IG, DefaultIG } from '../types';
import { resolveTrick } from '../game';
import * as util from '../util/misc';

export function playTricks(G: IG, tricks: string[]) {
  tricks.forEach((s_trick) => {
    G.trick = str2trick(
      s_trick,
      G.players.map((P) => P.id),
    );
    G.players.forEach((P, i) => {
      const pos = util.mod(i - +G.trick.leaderId, G.players.length);
      const i_card = P.hand.findIndex((C) => C == G.trick.cards[pos]);
      P.hand.splice(i_card, 1);
    });
    resolveTrick(G);
  });
}

export function setup_normal(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('S10 C10 DQ D10 HQ C9 CK SQ CQ SA CJ D10') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('SJ S10 SQ DK SK HQ HA CA HK H9 HA C9') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('SJ SK D9 DJ DQ CQ DJ CK DK CJ D9 S9') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('H10 H10 DA DA HJ HK C10 H9 CA SA HJ S9') },
  ];
  const takerId = '0';
  players[+takerId].isTaker = true;
  return {
    ...DefaultIG,
    players: players,
    takerId: takerId,
    partnerId: '2',
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leaderId: players[2].id },
    resolvedTricks: [],
    contract: Contract.Normal,
    trumpSuit: CardColor.Diamonds,
  };
}

export function setup_solo_trump(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('CQ SQ SJ CJ HK SQ DQ SJ SK H9 SA HJ') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('SA HQ H9 D10 H10 HJ DA C9 SK S9 DJ CA') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('S10 DK HQ D9 DQ DK DA S10 HK DJ HA CA') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('S9 H10 CJ D9 C10 CQ C9 CK CK HA D10 C10') },
  ];
  const takerId = '0';
  players[+takerId].isTaker = true;
  return {
    ...DefaultIG,
    players: players,
    takerId: takerId,
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leaderId: players[0].id },
    resolvedTricks: [],
    contract: Contract.SoloTrump,
    trumpSuit: CardColor.Spades,
  };
}
