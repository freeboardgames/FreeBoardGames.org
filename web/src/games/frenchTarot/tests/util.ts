import { str2card, str2cards, str2trick } from 'gamesShared/helpers/cards';

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

export function setup_4players(): IG {
  const players = [
    {
      ...DefaultIPlayer,
      id: '0',
      hand: str2cards('C3 C5 CC D4 D5 DR H3 H5 H10 HC HR T1 T8 T10 T11 T12 T16 T18'),
      isTaker: true,
    },
    { ...DefaultIPlayer, id: '1', hand: str2cards('C1 C7 C9 CV CD D6 D7 D8 DD S2 S3 SD H2 H4 H9 T3 T4 T5') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('C4 CR D1 D10 DC S4 S7 S10 SC SR HV T6 T7 T9 T13 T17 T20 E') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('C2 C6 C8 C10 D3 D9 DV S5 S8 S9 H6 H8 HD T2 T14 T15 T19 T21') },
  ];
  const ecarte = str2trick(
    'D2 S1 S6 SV H1 H7',
    players.map((P) => P.id),
  );
  ecarte.winnerId = players[0].id;
  return {
    ...DefaultIG,
    players: players,
    deck: Array.prototype.concat(...players.map((P) => P.hand), ecarte.cards),
    takerId: '0',
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [ecarte],
    contract: Contract.Small,
    poignee: 0,
  };
}

export function setup_5players(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('C1 C5 C10 CC D4 D9 S3 S7 SC HC HR T2 T6 T7 T12') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('C2 C4 CR D1 D5 D10 DV S2 S4 H2 T1 T9 T16 T18 T20') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('C7 C8 D2 D3 D6 D7 DC DD S1 S5 S6 H4 HV T3 T10') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('C6 CD S9 S10 SV SD SR T4 T5 T11 T13 T17 T19 T21 E'), isTaker: true },
    { ...DefaultIPlayer, id: '4', hand: str2cards('C3 C9 CV D8 DR S8 H1 H5 H7 H9 H10 HD T8 T14 T15') },
  ];
  const ecarte = str2trick(
    'H3 H6 H8',
    players.map((P) => P.id),
  );
  ecarte.winnerId = players[3].id;
  return {
    ...DefaultIG,
    players: players,
    deck: Array.prototype.concat(...players.map((P) => P.hand), ecarte.cards),
    takerId: '3',
    trick: { cards: [], leaderId: players[2].id },
    resolvedTricks: [ecarte],
    calledCard: str2card('CR'),
    contract: Contract.Guard,
    poignee: 0,
  };
}
