import { ListPlayers } from './ListPlayers';
import { CheckinRoom_checkinRoom } from 'gqlTypes/CheckinRoom';

export default {
  title: 'Infrastructure/Room/ListPlayers',
};

const roomMetadata: CheckinRoom_checkinRoom = {
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

export const example = () => <ListPlayers roomMetadata={roomMetadata} editNickname={editNickname} userId={1} />;
