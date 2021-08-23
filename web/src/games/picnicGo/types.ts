import { cardEnum } from './cards';

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
}

export interface IHand {
  currentOwner: number;
  hand: cardEnum[];
  selected: number | null;
}
