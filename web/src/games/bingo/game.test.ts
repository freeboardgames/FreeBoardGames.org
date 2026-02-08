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

  it('should persist marked numbers after failed shout', () => {
    // call out some numbers
    for (let i = 0; i < 10; i++) {
      client.moves.incrementCallRef('0', false);
    }
    // make a failed shout with some marked numbers
    const markedIds = [0, 1, 2];
    client.moves.playerShouted('0', markedIds);

    // verify marked numbers are persisted in game state
    const player0Numbers = client.getState().G.players['0'].numbers;
    markedIds.forEach((id) => {
      expect(player0Numbers[id].marked).toBe(true);
    });

    // verify player is not a winner and lost one shout
    expect(client.getState().G.players['0'].isWinner).toBe(false);
    expect(client.getState().G.players['0'].shoutCount).toBe(MAX_BINGO_CALLS - 1);
  });

  it('should win after failed attempts with persisted marks', () => {
    // call out all numbers
    for (let i = 0; i < GRID_SIZE * COL_DELTA; i++) {
      client.moves.incrementCallRef('0', false);
    }

    // first failed shout with partial marks
    client.moves.playerShouted('0', [0, 1, 2]);
    expect(client.getState().G.players['0'].isWinner).toBe(false);
    expect(client.getState().G.players['0'].shoutCount).toBe(MAX_BINGO_CALLS - 1);

    // second shout with complete row (top row: 0,1,2,3,4)
    client.moves.playerShouted('0', [0, 1, 2, 3, 4]);
    expect(client.getState().G.players['0'].isWinner).toBe(true);
    expect(client.getState().ctx.gameover).toEqual({ winner: '0' });
  });
});
