import { IHintMask } from '../interfaces';
import { BCardWithHint } from './bcardwithhint';

export default {
  title: 'Games/Zoo Parade/Components/Hand With Hint',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

const card = { id: 0, color: 4, value: 3 };

const hint = {
  color: [IHintMask.YES, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN],
  value: [IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
};

export const example = () => <BCardWithHint card={card} empty={null} hint={hint} keyPropagation={'foo'} />;
