import { Card } from './Card';
import { CardColor, Pattern } from 'gamesShared/definitions/cards';
export default {
  component: Card,
  title: 'Games (shared)/Components/Cards/Card',
  argTypes: {
    pattern: {
      options: Object.keys(Pattern),
      mapping: Pattern,
      control: { type: 'select' },
    },
    color: {
      options: Object.keys(CardColor).filter(isNaN),
      mapping: CardColor,
      control: { type: 'select' },
    },
    value: {
      control: { type: 'range', min: 0, max: 21, step: 1 },
    },
    width: {
      control: { type: 'range', min: 20, max: 300, step: 1 },
    },
    height: {
      control: { type: 'range', min: 40, max: 500, step: 1 },
    },
    type: { table: { disable: true } },
    click: {
      action: 'clicked',
      table: { disable: true },
    },
  },
};
const Template = ({ color, value, ...rest }) => {
  return <Card type={{ color: color, value: value }} {...rest} />;
};
export const Selectable = Template.bind({});
Selectable.args = {
  color: 'Gras',
  value: 11,
  pattern: 'Franconian',
  width: 104,
};
export const NotSelectable = Template.bind({});
NotSelectable.args = {
  color: 'Trumps',
  value: 17,
  pattern: 'Tarot',
  width: 104,
  click: null,
};
