import * as React from 'react';
import {IG} from './game';
import {IGameCtx} from 'boardgame.io/core';
import {IGameArgs} from '../../components/App/Game/GameBoardWrapper';

interface IBoardProps {
    G: IG;
    ctx: IGameCtx;
    moves: any;
    step?: any;
    playerID: string,
    gameArgs?: IGameArgs
}

interface IBoardState {

}

export class Board extends React.Component<IBoardProps, IBoardState> {
    render() {
        return (
            <h1>Codenames!</h1>
        )
    }
}

export default Board;
