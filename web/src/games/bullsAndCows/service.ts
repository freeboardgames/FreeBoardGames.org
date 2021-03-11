import { Ctx } from 'boardgame.io';

export interface IMoves {
  setColourInPosition: (colourId: number, position: number) => void;
  check: () => string | void;
}
export interface IAttempt {
  hints: number[];
  combination: IColour[];
}
export interface IG {
  attempts: IAttempt[];
  colours: IColour[];
  current: IColour[];
  secret: IColour[];
  secretLength: number;
  lastAttempt: IAttempt | null;
  limitOfAttempts: number;
}
export interface IColour {
  id: number;
  img: string;
  hex: string;
}

export const generateSecret = (ctx: Ctx, colours: IColour[], secretLength: number, allowToRepeat: boolean) => {
  if (allowToRepeat) {
    const secret = [];
    for (let i = 0; i < secretLength; i++) {
      const n = ctx.random.Die(colours.length);
      secret.push(colours[n - 1]);
    }

    return secret;
  }

  return ctx.random.Shuffle(colours).slice(0, secretLength);
};

const findFirstIndex = (list: number[], id: number) => {
  const indexes = [];
  list.filter((item, index) => {
    if (item === id) {
      indexes.push(index);
      return true;
    }

    return false;
  });

  return indexes[0] || null;
};

const isBull = (secret, value, index) => {
  return secret[index] === value;
};

const isCow = (secret, value) => {
  return secret.includes(value);
};

export const checkSecret = (current: IColour[], secret: IColour[]): IAttempt => {
  let hints = [];
  let secretToCheck = secret.map((s) => s.id);

  for (let i in current) {
    const { id } = current[i];
    if (secretToCheck[i] !== null && isBull(secretToCheck, id, i)) {
      hints.push(1);
      secretToCheck[i] = null;
    }
  }

  for (let i in current) {
    const { id } = current[i];
    if (secretToCheck[i] !== null && isCow(secretToCheck, id)) {
      hints.push(0);
      const index = findFirstIndex(secretToCheck, id);
      secretToCheck[index] = null;
    }
  }

  const leftHints = secretToCheck.filter((s) => s !== null).map(() => -1);

  return {
    hints: [...hints, ...leftHints],
    combination: current,
  };
};

export const isVictory = (G: IG) => {
  if (
    G.lastAttempt &&
    G.lastAttempt.hints &&
    G.lastAttempt.hints.length > 0 &&
    G.lastAttempt.hints.every((n) => n === 1)
  ) {
    return true;
  }

  return false;
};

export const isGameOver = (G: IG) => {
  return G.limitOfAttempts === G.attempts.length;
};
