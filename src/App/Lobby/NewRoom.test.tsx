import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { NewRoom } from './NewRoom';
import { LobbyService } from './LobbyService';

describe('New Room', () => {
  it('should redirect', async () => {
    const p = Promise.resolve('roomfoo');
    LobbyService.newRoom = jest.fn().mockReturnValue(p);
    const historyMock = jest.fn();
    const app = (
      <MemoryRouter>
        <NewRoom
          match={{
            params: { gameCode: 'chess' },
          }}
          history={{
            push: historyMock,
          }}
        />
      </MemoryRouter>
    );
    mount(app);
    await p;
    expect(historyMock.mock.calls.length).to.equal(1);
  });

  it('should show error if given invalid gamecode', () => {
    const app = (
      <MemoryRouter>
        <NewRoom
          match={{
            params: { gameCode: 'notagame' },
          }}
        />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    expect(wrapper.html()).contains('Failed to create room');
  });

  it('should show error if promise does not resolve', async () => {
    const p = Promise.reject();
    LobbyService.newRoom = jest.fn().mockReturnValue(p);
    const app = (
      <MemoryRouter>
        <NewRoom
          match={{
            params: { gameCode: 'chess' },
          }}
        />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    await wrapper;
    expect(wrapper.html()).contains('Failed to create room');
  });
});
