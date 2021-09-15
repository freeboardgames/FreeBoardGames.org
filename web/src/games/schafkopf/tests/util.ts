import { ICard, Contract, CardColor, ITrick, IPlayer, DefaultIPlayer, IG, DefaultIG } from '../types';
import { resolveTrick } from '../game';
import * as util from '../util/misc';

const special_card_values = ['U', 'O', 'K', 'A'];

export function str2card(s: string): ICard {
  const color = {
    S: CardColor.Schell,
    H: CardColor.Herz,
    G: CardColor.Gras,
    E: CardColor.Eichel,
  }[s[0]];
  const i = special_card_values.indexOf(s.substr(1));
  const value = i == -1 ? +s.substr(1) : 11 + i;
  return { color: color, value: value };
}

export function card2str(C: ICard): string {
  const col = ['S', 'H', 'G', 'E'][C.color];
  const val = C.value > 10 ? special_card_values[C.value - 11] : C.value.toString();
  return `${col}${val}`;
}

export function str2cards(s: string): ICard[] {
  return s.split(' ').map(str2card);
}

export function str2trick(s: string, players: IPlayer[]): ITrick {
  if (s.indexOf('!') == -1) {
    return { cards: str2cards(s) };
  }
  let leaderId = 0;
  const cards = s.split(' ').map((card_s, i) => {
    if (card_s[0] == '!') {
      leaderId = i;
      card_s = card_s.substr(1);
    }
    return str2card(card_s);
  });
  return {
    cards: cards.slice(leaderId).concat(cards.slice(0, leaderId)),
    leader: players[leaderId],
  };
}

export function trick2str(T: ITrick): string {
  const numPlayers = T.cards.length;
  return new Array(numPlayers)
    .fill(0)
    .map((_, i) => util.mod(i - +T.leader.id, numPlayers))
    .map((pos) => card2str(T.cards[pos]))
    .map((s, i) => (i == +T.leader.id ? `!${s}` : s))
    .join(' ');
}

export function playTricks(G: IG, tricks: string[]) {
  tricks.forEach((s_trick) => {
    G.trick = str2trick(s_trick, G.players);
    G.players.forEach((P, i) => {
      const pos = util.mod(i - +G.trick.leader.id, G.players.length);
      const i_card = P.hand.findIndex((C) => C == G.trick.cards[pos]);
      P.hand.splice(i_card, 1);
    });
    resolveTrick(G);
  });
}

export function setup_3players(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('H8 GA EA S7 H9 E10 GU S8 G9 SO'), isTaker: true },
    { ...DefaultIPlayer, id: '1', hand: str2cards('G7 S10 GO SU EU EK HK G10 HU E7') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('GK SK HO E8 E9 HA S9 EO SA H10') },
  ];
  const ecarte = str2trick('G8 H7', players);
  ecarte.winner = players[0];
  return {
    ...DefaultIG,
    players: players,
    takerId: '0',
    trick: { cards: [], leader: players[1] },
    resolvedTricks: [ecarte],
    contract: Contract.Solo,
    trumpSuit: CardColor.Eichel,
  };
}

export function setup_3players_bettel(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('HK E10 S10 GU SA H10 GO EK E9 E8') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('S8 HA H9 SU SK EA HO E7 G9 G10') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('G7 S7 GA EO S9 G8 SO H8 GK H7'), isTaker: true },
  ];
  const ecarte = str2trick('HU EU', players);
  ecarte.winner = players[0];
  return {
    ...DefaultIG,
    players: players,
    takerId: '2',
    trick: { cards: [], leader: players[1] },
    resolvedTricks: [ecarte],
    contract: Contract.Bettel,
  };
}

export function setup_4players(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('H9 GK H7 EK EU HA E8 EA') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('G10 S8 EO SO GA GU S10 H8') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('G9 SK HO SA S7 E9 HK E7') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('GO H10 G7 E10 SU G8 HU S9'), isTaker: true },
  ];
  return {
    ...DefaultIG,
    players: players,
    takerId: '3',
    calledTakerId: '1',
    trick: { cards: [], leader: players[2] },
    resolvedTricks: [],
    calledCard: str2card('GA'),
    calledMayRun: 0,
    contract: Contract.Ace,
    trumpSuit: CardColor.Herz,
  };
}

export function setup_4players_wenz(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('GA SK HU GO HK EO G9 SO') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('GK EU S10 E7 G10 H10 EK S8') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('HA E9 G8 S7 GU H7 S9 H8'), isTaker: true },
    { ...DefaultIPlayer, id: '3', hand: str2cards('H9 G7 EA SA HO E8 E10 SU') },
  ];
  return {
    ...DefaultIG,
    players: players,
    takerId: '2',
    trick: { cards: [], leader: players[0] },
    resolvedTricks: [],
    contract: Contract.Wenz,
  };
}
