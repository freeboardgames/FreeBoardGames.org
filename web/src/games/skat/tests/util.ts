import { CardColor } from 'gamesShared/definitions/cards';
import { str2cards, str2trick } from 'gamesShared/helpers/cards';

import { Announcement, Contract, DefaultIPlayer, IG, DefaultIG } from '../types';
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

export function setup_3players(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('DJ H10 SA HK H9 C7 DK SJ C10 C8') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('DQ DA D10 HQ HA CQ D9 S7 D8 CA') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('S8 CK H8 S10 D7 SQ CJ S9 HJ SK') },
  ];
  const taker = players[0];
  taker.isTaker = true;
  taker.bid = 24;
  const ecarte = str2trick(
    'C9 H7',
    players.map((P) => P.id),
  );
  ecarte.winnerId = taker.id;
  return {
    ...DefaultIG,
    players: players,
    deck: Array.prototype.concat(...players.map((P) => P.hand), ecarte.cards),
    takerId: taker.id,
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [ecarte],
    contract: Contract.Suit,
    hand: false,
    announcement: Announcement.None,
    trumpSuit: CardColor.Clubs,
  };
}

export function setup_3players_null(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('S8 C7 DJ SJ D10 C9 D8 HQ HA DQ') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('HJ DA S10 H10 CJ SK H9 CA S7 C8') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('CQ D7 SA H7 C10 DK H8 S9 CK HK') },
  ];
  const taker = players[2];
  taker.isTaker = true;
  taker.bid = 23;
  const ecarte = str2trick(
    'D9 SQ',
    players.map((P) => P.id),
  );
  ecarte.winnerId = taker.id;
  return {
    ...DefaultIG,
    players: players,
    deck: Array.prototype.concat(...players.map((P) => P.hand), ecarte.cards),
    takerId: taker.id,
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [ecarte],
    hand: false,
    announcement: Announcement.None,
    contract: Contract.Null,
  };
}
