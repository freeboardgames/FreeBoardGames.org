import { ICard, Announcement, Contract, CardColor, ITrick, IPlayer, DefaultIPlayer, IG, DefaultIG } from '../types';
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

export function setup_3players(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('DB H10 SA HK H9 C7 DK SB C10 C8') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('DD DA D10 HD HA CD D9 S7 D8 CA') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('S8 CK H8 S10 D7 SD CB S9 HB SK') },
  ];
  const taker = players[0];
  taker.isTaker = true;
  taker.bid = 24;
  const ecarte = str2trick('C9 H7', players);
  ecarte.winner = taker;
  return {
    ...DefaultIG,
    players: players,
    takerId: taker.id,
    takerCards: ecarte.winner.hand.concat(ecarte.cards),
    trick: { cards: [], leader: players[1] },
    resolvedTricks: [ecarte],
    contract: Contract.Suit,
    hand: false,
    announcement: Announcement.None,
    trumpSuit: CardColor.Clubs,
  };
}

export function setup_3players_null(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('S8 C7 DB SB D10 C9 D8 HD HA DD') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('HB DA S10 H10 CB SK H9 CA S7 C8') },
    { ...DefaultIPlayer, id: '2', hand: str2cards('CD D7 SA H7 C10 DK H8 S9 CK HK') },
  ];
  const taker = players[2];
  taker.isTaker = true;
  taker.bid = 23;
  const ecarte = str2trick('D9 SD', players);
  ecarte.winner = taker;
  return {
    ...DefaultIG,
    players: players,
    takerId: taker.id,
    takerCards: ecarte.winner.hand.concat(ecarte.cards),
    trick: { cards: [], leader: players[1] },
    resolvedTricks: [ecarte],
    hand: false,
    announcement: Announcement.None,
    contract: Contract.Null,
  };
}
