import { Game } from 'boardgame.io';
import { IGameState, ICardInfo, ECardState} from './definations';
import { CARD_CONTENT, GRID_SIZE } from './constants';
import { shuffleArray } from './utils';

export const MemoryMatchGame: Game<IGameState> = {
    name: 'memorymatch',
    setup: () => { 
        const shuffeledContnet = shuffleArray(Object.keys(CARD_CONTENT)).slice(0, GRID_SIZE * GRID_SIZE / 2);
        const doubledContent = shuffleArray([...shuffeledContnet, ...shuffeledContnet]);
        const cards = [];
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                let id = row * GRID_SIZE + col;
                cards.push({
                    id,
                    name: doubledContent[id],
                    state: ECardState.HIDDEN
                });
            }
        }
        return { cards };
    },
    moves: {
        cardClicked: (G: IGameState, ctx, cardId: number) => { 
            const clickedCard = G.cards.filter((c)=>(c.id === cardId))[0]; 
            clickedCard.state = ECardState.SHOWN;
            return G;
        }
    },
    endIf: () => { 

    },
};
