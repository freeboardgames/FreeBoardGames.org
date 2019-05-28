import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { Client as ReactClient } from '@freeboardgame.org/boardgame.io/react';
import { TakeSixGame } from './game';
import { MemoryRouter } from 'react-router';
import { Board } from './board';
import { GameMode } from '../../App/Game/GameModePicker';

Enzyme.configure({ adapter: new Adapter() });

test('start', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  const comp = Enzyme.mount((
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'seabattle',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>
  ));
  expect(comp.find('CardComponent').length).toBeGreaterThanOrEqual(10);
});
