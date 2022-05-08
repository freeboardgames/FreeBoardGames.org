import { MockedProvider } from '@apollo/react-testing';
import { JoinRoom } from 'gqlTypes/JoinRoom';
import { LobbyService } from 'infra/common/services/LobbyService';
import { mock } from 'jest-mock-extended';
import React from 'react';
import { mockWithRouter } from 'test/utils/router';
import { render, screen, waitFor } from 'test/utils/rtl';

jest.mock('js-cookie');
jest.mock('infra/chat/Chat', () => ({ Chat: (p) => <div>{p.children}</div> }));

describe('Room Lobby', () => {
  beforeEach(() => {
    const setRouter = mockWithRouter();
    setRouter({ query: { roomID: 'fooroom' } });
  });

  it('should prompt for name', async () => {
    const Room = require('./Room').default;
    render(<Room />);
    await waitFor(() => expect(screen.getByText(/Enter Your Nickname/)).toBeTruthy());
  });

  it('should load when given a nickname', async () => {
    const Room = require('./Room').default;
    render(<Room />, {
      store: {
        user: { ready: true, loggedIn: true, nickname: 'foo' },
      },
    });
    await waitFor(() => expect(screen.getByText(/Loading/)).toBeInTheDocument());
  });

  it('should show error page when metadata cannot be fetched', async () => {
    const Room = require('./Room').default;
    render(<Room />, {
      store: {
        user: { ready: true, loggedIn: true, nickname: 'foo' },
      },
    });
    await waitFor(() => expect(screen.getByText(/Failed to fetch room metadata/)).toBeInTheDocument());
  });

  it('should display user', async () => {
    const mocks = [await getSubscriptionMock()];
    const joinRoom = { joinRoom: getResultMock() };

    const Room = require('./Room').default;

    jest.spyOn(LobbyService, 'joinRoom').mockResolvedValue(mock<JoinRoom>(joinRoom));
    jest.spyOn(LobbyService, 'getUserToken').mockReturnValue('fake_user_token');

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Room />
      </MockedProvider>,
      {
        store: {
          user: { ready: true, loggedIn: true, nickname: 'foo' },
        },
      },
    );
    await waitFor(() => expect(screen.getByText(/Bob/)).toBeInTheDocument());
  });
});

function getResultMock() {
  return {
    gameCode: 'chess',
    capacity: 1,
    isPublic: false,
    userId: 1,
    matchId: null,
    userMemberships: [
      {
        isCreator: true,
        position: 1,
        user: { nickname: 'Bob', id: 1 },
      },
    ],
  };
}

async function getSubscriptionMock() {
  return {
    request: {
      query: (await import('./Room')).ROOM_SUBSCRIPTION,
      variables: { roomId: 'fooroom', jwt: 'fake_user_token' },
    },
    result: {
      data: { roomMutated: getResultMock() },
    },
  };
}
