import React from 'react';
import { Board } from './board';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { GameMode } from '../../App/Game/GameModePicker';
import { ConnectFourGame } from './game';
import { Client } from '@freeboardgame.org/boardgame.io/client';

Enzyme.configure({ adapter: new Adapter() });

function getTestClient() {
  return Client({
    game: ConnectFourGame,
  });
}

function getTestComp(client: any, gameMode: any) {
  const state0 = client.store.getState();
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoe',
          mode: gameMode,
        }}
      />
    </MemoryRouter>,
  );
  return comp;
}

test('click a cell on the border', () => {
  const client = getTestClient();
  client.moves.selectColumn = jest.fn();
  const comp = getTestComp(client, GameMode.LocalFriend);
  comp
    .find('circle')
    .at(0)
    .simulate('click');
  expect(client.moves.selectColumn.mock.calls.length).to.equal(1);
});
