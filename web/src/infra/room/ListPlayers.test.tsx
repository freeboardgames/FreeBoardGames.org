import React from 'react';
import { ListPlayers } from './ListPlayers';
import { mount } from 'enzyme';

const user1membership = {
  user: { nickname: 'foo', id: 123, __typename: 'User' as const },
  isCreator: true,
  position: 1,
  __typename: 'RoomMembership' as const,
};

describe('List of players', () => {
  it('should contain a link', () => {
    const wrapper = mount(
      <ListPlayers
        editNickname={jest.fn()}
        removeUser={jest.fn()}
        changeCapacity={jest.fn()}
        roomMetadata={{
          gameCode: 'chess',
          userMemberships: [user1membership],
          isPublic: false,
          capacity: 2,
          userId: 123,
          matchId: null,
          __typename: 'Room' as const,
        }}
      />,
    );
    expect(wrapper.html()).toContain(user1membership.user.nickname);
  });
});
