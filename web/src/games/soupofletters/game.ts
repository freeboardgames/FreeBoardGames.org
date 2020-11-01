import { MAX_WORDS_IN_GAME, MAX_WORD_LEN, DRAW_AFTER_N_TIMERS, validOrientations, globalWordList } from './constants';
import { shuffleArray } from './utils';
import { newPuzzle, solvepuzzle } from './puzzle';

export interface ISingleLetter {
  x: number;
  y: number;
  letter: string;
}

export interface ISolvedWord {
  x: number;
  y: number;
  orientation: string;
  word: string;
  overlap: number;
  solvedBy?: string;
  letters: Array<ISingleLetter>;
}

export interface IG {
  puzzle: Array<Array<string>>;
  solution: Array<ISolvedWord>;
  timeRef: number;
  countTimerFired: number;
}

function isGameOver(G, ctx) {
  // if timer fired too many times, end game
  if (G.countTimerFired >= ctx.numPlayers * DRAW_AFTER_N_TIMERS) {
    return true;
  }
  // if all words are found then true
  let isOver = true;
  for (const s of G.solution) {
    if (s.solvedBy === undefined) {
      isOver = false;
    }
  }
  return isOver;
}

export function isVictory(G) {
  // count the score of each player
  const playerScores = {};
  for (const s of G.solution) {
    if (s.solvedBy) {
      playerScores[s.solvedBy] = 0;
    }
  }
  for (const s of G.solution) {
    playerScores[s.solvedBy] += 1;
  }
  // determine max score
  var maxScore = -1;
  Object.values(playerScores).forEach((score: number) => {
    maxScore = Math.max(maxScore, score);
  });
  // determine the player(s) who got maxScore
  let playerWithMaxScore = undefined;
  let numPlayersAtMaxScore = 0;
  Object.keys(playerScores).forEach((player: string) => {
    if (maxScore === playerScores[player]) {
      playerWithMaxScore = player;
      numPlayersAtMaxScore = numPlayersAtMaxScore + 1;
    }
  });
  // if the max-score is same for any two players, then declare draw
  if (numPlayersAtMaxScore === 1) {
    return { winner: playerWithMaxScore };
  } else {
    return { draw: true };
  }
}

function initialSetup(ctx, wordList = globalWordList, allowedOrientations = validOrientations) {
  // determine the number of words in game
  let wordPerPerson = Math.floor(MAX_WORDS_IN_GAME / ctx.numPlayers);
  let totalAllowedWords = wordPerPerson * ctx.numPlayers;
  // select a fixed amount of random words from the list of words
  let randWords = shuffleArray(wordList).filter((word: string) => word.length < MAX_WORD_LEN);
  randWords = randWords.slice(0, totalAllowedWords);
  // create a puzzle, and if all words are not found then reduce words and try again
  let puzzle;
  while (!puzzle) {
    puzzle = newPuzzle(randWords, {
      height: MAX_WORD_LEN,
      width: MAX_WORD_LEN,
      orientations: allowedOrientations,
    });
    // if puzzle, try to solve it
    if (puzzle) {
      let { found, notFound } = solvepuzzle(puzzle, randWords, allowedOrientations);
      // if some words not found, then reset puzzle and try again with less words
      if (notFound.length !== 0) {
        puzzle = null;
      } else {
        return { puzzle, solution: found, timeRef: Date.now(), countTimerFired: 0 };
      }
    }
    // if puzzle not found, reduce words
    wordPerPerson = wordPerPerson - 1;
    totalAllowedWords = wordPerPerson * ctx.numPlayers;
    randWords = randWords.slice(0, totalAllowedWords);
  }
}

export const SoupOfLettersGame = {
  name: 'soupofletters',

  setup: (ctx): IG => initialSetup(ctx),

  moves: {
    changeTurn: (G: IG) => {
      return { ...G, timeRef: Date.now(), countTimerFired: G.countTimerFired + 1 };
    },
    wordFound: (G: IG, ctx: any, solvedWord: ISolvedWord) => {
      const solution = G.solution.map((s) => {
        if (s.x === solvedWord.x && s.y === solvedWord.y && s.word === solvedWord.word) {
          return { ...s, solvedBy: ctx.currentPlayer };
        }
        return { ...s };
      });
      return { ...G, solution, timeRef: Date.now(), countTimerFired: 0 };
    },
  },

  turn: {
    moveLimit: 1,
  },

  endIf: (G: IG, ctx) => {
    if (isGameOver(G, ctx)) {
      return isVictory(G);
    }
  },
};
