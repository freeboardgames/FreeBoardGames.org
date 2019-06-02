import React from 'react';
import { ListPlayers } from './ListPlayers';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { IPlayerInRoom } from './LobbyService';

const player1: IPlayerInRoom = { playerID: 0, name: 'foobar', roomID: 'barroom' };

describe('List of players', () => {
  it('should contain a link', () => {
    const wrapper = mount(
      <ListPlayers
        editNickname={jest.fn()}
        roomMetadata={{
          gameCode: 'foomatch',
          roomID: 'barroom',
          players: [player1],
          currentUser: player1,
          numberOfPlayers: 2,
        }}
      />,
    );
    expect(wrapper.html()).to.contain(player1.name);
  });
});
