import { Suit } from 'gamesShared/definitions/cards';
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

export function setup_3players(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('GrA EiA Hz9 Ei10 GrU EiO HzU Sc10'), isTaker: true },
    { ...DefaultIPlayer, id: '1', hand: str2cards('GrO ScU EiU EiK HzK Gr10 ScO ScA') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('GrK ScK HzO Ei9 HzA Sc9 Gr9 Hz10') },
  ];
  return {
    ...DefaultIG,
    players: players,
    takerId: '0',
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [],
    contract: Contract.Solo,
    trumpSuit: Suit.Eichel,
  };
}

export function setup_3players_bettel(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('HzK Ei10 Sc10 GrU ScA Hz10 GrO EiK') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('HzA Hz9 ScU ScK EiA HzO Gr10 EiU') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('GrA EiO Sc9 ScO GrK Ei9 Gr9 HzU'), isTaker: true },
  ];
  return {
    ...DefaultIG,
    players: players,
    takerId: '2',
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [],
    contract: Contract.Bettel,
  };
}

export function setup_4players(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('Hz9 GrK Hz7 EiK EiU HzA Ei8 EiA') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('Gr10 Sc8 EiO ScO GrA GrU Sc10 Hz8') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('Gr9 ScK HzO ScA Sc7 Ei9 HzK Ei7') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('GrO Hz10 Gr7 Ei10 ScU Gr8 HzU Sc9'), isTaker: true },
  ];
  return {
    ...DefaultIG,
    players: players,
    takerId: '3',
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    calledTakerId: '1',
    trick: { cards: [], leaderId: players[2].id },
    resolvedTricks: [],
    calledCard: str2card('GrA'),
    calledMayRun: 0,
    contract: Contract.Ace,
    trumpSuit: Suit.Herz,
  };
}

export function setup_4players_wenz(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('GrA ScK HzU GrO HzK EiO Gr9 ScO') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('GrK EiU Sc10 Ei7 Gr10 Hz10 EiK Sc8') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('HzA Ei9 Gr8 Sc7 GrU Hz7 Sc9 Hz8'), isTaker: true },
    { ...DefaultIPlayer, id: '3', hand: str2cards('Hz9 Gr7 EiA ScA HzO Ei8 Ei10 ScU') },
  ];
  return {
    ...DefaultIG,
    players: players,
    takerId: '2',
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leaderId: players[0].id },
    resolvedTricks: [],
    contract: Contract.Wenz,
  };
}
