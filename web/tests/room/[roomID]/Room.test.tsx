import React from 'react';
import Room from 'pages/room/[roomID]/Room';
import { LobbyService } from 'components/App/Lobby/LobbyService';
import { render, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ReduxUserState } from 'redux/definitions';
import { Room as RoomDto } from 'dto/rooms/Room';
import { CheckinRoomResponse } from 'dto/rooms/CheckinRoomResponse';

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
    const storeData: ReduxUserState = { ready: true, loggedIn: true, nickname: 'foo' };
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
    const storeData: ReduxUserState = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
    LobbyService.checkin = jest.fn().mockRejectedValue(undefined);
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

  it('should show disabled button if not enough people joined', async () => {
    jest.useFakeTimers();
    const storeData: ReduxUserState = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
    const room: RoomDto = {
      gameCode: 'chess',
      capacity: 2,
      isPublic: false,
      creator: { nickname: 'Bob', id: 1 },
      users: [{ nickname: 'Bob', id: 1 }],
    };
    const response: CheckinRoomResponse = {
      userId: 1,
      room,
    };
    LobbyService.checkin = jest.fn().mockResolvedValue(response);
    Storage.prototype.getItem = jest.fn(() => 'fooplayer');
    const { getByTestId } = render(
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
    );
    await waitFor(() => expect(getByTestId('startButton')).toBeDisabled());
  });

  it('should show disabled button if not the creator', async () => {
    jest.useFakeTimers();
    const storeData: ReduxUserState = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
    const room: RoomDto = {
      gameCode: 'chess',
      capacity: 2,
      isPublic: false,
      creator: { nickname: 'Bob', id: 1 },
      users: [
        { nickname: 'Bob', id: 1 },
        { nickname: 'Alice', id: 2 },
      ],
    };
    const response: CheckinRoomResponse = {
      userId: 2,
      room,
    };
    LobbyService.checkin = jest.fn().mockResolvedValue(response);
    Storage.prototype.getItem = jest.fn(() => 'fooplayer');
    const { getByTestId } = render(
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
    );
    await waitFor(() => expect(getByTestId('startButton')).toBeDisabled());
  });

  it('should show disabled button if creator and full', async () => {
    jest.useFakeTimers();
    const storeData: ReduxUserState = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
    const room: RoomDto = {
      gameCode: 'chess',
      capacity: 2,
      isPublic: false,
      creator: { nickname: 'Bob', id: 1 },
      users: [
        { nickname: 'Bob', id: 1 },
        { nickname: 'Alice', id: 2 },
      ],
    };
    const response: CheckinRoomResponse = {
      userId: 1,
      room,
    };
    LobbyService.checkin = jest.fn().mockResolvedValue(response);
    Storage.prototype.getItem = jest.fn(() => 'fooplayer');
    const { getByTestId } = render(
      <Provider store={store}>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </Provider>,
    );
    await waitFor(() => expect(getByTestId('startButton')).toBeEnabled());
  });
});
