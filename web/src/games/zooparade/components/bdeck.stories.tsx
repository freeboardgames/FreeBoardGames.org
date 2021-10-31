import { BDeck } from './bdeck';
import { gameDecorator } from '../decorators/game';
export default {
  title: 'Games/Zoo Parade/Components/Deck',
  decorators: [gameDecorator],
};
export const With6Left = () => <BDeck cardsLeft={5} />;
