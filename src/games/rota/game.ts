import { IGameArgs, IGameCtx } from 'boardgame.io/core';


// players are either allowed to place or move pieces 
export enum Phase {
  Place = 'Place',
  Move = 'Move',
}

export interface Point {
  id: number,
  x: number, 
  y: number,
  playerID: string;
}

export interface IG {
  points: Point[];
  piecesPlaced: number;
  selectedPoint: Point;
}

function findPoint(G:IG, pointX:number, pointY:number):Point {
  for (const p of G.points) {
    if(p.x === pointX && p.y === pointY) {
      return p;
    }
  };
  return {x:null, y:null, id:null, playerID:null}
}

function isVictory(G: IG): boolean {
  for(const p of G.points) {
    if(p.playerID !== null) {
      const axisVar: number[] = [-1, 0, 1]; 
      // check along x-axis 
      let testWin = true;
      for (const y of axisVar){
        testWin = testWin && p.playerID === findPoint(G,p.x,y).playerID;
      }
      if (testWin) { return true; }
      
      // check along x-axis
      testWin = true;
      for (const x of axisVar){
        testWin = testWin && p.playerID === findPoint(G,x,p.y).playerID;
      }
      if (testWin) { return true; }

      // check Corners Points
      if (p.x !== 0 && p.y !== 0){
        // test around the circumference
        testWin = p.playerID === findPoint(G,0,p.y).playerID; 
        testWin = testWin && p.playerID === findPoint(G,p.x,0).playerID; 
        if (testWin) { return true; }

        // test diagonal 
        testWin = p.playerID === findPoint(G,0,0).playerID;
        testWin = testWin && p.playerID === findPoint(G,-p.x,-p.y).playerID;
        if (testWin) { return true; }
      }
    }
  }
  return false;
}

function placePiece(G: IG, ctx: IGameCtx, pointID:number) {
  
  // if more than 6 pieces are placed, do nothing
  let piecesPlaced = G.piecesPlaced;
  if (piecesPlaced >= 6) { return {...G}; }

  // add player-id of player who clicked the point
  const points = G.points.map((point) => {
    if(point.playerID === null && pointID===point.id){
      piecesPlaced = piecesPlaced + 1;
      return {...point, playerID:ctx.currentPlayer};
    } else {
      return {...point};
    }
  });

  return {...G, points, piecesPlaced};
}

function movePiece(G: IG, ctx: IGameCtx,) {

}

const GameConfig: IGameArgs = {
    name: 'rota',
    setup: (ctx) => {
      // available piece positions
      /*|  -1,1----0,1----1,1  |
      * |  |        |      |   |
      * |  -1,0----0,0----1,0  |
      * |  |        |      |   |
      * |  -1,-1---0,-1-- 1,-1 |
      */   

      let points: Point[] = []; 
      for(let x=-1; x<2; x++){
        for(let y=-1; y<2; y++){
          points.push({id:100*x+y,x,y,playerID:null});
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
      if (isVictory(G)) { 
        return {winner:ctx.currentPlayer}; }
    }
  };
  
  export const RotaGame = GameConfig;