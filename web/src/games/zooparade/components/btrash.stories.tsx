import { BTrash } from './btrash';

export default {
  title: 'Games/Hanabi/Components/Trash',
};

const card = { id: 0, color: 4, value: 3 };

export const Example = () => <BTrash card={card} />;
