import { BHint } from './bhint';

export default {
  title: 'Games/Hanabi/Components/Hint',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

export const Example = () => (
  <BHint hint={{ color: [0, 1, 0, -1, 0], value: [0, -1, 0, 1, 0] }} keyPropagation={'foo'} />
);
