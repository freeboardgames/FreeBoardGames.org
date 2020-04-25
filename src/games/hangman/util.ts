import { HangmanState, Guesses } from './definitions';
import { IGameCtx, INVALID_MOVE } from 'boardgame.io/core';
import { MAX_WORD_LENGTH, MAX_MISTAKE_COUNT, ALPHABET } from './constants';

/** Called when users selects the initial word and (possibly) hint. */
export function setSecret(G: HangmanState, ctx: IGameCtx, secret: string, hint?: string) {
  if (secret.length == 0 || secret.length > MAX_WORD_LENGTH) {
    return INVALID_MOVE;
  }
  secret = secret.toLowerCase();
  if (ctx.currentPlayer == '1') {
    ctx.events.endTurn();
  }
  return {
    players: {
      ...G.players,
      [ctx.playerID]: {
        secret,
        secretLength: secret.length,
        hint,
        guesses: {},
      },
    },
  };
}

export function getOpponent(playerID: string) {
  switch (playerID) {
    case '0':
      return '1';
    case '1':
      return '0';
  }
  throw new Error(`Invalid playerID provided to getOpponnent: ${playerID}`);
}

function getWordIndexes(word: string, letter: string): number[] {
  const indexes = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      indexes.push(i);
    }
  }
  return indexes;
}

/** Gets array representing masked word. */
export function getMaskedWord(guesses: Guesses, secretLength: number): (string | undefined)[] {
  const result = new Array(secretLength);
  for (const [letter, guessResult] of Object.entries(guesses)) {
    for (const index of guessResult) {
      result[index] = letter;
    }
  }
  return result;
}

/** Gets count of mistakes made in a set of guesses. */
export function getMistakeCount(guesses: Guesses) {
  let count = 0;
  for (const indexes of Object.values(guesses)) {
    if (indexes.length === 0) {
      count++;
    }
  }
  return count;
}

export function getCorrectLettersCount(guesses: Guesses) {
  let count = 0;
  for (const indexes of Object.values(guesses)) {
    count += indexes.length;
  }
  return count;
}

export function isGuessCorrect(G: HangmanState, playerID: string) {
  const player = G.players[playerID];
  const opponent = G.players[getOpponent(playerID)];
  if (!player || !opponent) {
    return false;
  }
  return (
    getCorrectLettersCount(player.guesses) === opponent.secretLength &&
    getMistakeCount(player.guesses) < MAX_MISTAKE_COUNT
  );
}

/** Valides if all characters on this word is valid. */
export function isValidWord(word: string) {
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (!ALPHABET.includes(letter)) {
      return false;
    }
  }
  return true;
}

/** Get Score for a given guess made by a player */
export function getScore(guesses: Guesses) {
  return getMistakeCount(guesses) >= MAX_MISTAKE_COUNT
    ? 0
    : Math.ceil((getCorrectLettersCount(guesses) / (getCorrectLettersCount(guesses) + getMistakeCount(guesses))) * 100);
}

/** Check in user is done guessing */

export function isDoneGuessing(G: HangmanState, playerID: string) {
  const player = G.players[playerID];
  const opponent = G.players[getOpponent(playerID)];
  if (!player || !opponent) {
    return false;
  }
  return (
    getCorrectLettersCount(player.guesses) === opponent.secretLength ||
    getMistakeCount(player.guesses) >= MAX_MISTAKE_COUNT
  );
}

/** Called when users selects letter. */
export function selectLetter(G: HangmanState, ctx: IGameCtx, letter: string) {
  const player = G.players[ctx.playerID];
  if (letter.length != 1 || letter in player.guesses) {
    return INVALID_MOVE;
  }
  letter = letter.toLowerCase();
  const opponent = G.players[getOpponent(ctx.playerID)];
  const result = getWordIndexes(opponent.secret, letter);
  player.guesses[letter] = result;

  return G;
}

/** Returns the winner, if any. */
export function getWinner(G: HangmanState) {
  const playerID = '0';
  const player = G.players[playerID];
  const opponent = G.players[getOpponent(playerID)];

  if (!player) {
    return;
  }

  // Declare draw if both could not guess correctly
  if (getMistakeCount(player.guesses) >= MAX_MISTAKE_COUNT && getMistakeCount(opponent.guesses) >= MAX_MISTAKE_COUNT) {
    return { draw: true };
  }

  // Compare scores of players if both are done guessing
  if (isDoneGuessing(G, '0') && isDoneGuessing(G, '1')) {
    if (getScore(player.guesses) > getScore(opponent.guesses)) {
      return { winner: playerID };
    } else if (getScore(player.guesses) < getScore(opponent.guesses)) {
      return { winner: getOpponent(playerID) };
    } else if (getScore(player.guesses) === getScore(opponent.guesses)) {
      return { draw: true };
    }
  }
}
