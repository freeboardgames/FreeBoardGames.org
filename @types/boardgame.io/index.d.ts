declare module 'boardgame.io/core' {
  export namespace TurnOrder {
    const DEFAULT: ITurnOrder;
    const RESET: ITurnOrder;
    const CONTINUE: ITurnOrder;
    const ONCE: ITurnOrder;
    const CUSTOM: (playOrder: any) => ITurnOrder;
    const CUSTOM_FROM: (playOrderField: string) => ITurnOrder;
  }

  export namespace Stage {
    const NULL: string;
  }

  export namespace ActivePlayers {
    const ALL: IActivePlayers;
    const ALL_ONCE: IActivePlayers;
    const OTHERS: IActivePlayers;
    const OTHERS_ONCE: IActivePlayers;
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
    setStage: (stage: string) => void;
    endStage: () => void;
    setActivePlayers: (activePlayers: IActivePlayers) => void;
  }
  interface IEvents {
    endTurn?: boolean;
    endPhase?: boolean;
    endGame?: boolean;
  }
  interface IGameCtx {
    phase?: string;
    playerID?: string;
    numPlayers: number;
    turn: number;
    currentPlayer: string;
    currentPlayerMoves: number;
    activePlayers: {
      [key: string]: string;
    };
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
  interface ITurnOrder {
    playOrder?: (G: any, ctx: IGameCtx) => number[] | string[];
    first: (G: any, ctx: IGameCtx) => number;
    next: (G: any, ctx: IGameCtx) => number;
    actionPlayers?: IActionPlayers;
  }
  interface IActivePlayers {
    currentPlayer?: string;
    others?: string;
    all?: string;
    value?: {
      [key: string]: string;
    };
    moveLimit?: number;
    revert?: boolean;
    next?: IActivePlayers;
  }
  interface IStages {
    [name: string]: {
      moveLimit?: number;
      next?: string;
      moves?: IGameMoves;
    };
  }
  interface ITurn {
    order?: ITurnOrder;
    moveLimit?: number;
    endIf?: (G: any, ctx: IGameCtx) => boolean | object;
    onBegin?: (G: any, ctx: IGameCtx) => any;
    onEnd?: (G: any, ctx: IGameCtx) => any;
    onMove?: (G: any, ctx: IGameCtx) => any;
    activePlayers?: IActivePlayers;
    stages?: IStages;
  }
  interface IGamePhases {
    [name: string]: {
      next?: string;
      start?: boolean;
      moves?: IGameMoves;
      endIf?: (G: any, ctx: IGameCtx) => boolean | object;
      onBegin?: (G: any, ctx: IGameCtx) => any;
      onEnd?: (G: any, ctx: IGameCtx) => any;
      onMove?: (G: any, ctx: IGameCtx) => any;
      turn?: ITurn;
    };
  }

  interface IGameArgs {
    name?: string;
    setup: (ctx: IGameCtx) => any;
    moves?: IGameMoves;
    playerView?: (G: any, ctx: IGameCtx, playerID: string) => any;
    seed?: string;
    turn?: ITurn;
    endIf?: (G: any, ctx: IGameCtx) => void;
    phases?: IGamePhases;
    events?: IEvents;
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
