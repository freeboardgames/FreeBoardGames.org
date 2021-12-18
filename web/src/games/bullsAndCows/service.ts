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
  allowToRepeat: boolean;
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

export const checkSecret = (current: IColour[], secret: IColour[]): IAttempt => {
  let hints = [];
  let secretToCheck = secret.map((s) => s.id);

  // e.g. current =  [{ id: 5 }, { id: 4 }, { id: 6 }, { id: 1 }]  ( and also other IColour attributes which are not used.)
  //      secretToCheck = [ 5, 4, 6, 1]
  //      currentToCompare = [ 5, 4, 6, 1]

  let currentToCompare = current.map((s) => s.id);

  let bullCount = 0;
  for (let i = 0; i < currentToCompare.length; i++) {
    if (currentToCompare[i] == secretToCheck[i]) {
      bullCount += 1;
    }
  }

  hints.push(Array(bullCount).fill(1));

  // Set those colors to '-1' which have already been acounted for.
  // eg: [5,4,2,1] -> [-1,4,-1,1]
  // ....[5,2,2,4] -> [-1,2,-1,4]
  secretToCheck = secretToCheck.map((value, index) => {
    return currentToCompare[index] == value ? -1 : value;
  });
  currentToCompare = currentToCompare.map((value, index) => {
    return secretToCheck[index] == -1 ? -1 : value;
  });

  var cowCount = 0;
  for (let i = currentToCompare.length; i >= 0; i--) {
    if (currentToCompare[i] == -1) {
      // this color has already been used.
      continue;
    }
    let indexInSecret = secretToCheck.indexOf(currentToCompare[i]);
    if (indexInSecret >= 0) {
      cowCount += 1;
      secretToCheck[indexInSecret] = -1; // This value has already been account for as a Cow
      //................v- this is where 'i' is pointing.
      // eg: [-1,4,-1,1,4]
      // ....[-1,2,-1,4,2] -> [-1,2,-1,-1,2]
      //..............|- this is where indexInSecret is pointing
      // in the next loop where i is on the 4
      //.........v- this is where 'i' is pointing.
      // eg: [-1,4,-1,1,4]
      // ....[-1,2,-1,-1,2]
      // we will not find a '4' again in the secret.
    }
  }

  hints.push(Array(cowCount).fill(0));

  hints.push(Array(secretToCheck.length - cowCount - bullCount).fill(-1)); // fill the rest with -1

  hints = [].concat(...hints);

  return {
    hints: [...hints],
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
