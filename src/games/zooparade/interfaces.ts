
// Interfaces 
export interface ICard {
  id: number;
  color: number;
  value: number;
}

export interface IHint {
  color: number;
  value: number;
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