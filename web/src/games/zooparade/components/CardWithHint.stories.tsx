import { IHint, IHintMask } from '../interfaces';
import { CardWithHint } from './CardWithHint';

export default {
  title: 'Games/Hanabi/Components/Hand With Hint',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

const card = { id: 0, color: 4, value: 3 };

const hint = {
  color: [IHintMask.YES, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN],
  value: [IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
};

export const example = () => <CardWithHint card={card} empty={null} hint={hint} keyPropagation={'foo'} />;
