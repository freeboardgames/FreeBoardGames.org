import { Game } from '@freeboardgame.org/boardgame.io/core';


export const HangmanGame = Game({
    name: 'hangman',

    setup: () => ({
        letters: {
            0: Array(20).fill(null),
            1: Array(20).fill(null)
        }
    }), 

    moves: {
        letterEntered(G:any, ctx:any, letter:string) {

            let letters = [ ...G.letters ]; 
            letters[ctx.currentPlayer][0] = letter; 
            return { ...G, letter};

        }
    }, 


    flow: {
        endGameIf: (G, ctx) => {

        },
    }

});