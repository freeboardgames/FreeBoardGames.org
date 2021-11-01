import { DisplayCard } from './DisplayCard';
import { ICard, Pattern, Suit } from 'gamesShared/definitions/cards';
const card: ICard = {
  suit: Suit.Spades,
  value: 9,
};
export default {
  component: DisplayCard,
  title: 'Games (shared)/Components/Cards/DisplayCard',
};
export const displaySpades = {
  args: {
    description: 'Trump Spades',
    card,
    pattern: Pattern.Skat,
  },
};
