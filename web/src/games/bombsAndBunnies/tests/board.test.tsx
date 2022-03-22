import React from 'react';
import { makeRender, screen } from 'test/utils/rtl';
import { Client } from 'boardgame.io/client';
import { BombsAndBunniesGame } from '../game';

import { BgioBoard } from '../board';
import { GameMode } from 'gamesShared/definitions/mode';

test('game start', async () => {
  const client = Client({
    game: BombsAndBunniesGame,
  });
  const state0 = client.store.getState();

  const render = makeRender({ gameCode: 'bombsAndBunnies' });

  render(
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
  const bet = screen.getAllByTestId('base-button');

  expect(bet).toHaveLength(2);
  expect(bet[0]).toHaveTextContent('Bet!');
  expect(bet[1]).toHaveTextContent('Skip');
});
