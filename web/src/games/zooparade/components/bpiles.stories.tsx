import { BPiles } from './bpiles';

export default {
  title: 'Games/Hanabi/Components/Piles',
};

export const Example = () => (
  <BPiles
    piles={[
      [
        { id: 0, color: 4, value: 3 },
        { id: 1, color: 3, value: 2 },
        { id: 2, color: 4, value: 3 },
      ],
      [
        { id: 3, color: 3, value: 4 },
        { id: 4, color: 2, value: 3 },
        { id: 5, color: 1, value: 2 },
      ],
    ]}
    keyPropagation={'foo'}
  />
);

export const Empty = () => <BPiles piles={[]} keyPropagation={'foo'} />;
