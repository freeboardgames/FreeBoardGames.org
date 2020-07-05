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

export const YourTurn = () => (
  <div style={{ maxWidth: '100px' }}>
    <BPlay myTurn={true} onPlay={onPlay} onTrash={onTrash} />
  </div>
);

export const NotYourTurn = () => <BPlay myTurn={false} onPlay={onPlay} onTrash={onTrash} />;
