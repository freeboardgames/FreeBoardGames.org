export enum cardEnum {
  sandwichChicken,
  sandwichPork,
  sandwichBeef,
  chipsPotato1,
  chipsPotato2,
  chipsPotato3,
  deviledEggs,
  friedChicken,
  pizza,
  fork,
  mayo,
  cake,
}

export interface IG {
  players: IPlayer[];
  hands: IHand[];
  round: number;
  gameOver: boolean;
  confirmed: string[];
}

export interface IPlayer {
  playedCards: number[];
  score: number;
  dessertsCount: number;
  chipsCount: number;
  unusedMayo: number;
  unusedForks: number;
  forkUsed: boolean;
  turnsLeft: number;
}

export interface IHand {
  currentOwner: string;
  hand: number[];
  selected: number[] | null;
}
