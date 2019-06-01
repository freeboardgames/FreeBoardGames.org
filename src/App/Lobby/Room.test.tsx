import React from 'react';
import { Room } from './Room';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { IPlayerInRoom } from './LobbyService';
import { MemoryRouter } from 'react-router';

const player1: IPlayerInRoom = { playerID: 0, name: 'foobar', roomID: 'barroom' };

describe('Room Lobby', () => {
  it('should prompt for name', async () => {
    Storage.prototype.getItem = jest.fn(() => undefined);
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'foogame', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    await wrapper;
    expect(wrapper.html()).to.contain('Enter Your Nickname');
  });
});
