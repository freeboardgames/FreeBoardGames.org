import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { BombsAndBunniesGame } from '../game';

import { BgioBoard } from '../board';
import { GameMode } from 'gamesShared/definitions/mode';

Enzyme.configure({ adapter: new Adapter() });

test('game start', async () => {
  const client = Client({
    game: BombsAndBunniesGame,
  });
  const state0 = client.store.getState();
  const comp = Enzyme.mount(
    <BgioBoard
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves as any}
      playerID={'0'}
      gameArgs={{
        gameCode: 'bombsAndBunnies',
        mode: GameMode.LocalFriend,
        players: [
          { playerID: 0, name: 'Player 1' },
          { playerID: 1, name: 'Player 2' },
        ],
      }}
    />,
  );
  expect(comp.html()).toContain('Bet');
});
