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
}

export interface IPlayer {
  playedCards: cardEnum[];
  score: number;
  dessertsCount: number;
  chipsCount: number;
  unusedMayo: number;
  unusedForks: number;
  forkUsed: boolean;
}

export interface IHand {
  currentOwner: string;
  hand: cardEnum[];
  selected: number[] | null;
}
