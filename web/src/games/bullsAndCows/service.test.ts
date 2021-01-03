import { generateSecret, checkSecret, isVictory, isGameOver } from './service';

describe('Bulls and Cows Service', () => {
  describe('generateSecret', () => {
    const ctx: any = {
      random: {
        Die: jest.fn((x) => x),
        Shuffle: jest.fn((x) => x),
      },
    };

    let colours: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('secret should have length defined by secretLenght', () => {
      const secretLength = 3;

      const secretAllowedToRepeat = generateSecret(ctx, colours, secretLength, true);
      const secretNotAllowedToRepeat = generateSecret(ctx, colours, secretLength, false);

      expect(secretAllowedToRepeat).toHaveLength(secretLength);
      expect(secretNotAllowedToRepeat).toHaveLength(secretLength);
    });

    it('secret should not repeat', () => {
      const secretLenght = 2;
      const allowToRepeat = true;
      generateSecret(ctx, colours, secretLenght, allowToRepeat);

      expect(ctx.random.Shuffle).not.toHaveBeenCalled();
      expect(ctx.random.Die).toHaveBeenCalledTimes(secretLenght);
      expect(ctx.random.Die).toHaveBeenCalledWith(colours.length);
    });

    it('secret could randomly repeat', () => {
      const allowToRepeat = false;
      generateSecret(ctx, colours, 4, allowToRepeat);

      expect(ctx.random.Die).not.toHaveBeenCalled();
      expect(ctx.random.Shuffle).toHaveBeenCalledTimes(1);
      expect(ctx.random.Shuffle).toHaveBeenCalledWith(colours);
    });
  });

  describe('checkSecret', () => {
    let current;
    let secret;
    let guessResult;

    beforeAll(() => {
      current = [{ id: 3 }, { id: 5 }, { id: 1 }, { id: 2 }, { id: 6 }, { id: 9 }];
      secret = [{ id: 3 }, { id: 1 }, { id: 4 }, { id: 2 }, { id: 7 }, { id: 8 }];

      guessResult = checkSecret(current, secret);
    });

    it('should have the correct number of bulls', () => {
      // current[0].id === 3 && current[3].id === 2
      const bulls = guessResult.hints.filter((h) => h === 1);
      expect(bulls).toHaveLength(2);
    });

    it('should have the correct number of cows', () => {
      // current[1].id === 1
      const cows = guessResult.hints.filter((h) => h === 0);
      expect(cows).toHaveLength(1);
    });

    it('should have the correct number of none', () => {
      // current[2].id === 4 && current[4].id === 7 && current[5].id === 8
      const cows = guessResult.hints.filter((h) => h === -1);
      expect(cows).toHaveLength(3);
    });

    it('sort by bulls, cows, none', () => {
      expect(guessResult.hints).toContainValues([1, 1, 0, -1, -1, -1]);
    });

    it('should save current combination', () => {
      expect(guessResult.combination).toEqual(current);
    });
  });

  describe('isVictory', () => {
    describe.each([{}, { lastAttempt: {} }, { lastAttempt: { hints: [] } }, { lastAttempt: { hints: [0, -1] } }])(
      'G = (%o)',
      (G: any) => {
        it(`should return false, if none of the hints are bulls`, () => {
          expect(isVictory(G)).toBe(false);
        });
      },
    );

    describe.each([
      { lastAttempt: { hints: [-1, -1, -1] } },
      { lastAttempt: { hints: [0, -1, -1] } },
      { lastAttempt: { hints: [1, 0, -1] } },
      { lastAttempt: { hints: [1, 1, 0] } },
    ])('G = %o', (G: any) => {
      it(`should return false, if only a few hints are bulls`, () => {
        expect(isVictory(G)).toBe(false);
      });
    });

    it('should return true, if all a few hints are bulls', () => {
      const G: any = { lastAttempt: { hints: [1, 1, 1] } };
      expect(isVictory(G)).toBe(true);
    });
  });

  describe('isGameOver', () => {
    it('should ignore while player still has attempts', () => {
      const G: any = { limitOfAttempts: 3, attempts: [{}, {}] };
      expect(isGameOver(G)).toBe(false);
    });

    it('should finish the game while player used all attempts', () => {
      const G: any = { limitOfAttempts: 3, attempts: [{}, {}, {}] };
      expect(isGameOver(G)).toBe(true);
    });
  });
});
