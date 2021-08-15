import { BButtons } from './bbuttons';
import { gameDecorator } from '../decorators/game';

export default {
  title: 'Games/Zoo Parade/Components/Buttons',
  decorators: [gameDecorator],
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
  <BButtons
    myTurn={false}
    keyPropagation={'dontcare'}
    onHintColor={onHintColor}
    onHintValue={onHintValue}
    gotHints={false}
  />
);

export const InYourTurn = () => (
  <BButtons
    myTurn={true}
    keyPropagation={'dontcare'}
    onHintColor={onHintColor}
    onHintValue={onHintValue}
    gotHints={false}
  />
);
