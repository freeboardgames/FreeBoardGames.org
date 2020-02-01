import { Game } from '@freeboardgame.org/boardgame.io/core';

function isVictory(status: any) {
    if ( status['0'].wordLen === 0 || status['1'].wordLen === 0 ) {
        return false;
    } 
    if ( ( status['0'].correctGuess.includes('_') && status['0'].wrongGuess.length < 10) || 
         ( status['1'].correctGuess.includes('_') && status['1'].wrongGuess.length < 10 ) ) {
        return false;
    }
    // if both players guessed the words correctly, 
    if ( !status['0'].correctGuess.includes('_') && !status['1'].correctGuess.includes('_') ){
        var scoreP0 =  status['0'].wordLen - status['0'].wrongGuess.length;
        var scoreP1 =  status['1'].wordLen - status['1'].wrongGuess.length;
        if( scoreP0 > scoreP1 ){
            return '0';
        } else if ( scoreP1 > scoreP0 ) {
            return '1';
        } else if ( scoreP0 === scoreP1 ) {
            if ( status['0'].wordLen === status['1'].wordLen ) {
                return status['1'].wrongGuess.length > status['0'].wrongGuess.length ? '0' : '1';
            }
            return status['0'].wordLen > status['1'].wordLen ? '0' : '1';            
        }
    } 
    // if player 0 guessed the word correctly 
    else if ( !status['0'].correctGuess.includes('_') ) {
        return '0';
    } 
    // if player 1 guessed the word correctly 
    else if ( !status['1'].correctGuess.includes('_') ) {
        return '1';
    }
    return false; 
}

function isDraw(status: any) {
    // if both players guessed 10 incorrect words, then declare draw
    if ( status['0'].wrongGuess.length >= 10 && status['1'].wrongGuess.length >= 10) {
        return true;
    } 
    else if ( !status['0'].correctGuess.includes('_') && !status['1'].correctGuess.includes('_') ) {
        if ( ( status['0'].wordLen === status['1'].wordLen ) && ( status['0'].wrongGuess.length === status['1'].wrongGuess.length ) ) {
            return true
        }
    }
    return false; 
}

export const HangmanGame = Game({
    name: 'hangman',

    setup: () => ({
        secret: {
            '0': '', 
            '1': ''
        },
        status: {
            '0': {
                wordLen: 0,         // 
                correctGuess: '',   // array of correct gusses 
                wrongGuess: '',      // array of wrong guesses 
                score: 0
            }, 
            '1': {
                wordLen: 0,         // 
                correctGuess: '',   // array of correct gusses 
                wrongGuess: '',      // array of wrong guesses 
                score:0
            }
        }
    }), 

    moves: {
        setWords(G:any, ctx: any, word:string){
            
            const otherPlayer = ctx.currentPlayer === '0' ? '1' : '0';
            let playerStatus = { ...G.status[otherPlayer] };
            playerStatus.wordLen = word.length; 
            playerStatus.correctGuess = new Array(word.length + 1).join( '_' );

            return { 
                ...G, 
                secret: {
                    ...G.secret, [ctx.currentPlayer]: word
                },
                status:{
                    ...G.status, [otherPlayer]: playerStatus
                }
            };
        }, 

        letterSelected(G: any, ctx: any, letter:string) {

            const currentPlayer = ctx.currentPlayer; 
            var secretWord = '';            
            if (currentPlayer === '0'){
                secretWord = { ...G.secret }['1']; 
            } else {
                secretWord = { ...G.secret }['0']; 
            }

            const playerStatus = { ...G.status[currentPlayer] };            
            if ( secretWord.indexOf(letter) > -1 ) { 
                let newCorrectGuess = '';
                for (var i = 0; i < playerStatus.wordLen; i++){
                    if(secretWord.charAt(i) === letter ) {
                        newCorrectGuess = newCorrectGuess + letter;
                    } else { 
                        newCorrectGuess = newCorrectGuess + playerStatus.correctGuess.charAt(i);
                    }
                }
                playerStatus.correctGuess = newCorrectGuess;
            } else {
                playerStatus.wrongGuess = playerStatus.wrongGuess + letter; 
            }

            return { ...G, status:{
                ...G.status, [ctx.currentPlayer]: playerStatus
            } };
        }
    }, 

    flow: {
        endGameIf: (G:any, ctx:any) => {
            if (isDraw(G.status)) {
                return { draw: true };
            }
            const winner = isVictory(G.status);
            if (winner) {
                return { winner: winner };
            }
        },
    }

});