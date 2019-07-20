import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { NewRoom } from './NewRoom';
import { LobbyService } from './LobbyService';
import { render, wait, cleanup } from '@testing-library/react';
require('@testing-library/jest-dom/extend-expect');

describe('New Room', () => {
  afterEach(cleanup);
  it('should redirect', async () => {
    const newRoomMock = jest.fn().mockResolvedValue('roomfoo');
    LobbyService.newRoom = newRoomMock;
    const historyMock = jest.fn();
    const app = (
      <MemoryRouter>
        <NewRoom
          match={{
            params: { gameCode: 'chess', numPlayers: 2 },
          }}
          history={{
            replace: historyMock,
          }}
        />
      </MemoryRouter>
    );
    mount(app);
    await newRoomMock;
    expect(historyMock).toHaveBeenCalled();
  });

  it('should show error if given invalid gamecode', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <NewRoom
          match={{
            params: { gameCode: 'notagame', numPlayers: 2 },
          }}
        />
      </MemoryRouter>,
    );
    await wait(() => expect(getByText(/Failed to create room/)).toBeTruthy());
  });

  it('should show error if promise does not resolve', async () => {
    const p = Promise.reject();
    LobbyService.newRoom = jest.fn().mockReturnValue(p);
    const { getByText } = render(
      <MemoryRouter>
        <NewRoom
          match={{
            params: { gameCode: 'chess', numPlayers: 2 },
          }}
        />
      </MemoryRouter>,
    );
    await wait(() => expect(getByText(/Failed to create room/)).toBeTruthy());
  });
});
