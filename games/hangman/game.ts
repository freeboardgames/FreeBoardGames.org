import { Game } from '@freeboardgame.org/boardgame.io/core';

function isDoneGuessing(status: any) {
  if (status['0'].correctGuess.length === 0 || status['1'].correctGuess.length === 0) {
    return false;
  }
  if (
    (status['0'].correctGuess.includes('_') && status['0'].wrongGuess.length < 10) ||
    (status['1'].correctGuess.includes('_') && status['1'].wrongGuess.length < 10)
  ) {
    return false;
  }
  return true;
}

function isVictory(status: any) {
  if (isDoneGuessing(status)) {
    var scoreP0 = status['0'].score;
    var scoreP1 = status['1'].score;
    if (scoreP0 > scoreP1) {
      return { winner: '0' };
    } else if (scoreP1 > scoreP0) {
      return { winner: '1' };
    } else if (scoreP0 === scoreP1) {
      return { draw: true };
    }
  }
  return false;
}

export const HangmanGame = Game({
  name: 'hangman',

  setup: () => ({
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
  }),

  moves: {
    setWords(G: any, ctx: any, word: string, hint: string) {
      const otherPlayer = ctx.currentPlayer === '0' ? '1' : '0';
      let playerStatus = { ...G.status[otherPlayer] };
      playerStatus.correctGuess = new Array(word.length + 1).join('_');
      playerStatus.wordHint = hint;

      return {
        ...G,
        secret: {
          ...G.secret,
          [otherPlayer]: word.toLowerCase(),
        },
        status: {
          ...G.status,
          [otherPlayer]: playerStatus,
        },
      };
    },

    letterSelected(G: any, ctx: any, letter: string) {
      const currentPlayer = ctx.currentPlayer;
      var secretWord = { ...G.secret }[currentPlayer];

      const playerStatus = { ...G.status[currentPlayer] };
      if (secretWord.indexOf(letter) > -1) {
        let newCorrectGuess = '';
        for (var i = 0; i < playerStatus.correctGuess.length; i++) {
          if (secretWord.charAt(i) === letter) {
            newCorrectGuess = newCorrectGuess + letter;
          } else {
            newCorrectGuess = newCorrectGuess + playerStatus.correctGuess.charAt(i);
          }
        }
        playerStatus.correctGuess = newCorrectGuess;
      } else if (letter !== '*' && !playerStatus.wrongGuess.includes(letter)) {
        playerStatus.wrongGuess = playerStatus.wrongGuess + letter;
      }

      const right = playerStatus.correctGuess.replace(/\_/g, '').length;
      const wrong = playerStatus.wrongGuess.length;
      playerStatus.score = wrong < 10 ? Math.round((right / (wrong + right)) * 100) : 0;

      if (!playerStatus.correctGuess.includes('_') || wrong >= 10) {
        playerStatus.correctGuess = secretWord;
      }

      return {
        ...G,
        status: {
          ...G.status,
          [ctx.currentPlayer]: playerStatus,
        },
      };
    },
  },

  flow: {
    endGameIf: (G: any) => {
      const winner = isVictory(G.status);
      if (winner) {
        return winner;
      }
    },
  },
});
