import { Client } from 'boardgame.io/client';
import { HangmanGame } from './game';

export function getInitialGameState(toGuessFor0='', toGuessFor1='') {
  return {
    secret: {
      '0': toGuessFor0,
      '1': toGuessFor1,
    },
    status: {
      '0': {
        correctGuess: new Array(toGuessFor0.length + 1).join('_'), 
        wrongGuess: '', 
        wordHint: '',
        score: 0,
      },
      '1': {
        correctGuess: new Array(toGuessFor1.length + 1).join('_'), 
        wrongGuess: '', 
        wordHint: '',
        score: 0,
      },
    },
  };
}

it('should declare a draw', () => {
  let gameState = getInitialGameState();
  
  const gameClient = Client({
    game: {
      ...HangmanGame,
      setup: () => (gameState),
    },
  });

  // set word for each player, and also change turns as this is not automatic.
  gameClient.moves.setWords('hangman','');
  gameClient.events.endTurn({ next: '1' });
  gameClient.moves.setWords('hangman','');

  // input from player 0
  gameClient.events.endTurn({ next: '0' });
  for (const c of 'bcdefijklo') {
    gameClient.moves.letterSelected(c);
  }

  // input from player 1
  gameClient.events.endTurn({ next: '1' });
  for (const c of 'jsnhangm') {
    gameClient.moves.letterSelected(c);
  }

  // get the latest game state
  const { G, ctx } = gameClient.store.getState();

  // player '1' should be declared the winner
  expect(ctx.gameover).toEqual({ winner: '1' });
});



it('should declare a draw', () => {
  let gameState = getInitialGameState();
  
  const gameClient = Client({
    game: {
      ...HangmanGame,
      setup: () => (gameState),
    },
  });

  // set word for each player, and also change turns as this is not automatic.
  gameClient.moves.setWords('hangman','');
  gameClient.events.endTurn({ next: '1' });
  gameClient.moves.setWords('hangman','');

  // input from player 0
  gameClient.events.endTurn({ next: '0' });
  for (const c of 'bcdefijklo') {
    gameClient.moves.letterSelected(c);
  }

  // input from player 1
  gameClient.events.endTurn({ next: '1' });
  for (const c of 'bcdefijklo') {
    gameClient.moves.letterSelected(c);
  }

  // get the latest game state
  const { ctx } = gameClient.store.getState();

  // game should be a draw
  expect(ctx.gameover).toEqual({ draw: true });
});
