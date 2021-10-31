import { CardColor, ICard, ITrick, Pattern } from 'gamesShared/definitions/cards';

export function getPattern(col: CardColor): Pattern {
  const tarot = [CardColor.Excuse, CardColor.Trumps];
  const franconian = [CardColor.Schell, CardColor.Herz, CardColor.Gras, CardColor.Eichel];
  if (tarot.includes(col)) return Pattern.Tarot;
  if (franconian.includes(col)) return Pattern.Franconian;
  return Pattern.Skat;
}

const oStr2Color = {
  C: CardColor.Clubs,
  D: CardColor.Diamonds,
  S: CardColor.Spades,
  H: CardColor.Hearts,
  Tr: CardColor.Trumps,
  Ex: CardColor.Excuse,
  Sc: CardColor.Schell,
  Hz: CardColor.Herz,
  Gr: CardColor.Gras,
  Ei: CardColor.Eichel,
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
  const [sColor, sValue] = s.match(/([A-Z][a-z]*)([A-Z0-9]*)/).slice(1);
  const color = oStr2Color[sColor];
  let value = color == CardColor.Excuse ? 0 : oSpecialValues[sValue] || +sValue;
  return { color: color, value: value };
}

export function card2str(C: ICard, pattern?: Pattern): string {
  let col = '';
  for (const sCol in oStr2Color) {
    if (oStr2Color[sCol] == C.color) {
      col = sCol;
      break;
    }
  }
  if (C.color == CardColor.Excuse) return col;
  if (C.color == CardColor.Trumps) return `${col}${C.value}`;
  let val = C.value.toString();
  if (C.value > 10) {
    pattern = pattern || getPattern(C.color);
    if (pattern == Pattern.Franconian) {
      val = ['U', 'O', 'K', 'A'][C.value - 11];
    } else if (pattern == Pattern.Tarot) {
      val = ['V', 'C', 'D', 'R'][C.value - 11];
    } else if (pattern == Pattern.Skat) {
      val = ['J', 'Q', 'K', 'A'][C.value - 11];
    }
  }
  return `${col}${val}`;
}

export function str2cards(s: string): ICard[] {
  return s.split(' ').map(str2card);
}

export function str2trick(s: string, players: string[]): ITrick {
  if (!s.includes('!')) {
    return { cards: str2cards(s) };
  }
  let leaderPos = 0;
  const cards = s.split(' ').map((card_s, i) => {
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
