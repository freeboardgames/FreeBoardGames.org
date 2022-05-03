import { str2cards, str2trick } from 'gamesShared/helpers/cards';
import { Suit } from 'gamesShared/definitions/cards';

import { DefaultIPlayer, IG, DefaultIG } from '../types';
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
    { ...DefaultIPlayer, id: '0', hand: str2cards('D9 SA HA H10 DJ S7 CA S8 S3 C9 D2 D4 H2') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('DK C3 DQ D3 D5 S9 CQ S6 H3 D7 C8 SK HK') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('S4 H6 C2 H4 HQ H8 H5 HJ D10 C6 H9 C10 CK') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('C7 C4 CJ D8 D6 S10 S5 SQ DA SJ S2 C5 H7') },
  ];
  const declarerId = '0';
  const partnerId = '2';
  players[+declarerId].isDeclarer = true;
  players[+partnerId].isDeclarer = true;
  return {
    ...DefaultIG,
    players: players,
    declarerId: declarerId,
    partnerId: partnerId,
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [],
    contract: { trumps: Suit.Hearts, value: 2 },
  };
}

export function setup_honors(declarerId: string, partnerId: string): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('DA D7 C5 S5 DK SQ H6 D5 HJ S2 S4 D6 D9') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('CK DJ C3 C8 H10 D10 CQ C6 SJ CA H8 CJ HK') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('D8 S10 H5 H2 H4 C4 H9 D3 D2 C9 S3 D4 HA') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('DQ S6 H3 S9 C2 HQ SK H7 C10 SA S7 S8 C7') },
  ];
  players[+declarerId].isDeclarer = true;
  players[+partnerId].isDeclarer = true;
  const leaderId = util.mod(+partnerId - 1, 4).toString();
  return {
    ...DefaultIG,
    players: players,
    declarerId: declarerId,
    partnerId: partnerId,
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leaderId: leaderId },
    resolvedTricks: [],
    contract: { trumps: Suit.Clubs, value: 4 },
  };
}
