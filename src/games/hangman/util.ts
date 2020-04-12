import { HangmanState, Guesses } from './definitions';
import { IGameCtx, INVALID_MOVE } from 'boardgame.io/core';
import { MAX_WORD_LENGTH, MAX_MISTAKE_COUNT } from './constants';

/** Called when users selects the initial word and (possibly) hint. */
export function setSecret(G: HangmanState, ctx: IGameCtx, secret: string, hint?: string) {
  if (secret.length == 0 || secret.length > MAX_WORD_LENGTH) {
    return INVALID_MOVE;
  }
  secret = secret.toLowerCase();
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

function getOpponent(playerID: string) {
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

function getMistakeCount(guesses: Guesses) {
  let count = 0;
  for (const indexes of Object.values(guesses)) {
    if (indexes.length === 0) {
      count++;
    }
  }
  return count;
}

function getCorrectLettersCount(guesses: Guesses) {
  let count = 0;
  for (const indexes of Object.values(guesses)) {
    count += indexes.length;
  }
  return count;
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
  if (result.length == 0 && getMistakeCount(opponent.guesses) < MAX_MISTAKE_COUNT) {
    ctx.events.endTurn();
  } else if (getMistakeCount(player.guesses) >= MAX_MISTAKE_COUNT) {
    ctx.events.endGame({ draw: true });
  }
  return G;
}

/** Returns the winner, if any. */
export function getWinner(G: HangmanState) {
  for (const playerID of ['0', '1']) {
    const player = G.players[playerID];
    const opponent = G.players[getOpponent(playerID)];
    if (player && opponent && getCorrectLettersCount(player.guesses) === opponent.secretLength) {
      return { winner: playerID };
    }
  }
}
