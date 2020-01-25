import { Game } from '@freeboardgame.org/boardgame.io/core';


export const HangmanGame = Game({
    name: 'hangman',

    setup: () => ({
        status: {
            word : 'somethinghard',
            correct: '',    // array of correct gusses 
            wrong: ''       // array of wrong guesses 
        }
    }), 

    moves: {
        letterSelected(G: any, ctx: any, letter:string) {

            const status = { ...G.status };
            
            if ( G.status.word.indexOf(letter) > -1 ) {
                status.correct = G.status.correct + letter; 
            } else {
                status.wrong = G.status.wrong + letter; 
            }

            return { ...G, status };
        }
    }, 


    flow: {
        endGameIf: (G:any, ctx:any) => {

        },
    }

});