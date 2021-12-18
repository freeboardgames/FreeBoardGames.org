import { Client } from 'boardgame.io/client';
import { MAX_BINGO_CALLS, GRID_SIZE, COL_DELTA } from './constants';
import { BingoGame } from './game';

let client;

describe('Bingo Game Rules', () => {
  beforeEach(() => {
    client = Client({
      game: { ...BingoGame },
    }) as any;
  });

  it('should not allow more than 3 calls', () => {
    for (let i = 0; i < MAX_BINGO_CALLS; i++) {
      client.moves.playerShouted('0', []);
    }
    expect(client.getState().G.players['0'].shoutCount).toBe(0);
  });

  it('should declare diagonal winner', () => {
    // call out all numbers
    for (let i = 0; i < GRID_SIZE * COL_DELTA; i++) {
      client.moves.incrementCallRef('1', false);
    }
    client.moves.playerShouted('1', [4, 8, 20, 16]);
    expect(client.getState().G.players['1'].isWinner).toBe(true);
    expect(client.getState().ctx.gameover).toEqual({ winner: '1' });
  });

  it('should declare vertical winner', () => {
    // call out all numbers
    for (let i = 0; i < GRID_SIZE * COL_DELTA; i++) {
      client.moves.incrementCallRef('0', false);
    }
    client.moves.playerShouted('0', [10, 11, 13, 14]);
    expect(client.getState().G.players['0'].isWinner).toBe(true);
    expect(client.getState().ctx.gameover).toEqual({ winner: '0' });
  });

  it('should declare vertical winner', () => {
    // call out all numbers
    for (let i = 0; i < GRID_SIZE * COL_DELTA; i++) {
      client.moves.incrementCallRef('1', false);
    }
    client.moves.playerShouted('1', [15, 16, 17, 18, 19]);
    expect(client.getState().G.players['1'].isWinner).toBe(true);
    expect(client.getState().ctx.gameover).toEqual({ winner: '1' });
  });

  it('should declare draw when all shouts fail', () => {
    for (let i = 0; i < MAX_BINGO_CALLS; i++) {
      client.moves.playerShouted('0', []);
      client.moves.playerShouted('1', []);
    }
    expect(client.getState().ctx.gameover).toEqual({ draw: true });
  });

  it('should declare draw when no numbers left', () => {
    // call out all numbers
    for (let i = 0; i < GRID_SIZE * COL_DELTA + 1; i++) {
      client.moves.incrementCallRef('1', false);
    }
    expect(client.getState().ctx.gameover).toEqual({ draw: true });
  });
});
