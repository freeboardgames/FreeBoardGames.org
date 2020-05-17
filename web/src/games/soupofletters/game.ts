
import { WORDS_IN_GAME, globalWordList } from './constants';
import { newPuzzle, solvePuzzel, printPuzzle } from './puzzel'; 


export interface ISolvedWord{
    x:number;
    y:number;
    orientation: string;
    word: string;
    overlap: number;
    solvedBy?: string;
}

export interface IG {
    puzzel: Array<Array<string>>;
    solution: Array<ISolvedWord>;
}

export function isVictory() { 
    return false;
}

function initialSetup() {
    // select a fixed amount of random words from the list of words 
    const randWords = [];
    for (let i = 0; i < globalWordList.length; i++){
        const rWord = globalWordList[Math.floor(Math.random()*globalWordList.length)].toUpperCase();
        if (!randWords.includes(rWord)) { randWords.push(rWord); }
        if (randWords.length >= WORDS_IN_GAME) { break; }
    }
    // create a puzzel and try to solve it
    const puzzel = newPuzzle(randWords, {});
    const solution = solvePuzzel(puzzel, randWords).found; 

    return { puzzel, solution };
}
  
export const SoupOfLettersGame = {
    name: 'soupofletters',

    setup: () => (initialSetup()),

    moves: {
        wordFound(G: any, ctx: any, solvedWord: ISolvedWord) {
            const solution = G.solution.map(s => {
                if(s.x===solvedWord.x && s.y === solvedWord.y){
                    return {...solvedWord, solvedBy:ctx.currentPlayer};
                } 
                return {...s};
            });
            return { ...G, solution };
        },
    },

    turn: {
        moveLimit: 1,
    },

    endIf: (G, ctx) => {
        isVictory();
    },
};
  