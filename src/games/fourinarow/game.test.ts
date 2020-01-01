import { Client } from '@freeboardgame.org/boardgame.io/client';
import { ConnectFourGame, generateGrid } from './game';
import { numOfColumns, neededToWin } from './constants';

function getTestClient(grid: any) {
  // create a custom scenario
  const ConnectFourCustomScenario = {
    ...ConnectFourGame,
    setup: () => ({
      grid: grid,
    }),
  };

  // initialize the client with your custom scenario
  const client = Client({
    game: ConnectFourCustomScenario,
  });

  return client;
}

// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it('should declare player 0 as the winner', () => {
  const client = getTestClient(generateGrid());

  for (var i = 0; i < neededToWin - 1; i++) {
    client.moves.selectColumn(10);
    client.moves.selectColumn(20);
  }
  client.moves.selectColumn(10); // this will make player "0" win

  // get the latest game state
  const { ctx } = client.store.getState();

  // player '0' should be declared the winner
  expect(ctx.gameover).toEqual({ winner: '0' });
});

it('should declare player 1 as the winner', () => {
  const client = getTestClient(generateGrid());

  for (var i = 0; i < neededToWin - 1; i++) {
    client.moves.selectColumn(10);
    client.moves.selectColumn(20);
  }
  client.moves.selectColumn(30);
  client.moves.selectColumn(20); // this will make player "1" win

  // get the latest game state
  const { ctx } = client.store.getState();

  // player '0' should be declared the winner
  expect(ctx.gameover).toEqual({ winner: '1' });
});

it('should decalre a draw', () => {
  const client = getTestClient(generateGrid());

  // making moves that will lead to a draw
  for (var i = 0; i < neededToWin - 1; i++) {
    for (var j = 0; j < numOfColumns; j++) {
      client.moves.selectColumn(10 * j);
    }
  }
  client.moves.selectColumn(10); // making a random move to break pattern
  for (var i = 0; i < neededToWin - 1; i++) {
    for (var j = numOfColumns - 1; j >= 0; j--) {
      client.moves.selectColumn(10 * j);
    }
  }

  // get the latest game state
  const { ctx } = client.store.getState();

  // should be a draw
  expect(ctx.gameover).toEqual({ draw: true });
});
