import { JoinRoom_joinRoom } from 'gqlTypes/JoinRoom';
import { StartMatchButton } from './StartMatchButton';
import { mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

describe('Room Start Match Button', () => {
  it('should show disabled button if not enough people joined', async () => {
    const metadata: JoinRoom_joinRoom = {
      __typename: 'Room' as const,
      gameCode: 'chess',
      capacity: 2,
      isPublic: false,
      userId: 1,
      matchId: null,
      userMemberships: [
        {
          __typename: 'RoomMembership' as const,
          isCreator: true,
          user: { nickname: 'Bob', id: 1, __typename: 'User' as const },
        },
      ],
    };
    const wrapper = mount(<StartMatchButton roomMetadata={metadata} userId={1} startMatch={() => {}} />);
    expect(wrapper.find(Button).at(1).getDOMNode()).toBeDisabled();
    expect(wrapper.find(Button).at(0).getDOMNode()).toBeDisabled();
    expect(wrapper.find(Button).first().text()).toBe('Start match');
    expect(wrapper.find(Tooltip).first().prop('title')).toBe('Not enough players.');
  });

  it('should show disabled button if not the creator', async () => {
    const metadata: JoinRoom_joinRoom = {
      __typename: 'Room' as const,
      gameCode: 'chess',
      capacity: 2,
      isPublic: false,
      userId: 2,
      matchId: null,
      userMemberships: [
        {
          __typename: 'RoomMembership' as const,
          isCreator: true,
          user: { nickname: 'foo', id: 1, __typename: 'User' as const },
        },
        {
          __typename: 'RoomMembership' as const,
          isCreator: false,
          user: { nickname: 'foo', id: 2, __typename: 'User' as const },
        },
      ],
    };
    const wrapper = mount(<StartMatchButton roomMetadata={metadata} userId={2} startMatch={() => {}} />);
    expect(wrapper.find(Button).at(1).getDOMNode()).toBeDisabled();
    expect(wrapper.find(Button).at(0).getDOMNode()).toBeDisabled();
    expect(wrapper.find(Button).first().text()).toBe('Start match');
    expect(wrapper.find(Tooltip).first().prop('title')).toBe('Only foo can start.');
  });

  it('should show enabled button if creator and full', async () => {
    const metadata: JoinRoom_joinRoom = {
      __typename: 'Room' as const,
      gameCode: 'chess',
      capacity: 2,
      isPublic: false,
      userId: 1,
      matchId: null,
      userMemberships: [
        {
          __typename: 'RoomMembership' as const,
          isCreator: true,
          user: { nickname: 'foo', id: 1, __typename: 'User' as const },
        },
        {
          __typename: 'RoomMembership' as const,
          isCreator: false,
          user: { nickname: 'foo', id: 2, __typename: 'User' as const },
        },
      ],
    };
    const wrapper = mount(<StartMatchButton roomMetadata={metadata} userId={1} startMatch={() => {}} />);
    expect(wrapper.find(Button).at(0).getDOMNode()).toBeEnabled();
    expect(wrapper.find(Button).at(1).getDOMNode()).toBeEnabled();
    expect(wrapper.find(Button).first().text()).toBe('Start match');
  });
});
