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

export const checkSecret = (current, secret) => {
  let hints = [];

  for (let i in current) {
    const pin = current[i];
    if (pin.id === secret[i].id) {
      hints.push(1);
    } else if (secret.some((s) => s.id === pin.id)) {
      hints.push(0);
    } else {
      hints.push(-1);
    }
  }

  return {
    hints: hints.sort((a, b) => b - a),
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
