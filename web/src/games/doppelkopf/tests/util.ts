import { ICard, Contract, CardColor, ITrick, IPlayer, DefaultIPlayer, IG, DefaultIG } from '../types';
import { resolveTrick } from '../game';
import * as util from '../util/misc';

const special_card_values = ['B', 'D', 'K', 'A'];

export function str2card(s: string): ICard {
  const color = {
    D: CardColor.Diamonds,
    H: CardColor.Hearts,
    S: CardColor.Spades,
    C: CardColor.Clubs,
  }[s[0]];
  const i = special_card_values.indexOf(s.substr(1));
  const value = i == -1 ? +s.substr(1) : 11 + i;
  return { color: color, value: value };
}

export function card2str(C: ICard): string {
  const col = ['D', 'H', 'S', 'C'][C.color];
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

export function setup_normal(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('S10 C10 DD D10 HD C9 CK SD CD SA CB D10') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('SB S10 SD DK SK HD HA CA HK H9 HA C9') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('SB SK D9 DB DD CD DB CK DK CB D9 S9') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('H10 H10 DA DA HB HK C10 H9 CA SA HB S9') },
  ];
  const takerId = '0';
  players[+takerId].isTaker = true;
  return {
    ...DefaultIG,
    players: players,
    takerId: takerId,
    partnerId: '2',
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leader: players[2] },
    resolvedTricks: [],
    contract: Contract.Normal,
    trumpSuit: CardColor.Diamonds,
  };
}

export function setup_solo_trump(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('CD SD SB CB HK SD DD SB SK H9 SA HB') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('SA HD H9 D10 H10 HB DA C9 SK S9 DB CA') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('S10 DK HD D9 DD DK DA S10 HK DB HA CA') },
    { ...DefaultIPlayer, id: '3', hand: str2cards('S9 H10 CB D9 C10 CD C9 CK CK HA D10 C10') },
  ];
  const takerId = '0';
  players[+takerId].isTaker = true;
  return {
    ...DefaultIG,
    players: players,
    takerId: takerId,
    deck: Array.prototype.concat(...players.map((P) => P.hand)),
    trick: { cards: [], leader: players[0] },
    resolvedTricks: [],
    contract: Contract.SoloTrump,
    trumpSuit: CardColor.Spades,
  };
}
