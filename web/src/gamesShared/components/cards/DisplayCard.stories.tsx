import { DisplayCard } from './DisplayCard';
import { ICard, Pattern, CardColor } from 'gamesShared/definitions/cards';

const card: ICard = { color: CardColor.Spades, value: 9 };

export default {
  component: DisplayCard,
  title: 'Games (shared)/Components/Cards/DisplayCard',
};

const Template = (args) => <DisplayCard {...args} />;

export const displaySpades = Template.bind({});

displaySpades.args = {
  description: 'Trump Spades',
  card,
  pattern: Pattern.Skat,
};
