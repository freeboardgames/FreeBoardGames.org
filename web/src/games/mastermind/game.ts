import { Ctx } from 'boardgame.io';

interface Colour {
    img: string;
    hex: string;
}
export interface IG {
    secret: Colour[];
    attempts: Array<number[]>;
    colours: Colour[];
}

export const generateSecret = (ctx: Ctx, colours: Colour[], limit: number = 4) => {
    return ctx.random.Shuffle(colours).slice(0, limit);
}

export const MastermindGame = {
    name: 'mastermind',

    setup: (ctx: Ctx) => {
        const colours = [
            {img: 'certificate.svg', hex: "#b71c1c"},
            {img: 'circle.svg', hex: '#1a237e'},
            {img: 'heart.svg', hex: '#0277bd'},
            {img: 'moon.svg', hex: '#1b5e20'},
            {img: 'play.svg', hex: '#FFC300'},
            {img: 'square.svg', hex: '#5d4037'},
            {img: 'star.svg', hex: '#000000'},
        ];

        const secret = generateSecret(ctx, colours);

        return {
            attempts: [],
            colours,
            secret,
        }
    },

    moves: {
        selectColour(G: any, ctx: any, id: number) {
            const cells = [...G.cells];

            if (cells[id] === null) {
                cells[id] = ctx.currentPlayer;
                return { ...G, cells };
            }
        },
        confirm(G: any, ctx: any, id: number) {
            const cells = [...G.cells];

            if (cells[id] === null) {
                cells[id] = ctx.currentPlayer;
                return { ...G, cells };
            }
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
