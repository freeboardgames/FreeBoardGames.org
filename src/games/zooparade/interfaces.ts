
// Interfaces 
export interface ICard {
  id: number;
  color: number;
  value: number;
}

export interface IHint {
  color: number[]; // Array of size 5 [ , , , , ] where a -1 = not this color/value, 0 = unknonw , 1 = this color
  value: number[]; // same
}

export interface IHand {
  player: number;
  cards: ICard[];
  hints: IHint[];
}

export interface IG {
  deck: ICard[];
  deckindex: number;
  trash: ICard[];
  piles: ICard[][];

  hands: IHand[];

  countdown: number;
  treats: number;
}