import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { blue, green, common, yellow, brown, red, lightGreen } from '@material-ui/core/colors';

interface Colour {
    id: number;
    img: string;
    hex: string;
}
export interface IG {
    attempts: any;
    colours: Colour[];
    current: any;
    currentAttempt: any;
    secret: Colour[];
    secretLength: number;
    limitOfAttempts: number;
}

export const generateSecret = (ctx: Ctx, colours: Colour[], secretLength: number, allowToRepeat: boolean) => {
    if (allowToRepeat) {
        const secret = [];
        for (let i = 0; i < secretLength; i++) {
            const n = ctx.random.Die(colours.length);
            secret.push(colours[n - 1]);
        }

        return secret;
    }

    return ctx.random.Shuffle(colours).slice(0, secretLength);
}

export const checkSecret = (current, secret) => {
    let hints = [];

    for (let i in current) {
        const pin = current[i]
        if (pin.id === secret[i].id) {
            hints.push(1);
        } else if (secret.some((s => s.id === pin.id))) {
            hints.push(0);
        } else {
            hints.push(-1);
        }
    }

    return {
        hints: hints.sort((a, b) => (b - a)),
        combination: current,
    }
}

export const isVictory = (G: IG) => {
    if (G.currentAttempt && G.currentAttempt.hints && G.currentAttempt.hints.every(n => n === 1)) {
        return true;
    }

    return false;
}

export const isGameOver = (G: IG) => {
    return G.limitOfAttempts === G.attempts.length;
}

export const BullsAndCowsGame = {
    name: 'bullsAndCows',

    setup: (ctx: Ctx) => {
        const secretLength = 4;
        const limitOfAttempts = 12;
        const allowToRepeat = false;

        const colours = [
            {id: 1, img: 'certificate', hex: common['black']},
            {id: 2, img: 'circle', hex: brown[800]},
            {id: 3, img: 'heart', hex: red[700]},
            {id: 4, img: 'moon', hex: blue[300]},
            {id: 5, img: 'play', hex: green[700]},
            {id: 6, img: 'square', hex: lightGreen['A400']},
            {id: 7, img: 'star', hex: yellow[700]},
        ];

        const secret = generateSecret(ctx, colours, secretLength, allowToRepeat);

        return {
            attempts: [],
            colours,
            current: Array(secretLength).fill(null),
            currentAttempt: null,
            secret,
            secretLength,
            limitOfAttempts
        }
    },

    moves: {
        setColourInPosition(G: any, ctx: any, colourId: number, position: number) {
            G.current[position] = G.colours.find(c => c.id === colourId);
        },
        check(G: any) {
            if (G.current.some(n => n === null)) {
                return INVALID_MOVE;
            }

            const attempt = checkSecret(G.current, G.secret);

            if (!isVictory(G) && !isGameOver(G)) {
                G.attempts.push(attempt);
                G.currentAttempt = attempt;
            }
        },
    },

    turn: {
        moveLimit: 1,
    },

    endIf: (G: IG, ctx: Ctx) => {
        if (isVictory(G)) {
            return { winner: ctx.currentPlayer };
        }

        if (isGameOver(G)) {
            return { loose: true };
        }
    }
};
