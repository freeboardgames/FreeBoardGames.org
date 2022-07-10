import { Client } from 'boardgame.io/client';
import { TictactoeGame } from './game';

// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it('should declare player 1 as the winner', () => {
  // set up a specific board scenario
  const TictactoeCustomScenario = {
    ...TictactoeGame,
    setup: () => ({
      cells: ['0', '0', null, '1', '1', null, null, null, null],
    }),
  };

  // initialize the client with your custom scenario
  const client = Client({
    game: TictactoeCustomScenario,
  });

  // make some game moves
  client.moves.clickCell(8);
  client.moves.clickCell(0); // Move ignored
  client.moves.clickCell(3); // Move ignored
  client.moves.clickCell(5);

  // get the latest game state
  const { G, ctx } = client.store.getState();

  // the board should look like this now
  expect(G.cells).toEqual(['0', '0', null, '1', '1', '1', null, null, '0']);
  // player '1' should be declared the winner
  expect(ctx.gameover).toEqual({ winner: '1' });
});

it('should declare a draw', () => {
  // set up a specific board scenario
  const TictactoeCustomScenario = {
    ...TictactoeGame,
    setup: () => ({
      cells: ['1', '0', '1', '1', '0', '0', '0', '1', null],
    }),
  };

  // initialize the client with your custom scenario
  const client = Client({
    game: TictactoeCustomScenario,
  });

  client.moves.clickCell(8);
  // get the latest game state
  const { ctx } = client.store.getState();

  // a draw should be declared
  expect(ctx.gameover).toEqual({ draw: true });
});
