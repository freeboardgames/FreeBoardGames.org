import { Card } from './Card';
import { Suit, Pattern } from 'gamesShared/definitions/cards';

export default {
  component: Card,
  title: 'Games (shared)/Components/Cards/Card',
  args: {
    suit: 'Gras',
    value: 11,
    pattern: 'Franconian',
    width: 104,
  },
  argTypes: {
    pattern: {
      options: Object.keys(Pattern),
      mapping: Pattern,
      control: { type: 'select' },
    },
    suit: {
      options: Object.keys(Suit).filter((c) => isNaN(+c)),
      mapping: Suit,
      control: { type: 'select' },
    },
    value: {
      control: { type: 'range', min: 0, max: 21, step: 1 },
    },
    width: {
      control: { type: 'range', min: 20, max: 300, step: 1 },
    },
    height: { control: false },
    type: { table: { disable: true } },
    click: {
      action: 'clicked',
      table: { disable: true },
    },
  },
};
const Template = ({ suit, value, pattern, ...rest }) => {
  return <Card pattern={pattern} type={{ suit: suit, value: value }} {...rest} />;
};
export const Selectable = Template.bind({});
export const NotSelectable = Template.bind({});
NotSelectable.args = { click: null };
export const SetHeight = Template.bind({});
SetHeight.args = { width: null, height: 200 };
SetHeight.argTypes = {
  width: { control: false },
  height: {
    control: { type: 'range', min: 40, max: 500, step: 1 },
  },
};
