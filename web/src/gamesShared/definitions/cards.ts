export enum Pattern {
  Tarot = 'tarot',
  Tarock = 'tarock',
  Franconian = 'franconian',
  Skat = 'skat',
}

export enum Suit {
  Diamonds,
  Hearts,
  Spades,
  Clubs,
  Trumps,
  Excuse,
  Schell,
  Herz,
  Gras,
  Eichel,
}

export interface ICard {
  suit: Suit;
  value: number;
}

export interface ITrick {
  cards: ICard[];
  leaderId?: string;
  winnerId?: string;
}
