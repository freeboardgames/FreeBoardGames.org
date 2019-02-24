import React from 'react';
import { Board } from './board';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { GameMode } from '../../App/Game/GameModePicker';
import { TictactoeGame } from './game';
import { Client } from 'flamecoals-boardgame.io/client';

Enzyme.configure({ adapter: new Adapter() });

test('render board - one X and one O - local friend', () => {

  // initialize the client with your custom scenario
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  client.moves.clickCell(8);  // X on the bottom right cell
  const state0 = client.store.getState();
  const comp = Enzyme.mount((
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
      />
    </MemoryRouter>
  ));
  expect(comp.find('circle').length).to.equal(1); // one O
  expect(comp.find('.cross').length).to.equal(2); // two X
});
