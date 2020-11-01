import { Client } from 'boardgame.io/client';
import { DRAW_AFTER_N_TIMERS } from './constants';
import { SoupOfLettersGame } from './game';

let client;
let numPlayers: number = 2;

describe('SoupOfLetter Rules', () => {
  beforeEach(() => {
    client = Client({
      game: { ...SoupOfLettersGame },
    }) as any;
  });

  it('should declare draw when players are unable to find a single word.', () => {
    for (let i = 0; i < DRAW_AFTER_N_TIMERS * numPlayers; i++) {
      client.moves.changeTurn();
    }

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  it('should declare a draw when players find equal number of words', () => {
    const { G } = client.getState();
    const solution = [ ...G.solution ];

    // find a word for each players
    for (let i = 0; i < 3 * numPlayers; i++) {
      client.moves.wordFound(solution[i]);
    }

    // trigger draw
    for (let i = 0; i < DRAW_AFTER_N_TIMERS * numPlayers; i++) {
      client.moves.changeTurn();
    }

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  it('should have equal opportunity for all players', () => {
    const { G } = client.getState();
    const solution = [ ...G.solution ];

    const x = [];
    // each player solves equal number of words
    for (let i = 0; i < solution.length; i++) {
      client.moves.wordFound(solution[i]);
      x.push(client.getState().ctx.currentPlayer)
    }

    console.log(x, x.length); // see the end, it gives "1", "1" twice, and cannot understand why ???

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  it('should declare player 0 as the winner', () => {
    const { G } = client.getState();
    const solution = [ ...G.solution ];

    // player 1 solves one word less than 0
    for (let i = 0; i < G.solution.length - 1; i++) {
      client.moves.wordFound(solution[i]);
    }

    // player 0 skips one, which is solved by player 1
    client.moves.changeTurn();
    client.moves.wordFound(solution[solution.length - 1]);

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ winner: '0' });
  });
});
