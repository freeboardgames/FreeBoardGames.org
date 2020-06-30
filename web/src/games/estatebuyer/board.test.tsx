import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { EstateBuyerGame } from './game';

import { Board } from './board';
import { GameMode } from 'gamesShared/definitions/mode';

Enzyme.configure({ adapter: new Adapter() });

test('game start', async () => {
  const client = Client({
    game: EstateBuyerGame,
  });
  const state0 = client.store.getState();
  const comp = Enzyme.mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      gameArgs={{
        gameCode: 'estatebuyer',
        mode: GameMode.LocalFriend,
        players: [
          { playerID: 0, name: 'Player 1' },
          { playerID: 1, name: 'Player 2' },
        ],
      }}
    />,
  );
  expect(comp.html()).toContain('START GAME');
});
