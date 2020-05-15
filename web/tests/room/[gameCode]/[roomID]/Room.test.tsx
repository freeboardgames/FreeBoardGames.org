import React from 'react';
import Room from 'pages/room/[gameCode]/[roomID]/Room';
import { IPlayerInRoom, LobbyService, IRoomMetadata } from 'components/App/Lobby/LobbyService';
import { render, waitFor, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { AuthData } from '../../../../src/redux/actions';

jest.mock('js-cookie');

const mockStore = configureMockStore();
let store: any;

beforeEach(() => {
  store = mockStore({});
});

afterEach(cleanup);

describe('Room Lobby', () => {
  it('should prompt for name', async () => {
    Storage.prototype.getItem = jest.fn(() => undefined);
    const { getByText } = render(
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
    );
    await waitFor(() => expect(getByText(/Enter Your Nickname/)).toBeTruthy());
  });

  it('should load when given a nickname', async () => {
    const storeData: AuthData = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
    const { getByText } = render(
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
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
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
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
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
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
    const storeData: AuthData = { ready: true, loggedIn: true, nickname: 'fooplayer' };
    store = mockStore({ user: { ...storeData } });
    const { getByText } = render(
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
    );
    await waitFor(() => expect(getByText(/fooplayer/)).toBeTruthy());
  });

  it('should edit nickname', async () => {
    const storeData: AuthData = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
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
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
    );
    await waitFor(() => expect(wrapper.getByText(/fooplayer/)).toBeTruthy());
    fireEvent.click(wrapper.getByTestId('editNickname'));
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
});
