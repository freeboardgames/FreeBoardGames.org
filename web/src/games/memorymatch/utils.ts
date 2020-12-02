import { IGameState } from './definations';

export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function getScoreBoard(G: IGameState, ctx){
    let scoreBoard = new Array(ctx.numPlayers).fill(0);
    G.cards
    .filter((c) => (c.openedBy))
    .forEach((c) => {scoreBoard[c.openedBy as any]++});
    return scoreBoard
            .map((score, i) => ({ playerID: i.toString(), score: Math.floor(score/2) }))
            .sort((a, b) => b.score - a.score);
}