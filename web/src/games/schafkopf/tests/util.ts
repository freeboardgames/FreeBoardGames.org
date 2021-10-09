import { CardColor } from 'gamesShared/definitions/cards';
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
    { ...DefaultIPlayer, id: '0', hand: str2cards('Hz8 GrA EiA Sc7 Hz9 Ei10 GrU Sc8 Gr9 ScO'), isTaker: true },
    { ...DefaultIPlayer, id: '1', hand: str2cards('Gr7 Sc10 GrO ScU EiU EiK HzK Gr10 HzU Ei7') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('GrK ScK HzO Ei8 Ei9 HzA Sc9 EiO ScA Hz10') },
  ];
  const ecarte = str2trick(
    'Gr8 Hz7',
    players.map((P) => P.id),
  );
  ecarte.winnerId = players[0].id;
  return {
    ...DefaultIG,
    players: players,
    takerId: '0',
    deck: Array.prototype.concat(...players.map((P) => P.hand), ecarte.cards),
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [ecarte],
    contract: Contract.Solo,
    trumpSuit: CardColor.Eichel,
  };
}

export function setup_3players_bettel(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('HzK Ei10 Sc10 GrU ScA Hz10 GrO EiK Ei9 Ei8') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('Sc8 HzA Hz9 ScU ScK EiA HzO Ei7 Gr9 Gr10') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('Gr7 Sc7 GrA EiO Sc9 Gr8 ScO Hz8 GrK Hz7'), isTaker: true },
  ];
  const ecarte = str2trick(
    'HzU EiU',
    players.map((P) => P.id),
  );
  ecarte.winnerId = players[0].id;
  return {
    ...DefaultIG,
    players: players,
    takerId: '2',
    deck: Array.prototype.concat(...players.map((P) => P.hand), ecarte.cards),
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [ecarte],
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
    trumpSuit: CardColor.Herz,
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
