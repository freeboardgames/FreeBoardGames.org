import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';

export enum ECardState {
    HIDDEN, SHOWN, OPEN
}

export enum ECardAnimation {
    FRONT, BACK, AS_IT_IS
}

export interface ICardInfo {
    id: number;
    name: string; 
    state: ECardState;
    openedBy?: string;
}

export interface IGameState {
    gridSize: number;
    cards: ICardInfo[];
    timeShownCards: boolean;
}

export interface IBoardState{

}

export interface IBoardProps{
    G: IGameState;
    ctx: Ctx;
    moves: any;
    playerID: string;
    isActive: boolean;
    gameArgs?: IGameArgs;
    events?: any;
}

