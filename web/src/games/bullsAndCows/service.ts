import { Ctx } from 'boardgame.io';

export interface IG {
  attempts: any;
  colours: Colour[];
  current: any;
  currentAttempt: any;
  secret: Colour[];
  secretLength: number;
  limitOfAttempts: number;
}
export interface Colour {
  id: number;
  img: string;
  hex: string;
}

export const generateSecret = (ctx: Ctx, colours: Colour[], secretLength: number, allowToRepeat: boolean) => {
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
    G.currentAttempt &&
    G.currentAttempt.hints &&
    G.currentAttempt.hints.length > 0 &&
    G.currentAttempt.hints.every((n) => n === 1)
  ) {
    return true;
  }

  return false;
};

export const isGameOver = (G: IG) => {
  return G.limitOfAttempts === G.attempts.length;
};
