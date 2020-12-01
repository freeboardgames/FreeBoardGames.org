import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';

export enum ECardState {
    HIDDEN, SHOWN, OPEN
}

export interface ICardInfo {
    id: number;
    content: string; 
    state: ECardState;
}

export interface IGameState {
    cards: ICardInfo[];
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

