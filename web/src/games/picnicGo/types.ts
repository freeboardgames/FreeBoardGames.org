export interface IG {
  deck: string[];
  players: IPlayer[];
  hands: IHand[];
  round: number;
}

export const enum cardTypes {
  sandwich,
  chips,
  meal,
  special,
  dessert,
}

export interface ICardDefinition {
  id: string;
  name: string;
  cardType: cardTypes;
  scoreFunc(p: IPlayer): IPlayer;
}

export interface IPlayer {
  playedCards: string[];
  score: number;
  dessertsCount: number;
  chipsCount: number;
  unusedMayo: number;
  unusedForks: number;
}

export interface IHand {
  currentOwner: number;
  hand: string[];
}
