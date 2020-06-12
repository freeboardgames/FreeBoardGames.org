import React from 'react';
import Room, { ROOM_SUBSCRIPTION } from './Room';
import { LobbyService } from 'infra/common/services/LobbyService';
import { render, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ReduxUserState } from 'infra/common/redux/definitions';
import { JoinRoom_joinRoom } from 'gqlTypes/JoinRoom';
import { MockedProvider } from '@apollo/react-testing';

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
    LobbyService.joinRoom = jest.fn().mockRejectedValue(undefined);
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

  it('should display user', async () => {
    jest.useFakeTimers();
    const result: JoinRoom_joinRoom = {
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
    const subscriptionMock = {
      request: {
        query: ROOM_SUBSCRIPTION,
        variables: { jwt: 'Bob' },
      },
      result: {
        data: { roomMutated: result },
      },
    };
    const storeData: ReduxUserState = { ready: true, loggedIn: true, nickname: 'foo' };
    store = mockStore({ user: { ...storeData } });
    LobbyService.joinRoom = jest.fn().mockResolvedValue({ joinRoom: result });
    Storage.prototype.getItem = jest.fn(() => 'Bob');
    const { getByText } = render(
      <Provider store={store}>
        <MockedProvider mocks={[subscriptionMock]}>
          <Room />
        </MockedProvider>
      </Provider>,
    );
    await waitFor(() => expect(getByText(/Bob/)).toBeTruthy());
  });
});
