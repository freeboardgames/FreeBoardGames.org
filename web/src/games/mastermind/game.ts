import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';

interface Colour {
    id: number;
    img: string;
    hex: string;
}
export interface IG {
    attempts: Array<number[]>;
    colours: Colour[];
    current: number[];
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
        if (pin === secret[i]) {
            hints.push(1);
        } else if (secret.contains(pin)) {
            hints.push(0);
        } else {
            hints.push(-1);
        }
    }

    return {
        hints,
        combination: current,
    }
}

export const MastermindGame = {
    name: 'mastermind',

    setup: (ctx: Ctx) => {
        const secretLength = 4;
        const limitOfAttempts = 12;
        const allowToRepeat = true;

        const colours = [
            {id: 1, img: 'certificate.svg', hex: "#b71c1c"},
            {id: 2, img: 'circle.svg', hex: '#1a237e'},
            {id: 3, img: 'heart.svg', hex: '#0277bd'},
            {id: 4, img: 'moon.svg', hex: '#1b5e20'},
            {id: 5, img: 'play.svg', hex: '#FFC300'},
            {id: 6, img: 'square.svg', hex: '#5d4037'},
            {id: 7, img: 'star.svg', hex: '#000000'},
        ];

        const secret = generateSecret(ctx, colours, secretLength, allowToRepeat);

        return {
            attempts: [],
            colours,
            current: Array(secretLength).fill(null),
            secret,
            secretLength,
            limitOfAttempts
        }
    },

    moves: {
        setColourInPosition(G: any, ctx: any, colourId: number, position: number) {
            G.current[position] = G.colours[colourId];
        },
        check(G: any) {
            if (G.current.some(n => n === null)) {
                return INVALID_MOVE;
            }

            const attempt = checkSecret(G.current, G.secret);

            if (attempt.hints.every(n => n === 1)) {
                return 'END'
            }

            G.attempts.push(attempt);
        },
    },

    turn: {
        moveLimit: 1,
    },

    // endIf: (G, ctx) => {
    //     if (G.cells.filter((c: any) => c === null).length === 0) {
    //         return { draw: true };
    //     }
    // },
};
