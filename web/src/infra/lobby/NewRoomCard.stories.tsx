import { NewRoomCard } from './NewRoomCard';

export default {
  title: 'Infrastructure/Lobby/NewRoomCard',
};

const callback = () => alert('Called');

export const Example = () => <NewRoomCard newRoomModal={callback} />;
