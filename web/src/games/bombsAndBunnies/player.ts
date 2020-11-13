import { CardStyle } from './CardComponent';
import { CardType } from './cardType';

export default interface IPlayer {
  id: string;
  cardStyle: CardStyle;
  hand: CardType[];
  stack: CardType[];
  revealedStack: CardType[];
  wins: number;
  bet: null | number;
  betSkipped: boolean;
  isOut: boolean;
}
