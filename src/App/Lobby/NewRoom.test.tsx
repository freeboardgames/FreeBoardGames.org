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
    const p = Promise.resolve('roomfoo');
    LobbyService.newRoom = jest.fn().mockReturnValue(p);
    const historyMock = jest.fn();
    const app = (
      <MemoryRouter>
        <NewRoom
          match={{
            params: { gameCode: 'chess', numPlayers: 2 },
          }}
          history={{
            push: historyMock,
          }}
        />
      </MemoryRouter>
    );
    mount(app);
    await p;
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
