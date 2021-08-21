export interface IG {
  deck: string[];
  player: IPlayer[];
  hands: IHand[];
}

export const enum cardTypes {
  sandwich,
  chips,
  meals,
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
  dessertsPlayed: number;
  chipsCount: number;
}

export interface IHand {
  currentOwner: number;
  hand: string[];
}
