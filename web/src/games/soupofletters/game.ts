
import { MAX_WORDS_IN_GAME, MAX_WORD_LEN, DRAW_AFTER_N_TIMERS, validOrientations, globalWordList } from './constants';
import { newPuzzle, solvePuzzel, printPuzzle } from './puzzel'; 


export interface ISingleLetter {
    x: number;
    y: number;
    letter: string;
}

export interface ISolvedWord{
    x:number;
    y:number;
    orientation: string;
    word: string;
    overlap: number;
    solvedBy?: string;
    letters: Array<ISingleLetter>;
}

export interface IG {
    puzzel: Array<Array<string>>;
    solution: Array<ISolvedWord>;
    timeRef: number;
    countTimerFired: number;
}

function isGameOver(G, ctx) {
    // if timer fired too many times, end game 
    if (G.countTimerFired >= (ctx.numPlayers * DRAW_AFTER_N_TIMERS )) { return true; } 
    // if all words are found then true 
    let isOver = true;
    for (const s of G.solution) {
        if (s.solvedBy === undefined) {
            isOver = false;
        }
    }
    return isOver;
}

export function isVictory(G, ctx) { 
    // count the score of each player 
    const playerScores = {}
    for (const s of G.solution) {
        if (s.solvedBy) {
            playerScores[s.solvedBy] = playerScores[s.solvedBy] || 0; 
            playerScores[s.solvedBy] = playerScores[s.solvedBy] + 1; 
        }
    }
    // determine max score 
    let scores = Object.keys( playerScores ).map(function ( key ) { return playerScores[key]; });
    var maxScore = Math.max.apply( null, scores );
    // determine the player(s) who got maxScore
    let playerWithMaxScore = undefined; 
    let numPlayersAtMaxScore = 0; 
    for (var player in playerScores){
        if (maxScore === playerScores[player]){
            playerWithMaxScore = player;
            numPlayersAtMaxScore = numPlayersAtMaxScore + 1;
        }
    }
    // if the max-score is same for any two players, then declare draw
    if (numPlayersAtMaxScore === 1){
        return { winner: playerWithMaxScore};
    } else if (numPlayersAtMaxScore > 1){
        return { draw: true };
    } else {
        return;
    }
}

function initialSetup(ctx, wordList=globalWordList, allowedOrientations=validOrientations) {
    // determine the number of words in game 
    let wordPerPerson = Math.floor(MAX_WORDS_IN_GAME/ctx.numPlayers);
    let totalAllowedWords = wordPerPerson * ctx.numPlayers;
    // select a fixed amount of random words from the list of words 
    let randWords = [];
    for (let i = 0; i < wordList.length; i++){
        const rWord = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
        if ((rWord.length <= MAX_WORD_LEN) && !randWords.includes(rWord)) { randWords.push(rWord); }
        if (randWords.length >= totalAllowedWords) { break; }
    }
    // create a puzzel, and if all words are not found then reduce words and try again
    let puzzel;
    while(!puzzel) {
        puzzel = newPuzzle(randWords, {
            height: MAX_WORD_LEN, width: MAX_WORD_LEN, orientations:allowedOrientations
        });
        // if puzzel, try to solve it
        if (puzzel){
            let {found, notFound} = solvePuzzel(puzzel, randWords, allowedOrientations); 
            // if some words not found, then reset puzzel and try again with less words
            if(notFound.length !== 0){
                puzzel = null;
            } else {
                return { puzzel, solution: found, timeRef: Date.now(), countTimerFired:0 };
            }
        }
        // if puzzel not found, reduce words
        wordPerPerson = wordPerPerson - 1; 
        totalAllowedWords = wordPerPerson * ctx.numPlayers;
        randWords = randWords.slice(0, totalAllowedWords);
    }
}
  
export const SoupOfLettersGame = {
    name: 'soupofletters',

    setup: (ctx): IG => (initialSetup(ctx)),

    moves: {
        changeTurn: (G: any, ctx: any) => {
            ctx.events.endTurn(); 
            return { ...G, timeRef: Date.now(), countTimerFired: G.countTimerFired + 1 };
        },
        wordFound: (G: any, ctx: any, solvedWord: ISolvedWord) => {
            const solution = G.solution.map(s => {
                if(s.x===solvedWord.x && s.y === solvedWord.y){
                    return {...solvedWord, solvedBy:ctx.currentPlayer};
                } 
                return {...s};
            });
            return { ...G, solution, timeRef: Date.now(), countTimerFired: 0 };
        },
    },

    turn: {
        moveLimit: 1,
    },

    endIf: (G, ctx) => {
        if(isGameOver(G, ctx)){
            return isVictory(G, ctx);
        }
    },
};
  