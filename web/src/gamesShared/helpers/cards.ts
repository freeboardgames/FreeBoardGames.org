import { Suit, ICard, ITrick, Pattern } from 'gamesShared/definitions/cards';

export function getPattern(suit: Suit): Pattern {
  const tarot = [Suit.Excuse, Suit.Trumps];
  const franconian = [Suit.Schell, Suit.Herz, Suit.Gras, Suit.Eichel];
  if (tarot.includes(suit)) return Pattern.Tarot;
  if (franconian.includes(suit)) return Pattern.Franconian;
  return Pattern.English;
}

const oStr2Suit = {
  C: Suit.Clubs,
  D: Suit.Diamonds,
  S: Suit.Spades,
  H: Suit.Hearts,
  Tr: Suit.Trumps,
  Ex: Suit.Excuse,
  Sc: Suit.Schell,
  Hz: Suit.Herz,
  Gr: Suit.Gras,
  Ei: Suit.Eichel,
};

const oSpecialValues = {
  V: 11,
  C: 12,
  D: 13,
  R: 14,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
  U: 11,
  O: 12,
};

export function str2card(s: string): ICard {
  const [sSuit, sValue] = s.match(/([A-Z][a-z]*)([A-Z0-9]*)/).slice(1);
  const suit = oStr2Suit[sSuit];
  let value = suit == Suit.Excuse ? 0 : oSpecialValues[sValue] || +sValue;
  return { suit: suit, value: value };
}

export function card2str(C: ICard, pattern?: Pattern): string {
  let suit = '';
  for (const sSuit in oStr2Suit) {
    if (oStr2Suit[sSuit] == C.suit) {
      suit = sSuit;
      break;
    }
  }
  if (C.suit == Suit.Excuse) return suit;
  if (C.suit == Suit.Trumps) return `${suit}${C.value}`;
  let val = C.value.toString();
  if (C.value > 10) {
    pattern = pattern || getPattern(C.suit);
    if (pattern == Pattern.Franconian) {
      val = ['U', 'O', 'K', 'A'][C.value - 11];
    } else if (pattern == Pattern.Tarot) {
      val = ['V', 'C', 'D', 'R'][C.value - 11];
    } else if ([Pattern.Skat, Pattern.English].includes(pattern)) {
      val = ['J', 'Q', 'K', 'A'][C.value - 11];
    }
  }
  return `${suit}${val}`;
}

export function str2cards(s: string): ICard[] {
  return s.trim().split(' ').map(str2card);
}

export function str2trick(s: string, players: string[]): ITrick {
  if (!s.includes('!')) {
    return { cards: str2cards(s) };
  }
  let leaderPos = 0;
  const cards = s
    .trim()
    .split(' ')
    .map((card_s, i) => {
      if (card_s[0] == '!') {
        leaderPos = i;
        card_s = card_s.substr(1);
      }
      return str2card(card_s);
    });
  return {
    cards: cards.slice(leaderPos).concat(cards.slice(0, leaderPos)),
    leaderId: players[leaderPos],
  };
}

export function trick2str(T: ITrick, pattern?: Pattern): string {
  const numPlayers = T.cards.length;
  return new Array(numPlayers)
    .fill(0)
    .map((_, i) => mod(i - +T.leaderId, numPlayers))
    .map((pos) => card2str(T.cards[pos], pattern))
    .map((s, i) => (i == +T.leaderId ? `!${s}` : s))
    .join(' ');
}

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
