import { ListPlayers } from './ListPlayers';
import { JoinRoom_joinRoom } from 'gqlTypes/JoinRoom';
export default {
  title: 'Infrastructure/Room/ListPlayers',
};
const roomMetadata: JoinRoom_joinRoom = {
  __typename: 'Room' as const,
  gameCode: 'secretcodes',
  capacity: 4,
  isPublic: false,
  matchId: null,
  userId: 1,
  userMemberships: [
    {
      __typename: 'RoomMembership' as const,
      isCreator: true,
      user: {
        __typename: 'User' as const,
        id: 0,
        nickname: 'Bob',
      },
    },
    {
      __typename: 'RoomMembership' as const,
      isCreator: false,
      user: {
        __typename: 'User' as const,
        id: 1,
        nickname: 'Alice',
      },
    },
  ],
};

const editNickname = () => {
  alert('editNickname called');
};

const shuffleUsers = () => () => {
  alert('shuffleUsers called');
};

const moveUpUser = () => () => {
  alert('moveUpUser called');
};

const removeUser = () => () => {
  alert('removeUser called');
};

const changeCapacity = (delta) => () => {
  alert(`Capacity changed: ${delta}`);
};

export const example = () => (
  <ListPlayers
    changeCapacity={changeCapacity}
    roomMetadata={roomMetadata}
    editNickname={editNickname}
    shuffleUsers={shuffleUsers}
    moveUpUser={moveUpUser}
    removeUser={removeUser}
    userId={1}
  />
);
export const isCreator = () => (
  <ListPlayers
    changeCapacity={changeCapacity}
    roomMetadata={roomMetadata}
    editNickname={editNickname}
    shuffleUsers={shuffleUsers}
    moveUpUser={moveUpUser}
    removeUser={removeUser}
    userId={0}
  />
);
