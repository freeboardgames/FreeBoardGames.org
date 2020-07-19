// Interfaces
export interface ICard {
  id: number;
  color: number;
  value: number;
}

export enum IHintMask {
  UNKNOWN = 0,
  NO = -1,
  YES = 1,
}

export interface IHint {
  color: IHintMask[]; // Array of size 5, one for each color.
  value: IHintMask[]; // Array of size 5, one for each value.
}

export interface IHintIcon {
  color: number; // colour to display where -1 = black
  value: number; // number to display where -1 = ' '
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
  movelog: Log[];
}

export enum Moves {
  movePlay = 'movePlay',
  moveDiscard = 'moveDiscard',
  moveHintColor = 'moveHintColor',
  moveHintValue = 'moveHintValue',
}

export interface Log {
  player: string;
  move: Moves;
  cardColor?: number;
  cardValue?: number;
  cardIdInHand?: number;
  hintReceiver?: number;
  hintValue?: number;
  hintColor?: number;
  success?: boolean;
}
