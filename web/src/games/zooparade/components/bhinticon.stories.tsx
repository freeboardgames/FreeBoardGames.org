import { BHintIcon } from './bhinticon';
import { gameDecorator } from '../decorators/game';
export default {
  title: 'Games/Zoo Parade/Components/Hint Icon',
  decorators: [gameDecorator],
  parameters: {
    backgrounds: [
      {
        name: 'dark background',
        value: '#000',
        default: true,
      },
    ],
  },
};
export const Blue = () => (
  <BHintIcon
    hintIcon={{
      color: 4,
      value: -1,
    }}
    keyPropagation={'foo'}
  />
);
export const Value4 = () => (
  <BHintIcon
    hintIcon={{
      color: -1,
      value: 4,
    }}
    keyPropagation={'foo'}
  />
);
