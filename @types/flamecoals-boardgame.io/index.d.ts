declare module 'flamecoals-boardgame.io/ui' {
  import * as React from 'react';
  interface ITokenCoord {
    x: number;
    y: number;
    originalX?: number;
    originalY?: number;
  } 
  interface ITokenProps {
    x?: number;
    y?: number;
    z?: number;
    style?: React.CSSProperties;
    animate?: boolean;
    draggable?: boolean;
    shouldDrag?: (coord: ITokenCoord) => boolean;
    onDrag?: (coord: ITokenCoord) => void;
    onDrop?: (coord: ITokenCoord) => void;
    onClick?: (coord: ITokenCoord) => void;
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

declare module 'flamecoals-boardgame.io/core' {
  export enum TurnOrder {
    DEFAULT, ONCE, ANY, ANY_ONCE, OTHERS, OTHERS_ONCE, CUSTOM, CUSTOM_FROM
  }
  export class FlowObj {
    ctx: (players: number) => any;
    processGameEvent: (state: any, gameEvent: any) => any;
  }
  export class GameObj {
    processMove: (G: any, action: any, ctx: any) => any;
    flow: FlowObj;
  }
  interface IGameCtx {
    phase?: string;
    playerID?: string;
    numPlayer: number;
    turn: number;
    currentPlayer: string;
    currentPlayerMoves: number;
  }
  interface IGameMoves {
    [key:  string]: (G: any, ctx: IGameCtx, ...args: any[]) => any; 
  }
  interface IGameFlowPhases {
    [name: string]: {
      movesPerTurn?: number;
      turnOrder?: TurnOrder;
      next?: string;
      allowedMoves?: string[];
      endPhaseIf?: (G: any, ctx: IGameCtx) => boolean;
      endGameIf?: (G: any, ctx: IGameCtx) => any;
    }
  }
  interface IGameFlowTrigger {
    conditon: (G: any, ctx: IGameCtx) => boolean;
    action: (G: any, ctx: IGameCtx) => any;
  }
  interface IGameFlow {
    startingPhase?: string;
    movesPerTurn?: number;
    endGameIf?: (G: any, ctx: IGameCtx) => any;
    endTurnIf?: (G: any, ctx: IGameCtx) => boolean;
    onTurnEnd?: (G: any, ctx: IGameCtx) => void;
    triggers?: IGameFlowTrigger[];
    phases?: IGameFlowPhases;
  }
  interface IGameArgs {
    name?: string;
    setup: (numPlayers: number) => any;
    moves: IGameMoves; 
    playerView?: (G: any, ctx: IGameCtx, playerID: string) => any;
    flow?: IGameFlow;
  }
  export function Game (gameArgs: IGameArgs): GameObj;
}

declare module 'flamecoals-boardgame.io/react' {
  import { GameObj, IGameMoves } from 'flamecoals-boardgame.io/core';
  export class WrapperBoard {
    moves: any;
    events: any;
    store: any;
    updatePlayerID: (id: string) => void;
  }
  interface IClientArgs {
    game: any;
    numPlayer?: number;
    board?: React.ReactNode;
    multiplayer?: boolean;
    debug?: boolean;
    enhancer?: any;
  }
  export function Client (clientArgs: IClientArgs): WrapperBoard;
}

declare module 'flamecoals-boardgame.io/client' {
  import { GameObj, IGameMoves } from 'flamecoals-boardgame.io/core';
  export class WrapperBoard {
    moves: any;
    events: any;
    store: any;
    updatePlayerID: (id: string) => void;
  }
  interface IClientArgs {
    game: any;
    numPlayer?: number;
    board?: React.ReactNode;
    multiplayer?: boolean;
    debug?: boolean;
    enhancer?: any;
  }
  export function Client (clientArgs: IClientArgs): WrapperBoard;
}

declare module 'flamecoals-boardgame.io/server' {
  import { GameObj } from 'flamecoals-boardgame.io/core';
  import * as Koa from 'koa';
  interface IServerArgs {
    games: GameObj[] 
  }
  function Server(serverArgs: IServerArgs): Koa;
  export = Server;
}

declare module 'flamecoals-boardgame.io/ai';
