import { IGameArgs, IGameCtx } from 'boardgame.io/core';


// players are either allowed to place or move pieces 
export enum Phase {
  Place = 'Place',
  Move = 'Move',
}

export interface Point {
  x: number, 
  y: number,
  playerID: string;
}

export interface IG {
  points: Point[];
  piecesPlaced: number;
  selectedPoint: Point;
}

export function placePiece(G: IG, ctx: IGameCtx,) {

}

export function movePiece(G: IG, ctx: IGameCtx,) {

}

const GameConfig: IGameArgs = {
    name: 'rota',
    setup: (ctx) => {
      // available piece positions
      /*|  -1,1----0,1----1,1  |
      * |  |        |      |   |
      * |  -1,0----0,0----1,0  |
      * |  |        |      |   |
      * |  -1,-1---0,-1- -1,-1 |
      */   

      console.log(ctx);
      let points: Point[] = []; 
      for(let x=-1; x<2; x++){
        for(let y=-1; y<2; y++){
          points.push({x,y,playerID:null});
        }
      }
      return { points, piecesPlaced: 0, selectedPoint: null };
    },
    phases: {
      Place: {
        moves: { placePiece },
        next: Phase.Move,
        endIf: (G: IG) => G.piecesPlaced === 18,
        start: true,
      },
      Move: {
        moves: { movePiece },
      },
    },
    turn:{ moveLimit: 1 },
    endIf: (G, ctx) =>{

    }
  };
  
  export const RotaGame = GameConfig;