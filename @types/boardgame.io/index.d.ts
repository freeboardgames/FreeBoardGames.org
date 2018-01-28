declare module 'boardgame.io/ui' {
  import * as React from 'react'; 
  interface ITokenProps {
    x?: number;
    y?: number;
    z?: number;
    style?: React.CSSProperties;
    animate?: boolean;
    onClick?: (coord: any) => void;
    children?: any;
    animationDuration?: number;
    square?: string;
  }
  export class Token extends React.Component<ITokenProps, any> {
  }
  interface IGridColorMap {
    [key: string]: string;  
  }
  interface IGridProps {
    rows: number;
    cols: number;
    outline?: boolean;
    style?: React.CSSProperties;
    colorMap?: IGridColorMap;
    cellSize?: number;
    onClick: (coords: any) => void;
    children?: any;
  }
  export class Grid extends React.Component<IGridProps, any> {
  }
}

declare module 'boardgame.io/core' {
  export class GameObj {
  }
  interface IGameCtx {
    numPlayer: number;
    turn: number;
    currentPlayer: string;
    currentPlayerMoves: number;
  }
  interface IGameMoves {
    [key:  string]: (G: any, ctx: IGameCtx, ...args: any[]) => any; 
  }
  interface IGameFlowPhase {
    name: string;
    allowedMoves: string[];
    endPhaseIf: (G: any, ctx: IGameCtx) => boolean;
  }
  interface IGameFlowTrigger {
    conditon: (G: any, ctx: IGameCtx) => boolean;
    action: (G: any, ctx: IGameCtx) => any;
  }
  interface IGameFlow {
    movesPerTurn: number;
    endGameIf: (G: any, ctx: IGameCtx) => any;
    endTurnIf?: (G: any, ctx: IGameCtx) => boolean;
    onTurnEnd?: (G: any, ctx: IGameCtx) => void;
    triggers?: IGameFlowTrigger[];
    phases?: IGameFlowPhase[];
  }
  interface IGameArgs {
    name?: string;
    setup: (numPlayers: number) => any;
    moves: IGameMoves; 
    playerView?: (G: any, ctx: IGameCtx, playerID: string) => any;
    flow: IGameFlow;
  }
  export function Game (gameArgs: IGameArgs): GameObj;
}

declare module 'boardgame.io/client' {
  import { GameObj } from 'boardgame.io/core';
  export class WrapperBoard {
  }
  interface IClientArgs {
    game: GameObj;
    numPlayer?: number;
    board: React.ReactNode;
    multiplayer?: boolean;
    debug?: boolean;
  }
  export function Client (clientArgs: IClientArgs): WrapperBoard;
}
