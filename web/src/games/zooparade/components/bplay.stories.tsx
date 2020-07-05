import { BPiles } from './bpiles';
import { BPlay } from './bplay';

export default {
  title: 'Games/Hanabi/Components/Play',
};

const onPlay = () => {
  alert('Play');
};
const onTrash = () => {
  alert('Trash');
};

export const YourTurn = () => <BPlay myTurn={true} onPlay={onPlay} onTrash={onTrash} />;

export const NotYourTurn = () => <BPlay myTurn={false} onPlay={onPlay} onTrash={onTrash} />;
