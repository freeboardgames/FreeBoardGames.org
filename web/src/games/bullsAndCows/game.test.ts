import { Client } from 'boardgame.io/client';
import { BullsAndCowsGame } from './game';
import { checkSecret, generateSecret, isVictory, isGameOver } from './service';

jest.mock('./service', () => ({
  ...jest.requireActual('./service'),
  checkSecret: jest.fn(),
  isVictory: jest.fn(),
  isGameOver: jest.fn(),
  generateSecret: jest.fn(),
}));

describe('Bulls and Cows game', () => {
  let client;

  beforeEach(() => {
    client = Client({
      game: {
        ...BullsAndCowsGame,
      },
    }) as any;
  });

  describe('setup', () => {
    it('should setup with default values and secret', () => {
      const { G } = client.getState();

      expect(G.attempts).toEqual([]);
      expect(G.current).toEqual([null, null, null, null]);
      expect(G.secretLength).toBe(4);
      expect(G.limitOfAttempts).toBe(12);
      expect(G.lastAttempt).toBe(null);

      expect(generateSecret).toHaveBeenCalledWith(expect.anything(), G.colours, G.secretLength, false);
    });
  });

  describe('playerView', () => {
    beforeEach(() => {
      client = Client({
        game: {
          ...BullsAndCowsGame,
          setup: () => ({
            limitOfAttempts: 2,
            attempts: [{}],
            current: [{ id: 3 }, { id: 1 }, { id: 4 }, { id: 5 }],
          }),
        },
      }) as any;
    });

    it('should hide secret from playerView during gameplay', () => {
      const { G, ctx } = client.getState();

      expect(G.secret).toEqual([]);
      expect(ctx.gameover).toBeUndefined();
    });
  });

  describe('moves', () => {
    describe('setColourInPosition', () => {
      it('should set the colour in the right position', () => {
        const colourId = 3; // same as colours[2].id
        const position = 2;

        client.moves.setColourInPosition(colourId, position);
        client.updatePlayerID('0');

        const {
          G: { current, colours },
        } = client.getState();

        expect(current[position]).toEqual(colours[2]);
      });
    });

    describe('check', () => {
      it('should ignore if any character is null', () => {
        client = Client({
          game: {
            ...BullsAndCowsGame,
            setup: () => ({
              attempts: [],
              current: [{ id: 3 }, { id: 1 }, null, { id: 5 }],
            }),
          },
        }) as any;

        client.moves.check();
        client.updatePlayerID('0');

        const {
          G: { attempts },
        } = client.getState();

        expect(attempts).toHaveLength(0);
      });

      it('should set the current attempt', () => {
        const MOCK_CHECK_SECRET_VALUE = [{ checkSecret: 'value' }];

        (checkSecret as jest.Mock).mockReturnValueOnce(MOCK_CHECK_SECRET_VALUE);
        (isVictory as jest.Mock).mockReturnValueOnce(false);
        (isGameOver as jest.Mock).mockReturnValueOnce(false);

        client.moves.setColourInPosition(5, 0);
        client.moves.setColourInPosition(3, 1);
        client.moves.setColourInPosition(1, 2);
        client.moves.setColourInPosition(2, 3);

        client.moves.check();
        client.updatePlayerID('0');

        const { G } = client.getState();

        expect(checkSecret).toHaveBeenCalled();

        expect(G.lastAttempt).toEqual(MOCK_CHECK_SECRET_VALUE);
        expect(G.attempts[0]).toEqual(MOCK_CHECK_SECRET_VALUE);
      });
    });
  });
});
