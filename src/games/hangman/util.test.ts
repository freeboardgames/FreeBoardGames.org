import { HangmanState, Guesses } from './definitions';
import { setSecret, selectLetter, getWinner, getMaskedWord, isValidWord, isGuessCorrect } from './util';

describe('hangman', () => {
  describe('setSecret()', () => {
    it('should set secret correctly', () => {
      const fakeG: HangmanState = {
        players: {},
      };
      const fakeCtx: any = {
        playerID: '0',
      };

      const result = setSecret(fakeG, fakeCtx, 'banana', 'fruit');

      expect(result).toEqual({
        players: {
          '0': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: {} },
        },
      });
    });
  });

  describe('getMaskedWord()', () => {
    it('should return expected value', () => {
      const guesses: Guesses = {
        a: [0],
        p: [1, 2],
      };
      const result = getMaskedWord(guesses, 5);
      expect(result).toEqual(['a', 'p', 'p', undefined, undefined]);
    });
  });

  describe('isValidWord()', () => {
    it('should fail for an weird word', () => {
      expect(isValidWord('boo!')).toEqual(false);
    });
  });

  describe('selectLetter()', () => {
    it('should set correct letter', () => {
      const fakeG: HangmanState = {
        players: {
          '0': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: {} },
          '1': { secret: 'apple', secretLength: 5, hint: 'expensive', guesses: {} },
        },
      };
      const endTurn = jest.fn();
      const fakeCtx: any = {
        playerID: '0',
        events: { endTurn },
      };

      const result = selectLetter(fakeG, fakeCtx, 'a');

      expect(result).toEqual({
        players: {
          '0': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: { a: [0] } },
          '1': { secret: 'apple', secretLength: 5, hint: 'expensive', guesses: {} },
        },
      });
      expect(endTurn).not.toHaveBeenCalled();
    });

    it('should set wrong letter but the user continues to play', () => {
      const fakeG: HangmanState = {
        players: {
          '0': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: {} },
          '1': { secret: 'apple', secretLength: 5, hint: 'expensive', guesses: {} },
        },
      };
      const endTurn = jest.fn();
      const fakeCtx: any = {
        playerID: '0',
        events: { endTurn },
      };

      const result = selectLetter(fakeG, fakeCtx, 'n');

      expect(result).toEqual({
        players: {
          '0': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: { n: [] } },
          '1': { secret: 'apple', secretLength: 5, hint: 'expensive', guesses: {} },
        },
      });
      expect(endTurn).not.toHaveBeenCalled();
    });

    it('expect to get the secret declared if user maxed out on guesses', () => {
      const fakeG: HangmanState = {
        players: {
          '0': {
            secret: 'apple',
            secretLength: 5,
            hint: 'expensive',
            guesses: {
              x: [],
              y: [],
              z: [],
              c: [],
              v: [],
              w: [],
            },
          },
          '1': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: {} },
        },
      };
      const fakeCtx: any = {
        playerID: '0',
      };

      const result = selectLetter(fakeG, fakeCtx, 'n');

      expect(result).toEqual({
        players: {
          '0': {
            secret: 'apple',
            secretLength: 5,
            hint: 'expensive',
            guesses: {
              x: [],
              y: [],
              z: [],
              c: [],
              v: [],
              w: [],
              n: [2, 4],
            },
          },
          '1': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: {} },
        },
      });
    });
  });

  describe('getWinner()', () => {
    it('should find correct winner', () => {
      const fakeG: HangmanState = {
        players: {
          '0': {
            secret: 'banana',
            secretLength: 6,
            hint: 'fruit',
            guesses: {
              a: [0],
              p: [1, 2],
              l: [3],
              e: [4],
            },
          },
          '1': {
            secret: 'apple',
            secretLength: 5,
            hint: 'expensive',
            guesses: {
              x: [],
              y: [],
              z: [],
              c: [],
              v: [],
              w: [],
            },
          },
        },
      };

      const result = getWinner(fakeG);

      expect(result).toEqual({ winner: '0' });
    });
  });

  describe('isGuessCorrect()', () => {
    it('should find guess was correct', () => {
      const fakeG: HangmanState = {
        players: {
          '0': {
            secret: 'banana',
            secretLength: 6,
            hint: 'fruit',
            guesses: {
              a: [0],
              p: [1, 2],
              l: [3],
              e: [4],
            },
          },
          '1': {
            secret: 'apple',
            secretLength: 5,
            hint: 'expensive',
            guesses: {
              x: [],
              y: [],
              z: [],
              c: [],
              v: [],
              w: [],
            },
          },
        },
      };

      expect(isGuessCorrect(fakeG, '0')).toEqual(true);
      expect(isGuessCorrect(fakeG, '1')).toEqual(false);
    });
  });
});
