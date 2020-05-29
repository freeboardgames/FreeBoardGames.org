import React from 'react';
import Room from 'pages/room/[roomID]/Room';
import { LobbyService } from 'components/App/Lobby/LobbyService';
import { render, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ReduxUserState } from 'redux/definitions';
import { CheckinRoom } from 'gqlTypes/CheckinRoom';
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
    const response: CheckinRoom = {
      checkinRoom: {
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
      },
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
    const response: CheckinRoom = {
      checkinRoom: {
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
      },
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

  it('should show enabled button if creator and full', async () => {
    jest.useFakeTimers();
    const storeData: ReduxUserState = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
    const response: CheckinRoom = {
      checkinRoom: {
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
      },
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
