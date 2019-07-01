import React from 'react';
import { Room } from './Room';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { IPlayerInRoom, LobbyService, IRoomMetadata } from './LobbyService';
import { MemoryRouter } from 'react-router';
import EditIcon from '@material-ui/icons/Edit';

describe('Room Lobby', () => {
  it('should prompt for name', async () => {
    Storage.prototype.getItem = jest.fn(() => undefined);
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    await wrapper;
    expect(wrapper.html()).to.contain('Enter Your Nickname');
  });

  it('should load when given a nickname', async () => {
    LobbyService.getRoomMetadata = jest.fn().mockReturnValue(new Promise(() => {}));
    Storage.prototype.getItem = jest.fn(() => 'nickname');
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    await wrapper;
    expect(wrapper.html()).to.contain('Loading');
  });

  it('should show error page when metadata cannot be fetched', async () => {
    const metaPlayer: IPlayerInRoom = { playerID: 0, name: 'fooplayer', roomID: 'fooroom' };
    const mockMetadata: IRoomMetadata = {
      gameCode: 'chess',
      roomID: 'fooroom',
      numberOfPlayers: 2,
      players: [metaPlayer],
      currentUser: metaPlayer,
    };
    LobbyService.joinRoom = jest.fn().mockResolvedValue(mockMetadata);
    LobbyService.getRoomMetadata = jest.fn().mockRejectedValue(undefined);
    Storage.prototype.getItem = jest.fn(() => 'fooplayer');
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    jest.useFakeTimers();
    const wrapper = mount(app);
    await wrapper;
    await (wrapper.find('Room').instance() as any).promise;
    expect(wrapper.html()).to.contain('Failed to fetch room metadata');
  });

  it('should join the room if the user is not in the room', async () => {
    const mockMetadata: IRoomMetadata = {
      roomID: 'fooroom',
      players: [],
      numberOfPlayers: 2,
      gameCode: 'chess',
    };
    const joinRoomMock = jest.fn().mockResolvedValue(null);
    LobbyService.joinRoom = joinRoomMock;
    LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata);
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    await wrapper;
    expect(joinRoomMock.mock.calls.length).to.equal(1);
  });

  it("should show a room that isn't full", async () => {
    LobbyService.getRoomMetadata = jest.fn().mockReturnValue(new Promise(() => {}));
    const metaPlayer: IPlayerInRoom = { playerID: 0, name: 'fooplayer', roomID: 'fooroom' };
    const mockMetadata: IRoomMetadata = {
      gameCode: 'chess',
      roomID: 'fooroom',
      numberOfPlayers: 2,
      players: [metaPlayer],
      currentUser: metaPlayer,
    };
    LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata);
    Storage.prototype.getItem = jest.fn(() => 'fooplayer');
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    jest.useFakeTimers();
    const wrapper = mount(app);
    await wrapper;
    await (wrapper.find('Room').instance() as any).promise;
    expect(wrapper.html()).to.contain('fooplayer');
  });

  it('should edit nickname', async () => {
    LobbyService.getRoomMetadata = jest.fn().mockReturnValue(new Promise(() => {}));
    const metaPlayer: IPlayerInRoom = { playerID: 0, name: 'fooplayer', roomID: 'fooroom' };
    const mockMetadata: IRoomMetadata = {
      gameCode: 'chess',
      roomID: 'fooroom',
      numberOfPlayers: 2,
      players: [metaPlayer],
      currentUser: metaPlayer,
    };
    LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata);
    Storage.prototype.getItem = jest.fn(() => 'fooplayer');
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    jest.useFakeTimers();
    const wrapper = mount(app);
    await wrapper;
    await (wrapper.find('Room').instance() as any).promise;
    wrapper.update();
    const editIcon = wrapper.find(EditIcon);
    editIcon.simulate('click');
    expect(wrapper.html()).to.contain('Enter Your Nickname');
  });

  it('should show the game if room is full', async () => {
    LobbyService.getRoomMetadata = jest.fn().mockReturnValue(new Promise(() => {}));
    const metaPlayer: IPlayerInRoom = { playerID: 0, name: 'fooplayer', roomID: 'fooroom' };
    const mockMetadata: IRoomMetadata = {
      gameCode: 'chess',
      roomID: 'fooroom',
      numberOfPlayers: 1,
      players: [metaPlayer],
      currentUser: metaPlayer,
    };
    LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata);
    Storage.prototype.getItem = jest.fn((key: string) => {
      if (key === 'fbgNickname') {
        return 'fooplayer';
      }
      if (key === 'fbgCredentials') {
        return JSON.stringify({ fooroom: { playerID: 0, credential: 'sekret' } });
      }
    });
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    jest.useFakeTimers();
    const wrapper = mount(app);
    await wrapper;
    await (wrapper.find('Room').instance() as any).promise;
    expect(wrapper.find('Room').state('gameReady')).to.equal(true);
  });
});
