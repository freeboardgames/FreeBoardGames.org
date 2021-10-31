export enum Pattern {
  Tarot = 'tarot',
  Tarock = 'tarock',
  Franconian = 'franconian',
  Skat = 'skat',
}

export enum CardColor {
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
  color: CardColor;
  value: number;
}

export interface ITrick {
  cards: ICard[];
  leaderId?: string;
  winnerId?: string;
}
