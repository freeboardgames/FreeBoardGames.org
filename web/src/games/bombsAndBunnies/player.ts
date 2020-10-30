<<<<<<< HEAD
import { CardStyle } from './CardComponent';
=======
>>>>>>> upstream/master
import { CardType } from './cardType';

export default interface IPlayer {
  id: string;
<<<<<<< HEAD
  cardStyle: CardStyle;
=======
>>>>>>> upstream/master
  hand: CardType[];
  stack: CardType[];
  revealedStack: CardType[];
  wins: number;
  bet: null | number;
  betSkipped: boolean;
}
