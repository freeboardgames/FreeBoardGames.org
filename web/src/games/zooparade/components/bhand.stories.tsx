import { BHand } from './bhand';

export default {
  title: 'Games/Hanabi/Components/Hand',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

const onPlay = (value) => {
  alert(`onPlay: ${value}`);
};
const onTrash = (value) => {
  alert(`onTrash: ${value}`);
};
const hand = {
  player: 1,
  cards: [
    { id: 0, color: 4, value: 3 },
    { id: 1, color: 3, value: 2 },
    { id: 2, color: 4, value: 3 },
  ],
  hints: [
    { color: [1, 0, -1, -1, 0], value: [1, 0, 0, 0, 0] },
    { color: [0, 0, 0, 1, 0], value: [0, 0, -1, -1, 1] },
    { color: [0, 1, 0, 0, 0], value: [0, 0, 0, 1, 0] },
  ],
};

export const MyHandOnMyTurn = () => (
  <BHand me={true} myTurn={true} onPlay={onPlay} onTrash={onTrash} keyPropagation={'foo'} hand={hand} />
);

export const MyHandNotOnMyTurn = () => (
  <BHand me={true} myTurn={false} onPlay={onPlay} onTrash={onTrash} keyPropagation={'bar'} hand={hand} />
);

export const SomebodyElseHand = () => (
  <BHand me={false} myTurn={false} onPlay={onPlay} onTrash={onTrash} keyPropagation={'baz'} hand={hand} />
);
