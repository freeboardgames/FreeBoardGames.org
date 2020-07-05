import { BHintIcon } from './bhinticon';

export default {
  title: 'Games/Hanabi/Components/Hint Icon',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

export const Blue = () => <BHintIcon hintIcon={{ color: 4, value: -1 }} keyPropagation={'foo'} />;

export const Value4 = () => <BHintIcon hintIcon={{ color: -1, value: 4 }} keyPropagation={'foo'} />;
