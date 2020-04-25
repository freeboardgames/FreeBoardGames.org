import { Client } from 'boardgame.io/client';
import { RotaGame } from './game';

describe('rota rules', () => {

    it('should change to change phases properly', () => {        
        const client = Client({
            game: { ...RotaGame },
          }) as any;

        expect(client.getState().ctx.phase).toEqual('Place');
        // make six moves 
        for (let i=0; i<6; i++) {
            client.moves.placePiece(i);
        }
        
        expect(client.getState().ctx.phase).toEqual('Move');
    }); 

    it('should declare player 1 as a winner', () => {        
        const client = Client({
            game: { ...RotaGame },
          }) as any;

        client.moves.placePiece(3);
        client.moves.placePiece(0);
        client.moves.placePiece(5);
        client.moves.placePiece(1);
        client.moves.placePiece(6);     
        client.moves.placePiece(2);
        
        const { ctx } = client.getState();
        expect(ctx.gameover).toEqual({ winner: '1' });
    }); 

});
