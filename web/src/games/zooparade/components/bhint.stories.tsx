import { BHint } from './bhint';
import { IHintMask } from '../interfaces';

export default {
  title: 'Games/Hanabi/Components/Hint',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

export const Example = () => (
  <BHint
    hint={{
      color: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.YES],
      value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN],
    }}
    keyPropagation={'foo'}
  />
);
