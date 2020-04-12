import { HangmanState, Guesses } from './definitions';
import { setSecret, selectLetter, getWinner, getMaskedWord, isValidWord } from './util';

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
    it('should set correct letter and NOT pass turn to next player', () => {
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

    it('should set wrong letter and pass turn to next player', () => {
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
      expect(endTurn).toHaveBeenCalled();
    });

    it('should not pass the turn if the opponent already maxed out their guesses', () => {
      const fakeG: HangmanState = {
        players: {
          '0': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: {} },
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
      const endTurn = jest.fn();
      const fakeCtx: any = {
        playerID: '0',
        events: { endTurn },
      };

      const result = selectLetter(fakeG, fakeCtx, 'n');

      expect(result).toEqual({
        players: {
          '0': { secret: 'banana', secretLength: 6, hint: 'fruit', guesses: { n: [] } },
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
      });
      expect(endTurn).not.toHaveBeenCalled();
    });

    it('should declare draw if both players maxed out their guesses', () => {
      const fakeG: HangmanState = {
        players: {
          '0': {
            secret: 'banana',
            secretLength: 6,
            hint: 'fruit',
            guesses: {
              x: [],
              y: [],
              z: [],
              c: [],
              v: [],
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
      const endTurn = jest.fn();
      const endGame = jest.fn();
      const fakeCtx: any = {
        playerID: '0',
        events: { endTurn, endGame },
      };

      const result = selectLetter(fakeG, fakeCtx, 'n');

      expect(result).toEqual({
        players: {
          '0': {
            secret: 'banana',
            secretLength: 6,
            hint: 'fruit',
            guesses: {
              n: [],
              x: [],
              y: [],
              z: [],
              c: [],
              v: [],
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
      });
      expect(endTurn).not.toHaveBeenCalled();
      expect(endGame).toHaveBeenCalledWith({ draw: true });
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
            },
          },
        },
      };

      const result = getWinner(fakeG);

      expect(result).toEqual({ winner: '0' });
    });
  });
});
