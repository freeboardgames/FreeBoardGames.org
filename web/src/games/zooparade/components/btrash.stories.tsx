import { BTrash } from './btrash';
import { gameDecorator } from '../decorators/game';

export default {
  title: 'Games/Zoo Parade/Components/Trash',
  decorators: [gameDecorator],
};

const card = { id: 0, color: 4, value: 3 };

export const Example = () => <BTrash card={card} />;
