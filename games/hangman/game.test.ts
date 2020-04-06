import { Client } from 'boardgame.io/client';
import { HangmanGame } from './game';

function getInitialGameState() {
  return {
    secret: {
      '0': '',
      '1': '',
    },
    status: {
      '0': {
        correctGuess: '', // array of correct gusses
        wrongGuess: '', // array of wrong guesses
        wordHint: '',
        score: 0,
      },
      '1': {
        correctGuess: '', // array of correct gusses
        wrongGuess: '', // array of wrong guesses
        wordHint: '',
        score: 0,
      },
    },
  };
}

it('should declare player 1 as the winner', () => {
  let gameState = getInitialGameState();
  gameState.secret['0'] = 'hangman';
  gameState.secret['1'] = 'hangman';

  const gameClient = Client({
    game: {
      ...HangmanGame,
      setup: () => ({ gameState }),
    },
  });

  for (const c of 'bdcefijxyzq') {
    gameClient.moves.letterSelected(c);
  }
  //should change to player 1
  for (const c of 'rthangman') {
    gameClient.moves.letterSelected(c);
  }

  // get the latest game state
  const { ctx } = gameClient.store.getState();

  // player '1' should be declared the winner
  expect(ctx.gameover).toEqual({ winner: '1' });
});

it('should declare a draw', () => {
  let gameState = getInitialGameState();
  gameState.secret['0'] = 'hangman';
  gameState.secret['1'] = 'hangman';

  const gameClient = Client({
    game: {
      ...HangmanGame,
      setup: () => ({ gameState }),
    },
  });

  for (const c of 'bdcefijxyzq') {
    gameClient.moves.letterSelected(c);
  }

  for (const c of 'bdcefijxyzq') {
    gameClient.moves.letterSelected(c);
  }

  // get the latest game state
  const { ctx } = gameClient.store.getState();

  // game should be a draw
  expect(ctx.gameover).toEqual({ draw: true });
});
