import React from 'react';
import { Board } from './board';
import { SeabattleGame } from './game';
import { Client } from 'boardgame.io/client';
import { Client as ReactClient } from 'boardgame.io/react';
import { GameMode } from 'gamesShared/definitions/mode';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const BoardTest = (props: any) => (
  <Board
    {...{
      ...props,
      gameArgs: {
        gameCode: 'seabattle',
        mode: GameMode.LocalFriend,
      },
    }}
  />
);

test('set ships', () => {
  const App = ReactClient({
    game: SeabattleGame,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = Enzyme.mount(<App playerID={'0'} gameID={'foo'} />);
  comp.find('button').at(2).simulate('click');
  expect(comp.html()).toContain('Waiting');
});

test('start', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const comp = Enzyme.mount(
    <Board
      G={state0.G}
      ctx={state0.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'seabattle',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  // First page must have some ships
  expect(comp.find('ShipsPlacement').length).toEqual(1);
  comp.find('button').at(1).simulate('click');
});

test('waiting opponent', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, activePlayers: { '1': null } } };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'seabattle',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  // First page must have some ships
  expect(comp.html()).toContain('Waiting');
});

test('gameover - won', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'seabattle',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  // First page must have some ships
  expect(comp.html()).toContain('won');
});

test('gameover - lost', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'seabattle',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  // First page must have some ships
  expect(comp.html()).toContain('lost');
});

test('battle', () => {
  const client = Client({
    game: SeabattleGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, phase: 'play' } };
  const comp = Enzyme.mount(
    <Board
      G={state1.G}
      ctx={state1.ctx}
      moves={client.moves}
      playerID={'0'}
      isActive={true}
      isConnected={true}
      gameArgs={{
        gameCode: 'seabattle',
        mode: GameMode.LocalFriend,
      }}
    />,
  );
  // First page must have some ships
  expect(comp.find('Battle').length).toEqual(1);
});
