import { BButtons } from './bbuttons';

export default {
  title: 'Games/Zoo Parade/Components/Buttons',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

const onHintValue = (value) => {
  alert(`Hint value: ${value}`);
};

const onHintColor = (value) => {
  alert(`Hint color: ${value}`);
};

export const NotInYourTurn = () => (
  <BButtons myTurn={false} keyPropagation={'dontcare'} onHintColor={onHintColor} onHintValue={onHintValue} />
);

export const InYourTurn = () => (
  <BButtons myTurn={true} keyPropagation={'dontcare'} onHintColor={onHintColor} onHintValue={onHintValue} />
);
