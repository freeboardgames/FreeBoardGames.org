import { BHand } from './bhand';
import { IHintMask } from '../interfaces';

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
    {
      color: [IHintMask.YES, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN],
      value: [IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
    },
    {
      color: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN],
      value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.YES, IHintMask.YES],
    },
    {
      color: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
      value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN],
    },
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
