import { CardType } from './cardType';

export default interface IPlayer {
  id: string;
  hand: CardType[];
  stack: CardType[];
  revealedStack: CardType[];
  wins: number;
  bet: null | number;
  betSkipped: boolean;
}
