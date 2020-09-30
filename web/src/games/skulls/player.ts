import { Token } from './Token';

export default interface IPlayer {
  id: string;
  hand: Token[];
  stack: Token[];
  revealedStack: Token[];
  wins: number;
  bet: null | number;
  betSkipped: boolean;
}
