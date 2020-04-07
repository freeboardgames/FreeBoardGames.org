import React from 'react';
import Room from 'pages/room/[gameCode]/[roomID]/Room';
import { IPlayerInRoom, LobbyService, IRoomMetadata } from 'components/App/Lobby/LobbyService';
import { render, waitFor, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Room Lobby', () => {
  it('should prompt for name', async () => {
    Storage.prototype.getItem = jest.fn(() => undefined);
    const { getByText } = render(
      <Room
        match={{
          params: { gameCode: 'chess', roomID: 'fooroom' },
        }}
      />,
    );
    await waitFor(() => expect(getByText(/Enter Your Nickname/)).toBeTruthy());
  });

  it('should load when given a nickname', async () => {
    LobbyService.getRoomMetadata = jest.fn().mockReturnValue(new Promise(() => {}));
    Storage.prototype.getItem = jest.fn(() => 'nickname');
    const { getByText } = render(
      <Room
        match={{
          params: { gameCode: 'chess', roomID: 'fooroom' },
        }}
      />,
    );
    await waitFor(() => expect(getByText(/Loading/)).toBeTruthy());
  });

  it('should show error page when metadata cannot be fetched', async () => {
    jest.useFakeTimers();
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
    const { getByText } = render(
      <Room
        match={{
          params: { gameCode: 'chess', roomID: 'fooroom' },
        }}
      />,
    );
    await waitFor(() => expect(getByText(/Failed to fetch room metadata/)).toBeTruthy());
  });

  it('should join the room if the user is not in the room', async () => {
    Storage.prototype.getItem = jest.fn(() => 'fooplayer');
    const mockMetadata: IRoomMetadata = {
      roomID: 'fooroom',
      players: [],
      numberOfPlayers: 2,
      gameCode: 'chess',
    };
    const joinRoomMock = jest.fn().mockResolvedValue(null);
    LobbyService.joinRoom = joinRoomMock;
    LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata);
    render(
      <Room
        match={{
          params: { gameCode: 'chess', roomID: 'fooroom' },
        }}
      />,
    );
    await waitFor(() => expect(joinRoomMock).toHaveBeenCalled());
  });

  it("should show a room that isn't full", async () => {
    jest.useFakeTimers();
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
    const { getByText } = render(
      <Room
        match={{
          params: { gameCode: 'chess', roomID: 'fooroom' },
        }}
      />,
    );
    await waitFor(() => expect(getByText(/fooplayer/)).toBeTruthy());
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
    LobbyService.renameUser = jest.fn();
    Storage.prototype.getItem = jest.fn((key: string) => {
      if (key === 'fbgNickname') {
        return 'fooplayer';
      }
      if (key === 'fbgCredentials') {
        return JSON.stringify({ fooroom: { playerID: 0, credential: 'sekret' } });
      }
    });
    const wrapper = render(
      <Room
        match={{
          params: { gameCode: 'chess', roomID: 'fooroom' },
        }}
      />,
    );
    await waitFor(() => expect(wrapper.getByText(/fooplayer/)).toBeTruthy());
    fireEvent.click(wrapper.getByTestId('editNickname'));
    // expect(wrapper.container).toContain('Enter Your Nickname');
    expect(wrapper.container).toHaveTextContent('Enter Your Nickname');

    const input = wrapper.getByDisplayValue('fooplayer');
    fireEvent.change(input, { target: { value: 'barplayer' } });
    fireEvent.click(wrapper.getByText('Set Nickname'));

    expect(LobbyService.renameUser).toHaveBeenCalledWith(
      'chess',
      { name: 'fooplayer', playerID: 0, roomID: 'fooroom' },
      'barplayer',
    );
  });

  // FIXME: these two tests are flaky:
  // it('should start the game if room is full', async () => {
  //   useRouter.mockImplementation(() => ({
  //     query: { gameCode: 'chess', roomID: 'fooroom' },
  //   }));
  //   const metaPlayer: IPlayerInRoom = { playerID: 0, name: 'fooplayer', roomID: 'fooroom' };
  //   const mockMetadata: IRoomMetadata = {
  //     gameCode: 'chess',
  //     roomID: 'fooroom',
  //     numberOfPlayers: 1,
  //     players: [metaPlayer],
  //     currentUser: metaPlayer,
  //   };
  //   LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata);
  //   Storage.prototype.getItem = jest.fn((key: string) => {
  //     if (key === 'fbgNickname') {
  //       return 'fooplayer';
  //     }
  //     if (key === 'fbgCredentials') {
  //       return JSON.stringify({ fooroom: { playerID: 0, credential: 'sekret' } });
  //     }
  //   });
  //   const wrapper = render(
  //     <Room
  //       router={{
  //         query: { gameCode: 'chess', roomID: 'fooroom' },
  //       }}
  //     />,
  //   );
  //   // Game starts:
  //   expect(await wrapper.findByText('Connecting...')).toBeInTheDocument();
  // });

  //   it('should update metadata', async () => {
  //     jest.useRealTimers();
  //     const metaPlayer0: IPlayerInRoom = { playerID: 0, name: 'fooplayer', roomID: 'fooroom' };
  //     const mockMetadata0: IRoomMetadata = {
  //       gameCode: 'chess',
  //       roomID: 'fooroom',
  //       numberOfPlayers: 2,
  //       players: [metaPlayer0],
  //       currentUser: metaPlayer0,
  //     };
  //     LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata0);
  //     const metaPlayer1: IPlayerInRoom = { playerID: 1, name: 'barplayer', roomID: 'fooroom' };
  //     const mockMetadata1: IRoomMetadata = {
  //       gameCode: 'chess',
  //       roomID: 'fooroom',
  //       numberOfPlayers: 2,
  //       players: [metaPlayer0, metaPlayer1],
  //       currentUser: metaPlayer0,
  //     };
  //     Storage.prototype.getItem = jest.fn((key: string) => {
  //       if (key === 'fbgNickname') {
  //         return 'fooplayer';
  //       }
  //       if (key === 'fbgCredentials') {
  //         return JSON.stringify({ fooroom: { playerID: 0, credential: 'sekret' } });
  //       }
  //     });
  //     const wrapper = render(
  //       <Room
  //         match={{
  //           params: { gameCode: 'chess', roomID: 'fooroom' },
  //         }}
  //       />,
  //     );
  //     await wait(() => expect(wrapper.getByText(/Waiting.../)).toBeTruthy());
  //     // Second player joins:
  //     LobbyService.getRoomMetadata = jest.fn().mockResolvedValue(mockMetadata1);
  //     // Game starts:
  //     await wait(() => expect(wrapper.getByText(/Connecting.../)).toBeTruthy());
  //   });
});
