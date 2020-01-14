declare module 'boardgame.io/core' {
  export namespace TurnOrder {
    const DEFAULT: ITurnOrder;
    const ONCE: ITurnOrder;
    const ANY: ITurnOrder;
    const ANY_ONCE: ITurnOrder;
    const OTHERS: ITurnOrder;
    const OTHERS_ONCE: ITurnOrder;
    const CUSTOM: (playOrder: any) => ITurnOrder;
    const CUSTOM_FROM: (playOrderField: string) => ITurnOrder;
  }

  export class FlowObj {
    ctx: (players: number) => any;
    processGameEvent: (state: any, gameEvent: any) => any;
  }
  export class GameObj {
    processMove: (G: any, action: any, ctx: any) => any;
    flow: FlowObj;
  }
  export class Random {
    Shuffle: (deck: any[]) => any[];
    Number: () => number;
    Die: (spotvalue: number, diceCount: number) => number;
    D4: () => number;
    D6: () => number;
    D8: () => number;
    D10: () => number;
    D12: () => number;
    D20: () => number;
  }
  export class Events {
    endTurn: () => void;
    endPhase: () => void;
    endGame: (gameover?: any) => void;
  }
  interface IGameCtx {
    phase?: string;
    playerID?: string;
    numPlayers: number;
    turn: number;
    currentPlayer: string;
    currentPlayerMoves: number;
    actionPlayers: string[];
    playOrder: string[];
    playOrderPos: number;
    gameover: any;
    stats: IGameStats;
    random: Random;
    events: Events;
  }
  interface IGameMoves {
    [key: string]: (G: any, ctx: IGameCtx, ...args: any[]) => any;
  }
  interface IActionPlayers {
    value: (G: any, ctx: IGameCtx) => number[] | string[];
    all: boolean;
    others: boolean;
    once: boolean;
  }
  interface ITurnOrder {
    playOrder?: (G: any, ctx: IGameCtx) => number[] | string[];
    first: (G: any, ctx: IGameCtx) => number;
    next: (G: any, ctx: IGameCtx) => number;
    actionPlayers?: IActionPlayers;
  }
  interface IGameFlowPhases {
    [name: string]: {
      movesPerTurn?: number;
      turnOrder?: ITurnOrder;
      next?: string;
      allowedMoves?: string[];
      endPhaseIf?: (G: any, ctx: IGameCtx) => boolean | object;
      onPhaseBegin?: (G: any, ctx: IGameCtx) => any;
      onPhaseEnd?: (G: any, ctx: IGameCtx) => any;
      endTurnIf?: (G: any, ctx: IGameCtx) => boolean | object;
      endGameIf?: (G: any, ctx: IGameCtx) => void;
      onTurnBegin?: (G: any, ctx: IGameCtx) => any;
      onTurnEnd?: (G: any, ctx: IGameCtx) => any;
      onMove?: (G: any, ctx: IGameCtx) => any;
    };
  }
  interface IGameFlowTrigger {
    conditon: (G: any, ctx: IGameCtx) => boolean;
    action: (G: any, ctx: IGameCtx) => any;
  }
  interface IGameFlow {
    startingPhase?: string;
    movesPerTurn?: number;
    endTurn?: boolean;
    endPhase?: boolean;
    endGame?: boolean;
    endTurnIf?: (G: any, ctx: IGameCtx) => boolean | object;
    endGameIf?: (G: any, ctx: IGameCtx) => void;
    onTurnBegin?: (G: any, ctx: IGameCtx) => any;
    onTurnEnd?: (G: any, ctx: IGameCtx) => any;
    onMove?: (G: any, ctx: IGameCtx) => any;
    triggers?: IGameFlowTrigger[];
    phases?: IGameFlowPhases;
    turnOrder?: ITurnOrder;
  }
  interface IGameArgs {
    name?: string;
    setup: (ctx: IGameCtx) => any;
    moves: IGameMoves;
    playerView?: (G: any, ctx: IGameCtx, playerID: string) => any;
    flow?: IGameFlow;
    seed?: string;
  }
  export function Game(gameArgs: IGameArgs): GameObj;
  export const INVALID_MOVE: string;
  export const PlayerView: {
    STRIP_SECRETS: (G: any, ctx: IGameCtx, playerID: any) => any;
  };

  interface IGameStats {
    turn: IStats;
    phase: IStats;
  }

  interface IStats {
    numMoves: IMoveStats;
    allPlayed: true;
  }

  interface IMoveStats {
    [key: string]: number;
  }
}

declare module 'boardgame.io/react' {
  import { GameObj, IGameMoves } from 'boardgame.io/core';
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
  export function Client(clientArgs: IClientArgs): WrapperBoard;
}

declare module 'boardgame.io/client' {
  import { GameObj, IGameMoves } from 'boardgame.io/core';
  export class WrapperBoard {
    moves: any;
    events: any;
    store: any;
    updatePlayerID: (id: string) => void;
    step: () => void;
  }
  interface IClientArgs {
    game: any;
    numPlayer?: number;
    board?: React.ReactNode;
    multiplayer?: boolean;
    debug?: boolean;
    enhancer?: any;
    ai?: any;
  }
  export function Client(clientArgs: IClientArgs): WrapperBoard;
}

declare module 'boardgame.io/server' {
  import { GameObj } from 'boardgame.io/core';
  import * as Koa from 'koa';
  interface IServerArgs {
    games: GameObj[];
  }
  function Server(serverArgs: IServerArgs): Koa;
  export = Server;
}

declare module 'boardgame.io/ai';
