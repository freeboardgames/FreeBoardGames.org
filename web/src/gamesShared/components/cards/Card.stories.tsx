import { Card } from './Card';
import { ICard, CardColor, Pattern } from 'gamesShared/definitions/cards';
export default {
  component: Card,
  title: 'Games (shared)/Components/Cards/Card',
  argTypes: {
    pattern: {
      options: [Pattern.Tarot, Pattern.Franconian, Pattern.Skat],
      control: {
        type: 'radio',
      },
    },
  },
};
const myCard: ICard = {
  color: CardColor.Clubs,
  value: 13,
};
export const Tarot = {
  args: {
    pattern: Pattern.Tarot,
    type: myCard,
    width: 104,
  },
};
export const Franconian = {
  args: {
    pattern: Pattern.Franconian,
    type: myCard,
    width: 104,
  },
};
export const Skat = {
  args: {
    pattern: Pattern.Skat,
    type: myCard,
    width: 104,
  },
};
