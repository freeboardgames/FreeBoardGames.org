import { Ctx } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';


export interface IG {
    count: number;
    deck: [],
    hands: [],
    stock: []
}

export const CardTableGame = {
    name: 'cardtable',

    setup: () => ({
        count: 0,
        deck: [{ id: 'AS', rank: 13, faced: false }, { id: 'AC', rank: 26, faced: false }, { id: 'AD', rank: 39, faced: false }, { id: 'AH', rank: 52, faced: false }],
        hands: [{ playerId: '1', private: [], melds: [], tricks: [], played: [] }, { playerId: '2', private: [], melds: [], tricks: [], played: [] }, { playerId: '3', private: [], melds: [], tricks: [], played: [] }, { playerId: '4', private: [], melds: [], tricks: [], played: [] }],
        stock: [],

    }),

    moves: {
        plusone(G: IG) {
            return { count: G.count + 1 };
        },

        cutDeck(G: IG, depth: number) {
            console.log(`depth: ${JSON.stringify(depth, null, 2)}`)
            console.log(JSON.stringify(G, null, 2), depth);
            // by convention top card is at 0
            //depth can never be greater than G.deck.length
            if (G.deck.length < depth) {
                console.log(`cutting at ${depth}`);
                return INVALID_MOVE;
            }
            let top = G.deck.slice(0, depth);
            let bottom = G.deck.slice(depth - G.deck.length); //s/b negative offset;

            return { ...G, deck: bottom.concat(top) }
        }
    },

    flow: {
        movesPerTurn: 1,
    },
};

