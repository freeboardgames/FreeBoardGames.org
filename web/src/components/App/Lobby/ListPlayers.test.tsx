import React from 'react';
import { ListPlayers } from './ListPlayers';
import { mount } from 'enzyme';
import { IPlayerInRoom } from './LobbyService';
import { User } from 'dto/users/User';

const user1: User = { nickname: 'foo' };

describe('List of players', () => {
  it('should contain a link', () => {
    const wrapper = mount(
      <ListPlayers
        editNickname={jest.fn()}
        roomMetadata={{
          gameCode: 'foomatch',
          users: [user1],
          isPublic: false,
          capacity: 2,
        }}
      />,
    );
    expect(wrapper.html()).toContain(user1.nickname);
  });
});
