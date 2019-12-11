import React from 'react';
import { Board } from './board';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { GameMode } from '../../App/Game/GameModePicker';
import { TictactoeGame } from './game';
import { Client } from '@freeboardgame.org/boardgame.io/client';

Enzyme.configure({ adapter: new Adapter() });

test('clicking a cell on the board', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell = jest.fn();
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
          gameCode: 'tictactoeplus',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  comp
    .find('rect')
    .at(0)
    .simulate('click');
  expect(client.moves.clickCell.mock.calls.length).to.equal(1);
});

test('click a cell that has already been played', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell = jest.fn();
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
          gameCode: 'tictactoeplus',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  comp
    .find('rect')
    .at(0)
    .simulate('click');
  expect(client.moves.clickCell.mock.calls.length).to.equal(0);
});

test('render board - one X and one O - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
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
          gameCode: 'tictactoeplus',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain("Red's turn");
  expect(comp.find('rect').length).to.equal(16); // 16 rectangles
  expect(comp.find('.cross').length + comp.find('circle').length + comp.find('circle').length).to.equal(2); // total 2 items
});

test("render board - O's turn - local friend", () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
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
          gameCode: 'tictactoeplus',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain("Green's turn");
});

test('render board - X wins - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('red won');
});

test('render board - O wins - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('green won');
});

test('render board - X wins - AI', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.AI,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('you won');
});

test('render board - O wins - AI', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.AI,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('you lost');
});

test('render board - O wins - draw', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.AI,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('draw');
});

test('render board - draw - local friend', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.LocalFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('draw');
});

test('render board - our turn - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
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
          gameCode: 'tictactoeplus',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('YOUR TURN');
});

test('render board - their turn - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
  const state0 = client.store.getState();
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'1'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('Waiting for opponent');
});

test('render board - one X and one O - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // X on the top left cell
  client.moves.clickCell(4); // O on the middle cell
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
          gameCode: 'tictactoeplus',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.find('.cross').length).to.equal(1); // one X
  expect(comp.find('circle').length).to.equal(1); // one O
});

test('render board - we win - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '0' } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('you won');
});

test('render board - we lose - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: '1' } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('you lost');
});

test('render board - draw - online', () => {
  const client = Client({
    game: TictactoeGame,
  });
  const state0 = client.store.getState();
  const state1 = { ...state0, ctx: { ...state0.ctx, gameover: { winner: undefined } } };
  const comp = Enzyme.mount(
    <MemoryRouter>
      <Board
        G={state1.G}
        ctx={state1.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'tictactoeplus',
          mode: GameMode.OnlineFriend,
        }}
      />
    </MemoryRouter>,
  );
  expect(comp.html()).to.contain('draw');
});

test('render board - AI', () => {
  const client = Client({
    game: TictactoeGame,
  });
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
          gameCode: 'tictactoeplus',
          mode: GameMode.AI,
        }}
      />
    </MemoryRouter>,
  );
  comp
    .find('rect')
    .at(0)
    .simulate('click');
  expect(comp.html()).to.contain("Red's turn");
});
