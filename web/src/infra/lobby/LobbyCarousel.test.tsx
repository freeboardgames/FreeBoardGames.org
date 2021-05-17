import React from 'react';
import { LobbyService } from 'infra/common/services/LobbyService';
import { render, waitFor, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MockedProvider } from '@apollo/react-testing';
import LobbyCarousel, { LOBBIES_SUBSCRIPTION } from './LobbyCarousel';
import { GetLobby_lobby } from 'gqlTypes/GetLobby';

const mockStore = configureMockStore();
let store: any;

beforeEach(() => {
  store = mockStore({});
});

afterEach(cleanup);

describe('Room Lobby', () => {
  it('should show error page when initial fetch fails', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <LobbyCarousel />
      </Provider>,
    );
    await waitFor(() => expect(getByText(/error/)).toBeTruthy());
  });

  it('should display rooms', async () => {
    jest.useFakeTimers();
    const result: GetLobby_lobby = {
      __typename: 'Lobby' as const,
      rooms: [
        { __typename: 'Room' as const, capacity: 2, gameCode: 'chess', id: 'foo', userMemberships: [] },
        { __typename: 'Room' as const, capacity: 2, gameCode: 'checkers', id: 'bar', userMemberships: [] },
        { __typename: 'Room' as const, capacity: 2, gameCode: 'tictactoe', id: 'baz', userMemberships: [] },
        { __typename: 'Room' as const, capacity: 2, gameCode: 'chess', id: 'qux', userMemberships: [] },
        { __typename: 'Room' as const, capacity: 2, gameCode: 'tictactoe', id: 'qax', userMemberships: [] },
      ],
    };
    const subscriptionMock = {
      request: {
        query: LOBBIES_SUBSCRIPTION,
        variables: {},
      },
      result: {
        data: { lobbyMutated: result },
      },
    };
    LobbyService.getLobby = jest.fn().mockResolvedValue({ lobby: result });
    const { getByText } = render(
      <Provider store={store}>
        <MockedProvider mocks={[subscriptionMock]}>
          <LobbyCarousel />
        </MockedProvider>
      </Provider>,
    );
    await waitFor(() => expect(getByText(/Chess/)).toBeTruthy());
  });
});
