import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { Client as ReactClient } from '@freeboardgame.org/boardgame.io/react';
import { TakeSixGame } from './game';
import { MemoryRouter } from 'react-router';
import { Board } from './board';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';

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
          gameCode: 'takesix',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>
  ));
  expect(comp.find('CardComponent').length).toBeGreaterThanOrEqual(10);
});

test('win', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { winner: '0' };
  const comp = Enzyme.mount((
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'takesix',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>
  ));
  expect(comp.find('h2').at(1).text()).toEqual('Game Over, you won!');
});

test('loss', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { winner: '1' };
  const comp = Enzyme.mount((
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'takesix',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>
  ));
  expect(comp.find('h2').at(1).text()).toEqual('Game Over, you lost!');
});

test('draw', () => {
  const client = Client({
    game: TakeSixGame,
  });
  const state0 = client.store.getState();
  (state0.ctx as IGameCtx).gameover = { draw: true };
  const comp = Enzyme.mount((
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'takesix',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>
  ));
  expect(comp.find('h2').at(1).text()).toEqual('Game Over, draw!');
});
