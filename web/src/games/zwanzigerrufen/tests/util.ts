import { str2cards, str2trick } from 'gamesShared/helpers/cards';

import { Contract, DefaultIPlayer, IG, DefaultIG, DefaultIAnnouncements } from '../types';
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
    { ...DefaultIPlayer, id: '0', hand: str2cards('H10 Tr12 CR HV Tr15 Tr21 CD Tr1 Tr9 SR') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('Tr8 DV Tr14 Tr20 DR DC Tr17 SC HR Tr4') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('SV CC Tr10 DD Tr16 Tr5 SD Tr11 S10 HC') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('HD Tr18 Tr6 Tr7 Ex CV Tr19 Tr13 C10 D10') },
  ];
  const takerId = '0';
  players[+takerId].isTaker = true;
  return {
    ...DefaultIG,
    players: players,
    takerId: takerId,
    partnerId: '1',
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    announcementsRe: { ...DefaultIAnnouncements },
    announcementsContra: { ...DefaultIAnnouncements },
    trick: { cards: [], leaderId: players[2].id },
    resolvedTricks: [],
    contract: Contract.Normal,
  };
}

export function setup_solo(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('HV Tr11 DR S10 Tr8 Tr7 Tr17 CC DD Tr20') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('Tr15 Tr14 DC Tr16 Tr19 Tr21 HC Ex D10 Tr18') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('CV CR CD C10 Tr1 Tr10 SR SC SV Tr9') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('H10 Tr6 Tr4 Tr12 HR DV Tr5 Tr13 HD SD') },
  ];
  const takerId = '1';
  players[+takerId].isTaker = true;
  return {
    ...DefaultIG,
    players: players,
    takerId: takerId,
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    announcementsRe: { ...DefaultIAnnouncements },
    announcementsContra: { ...DefaultIAnnouncements },
    trick: { cards: [], leaderId: players[0].id },
    resolvedTricks: [],
    contract: Contract.Solo,
  };
}

export function setup_solo_suit(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('Tr13 HV Tr15 Tr14 Tr18 CC Tr16 SC Tr7 CV') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('CD DV Tr12 Tr10 Tr8 HC Tr17 Tr11 Tr1 HR') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('SV Tr5 SR Tr21 D10 SD DC Ex H10 Tr9') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('S10 HD Tr4 C10 DR CR Tr20 DD Tr19 Tr6') },
  ];
  const takerId = '3';
  players[+takerId].isTaker = true;
  return {
    ...DefaultIG,
    players: players,
    takerId: takerId,
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    announcementsRe: { ...DefaultIAnnouncements },
    announcementsContra: { ...DefaultIAnnouncements },
    trick: { cards: [], leaderId: players[0].id },
    resolvedTricks: [],
    contract: Contract.SoloSuit,
  };
}
