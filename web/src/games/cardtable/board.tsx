import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';

interface IBoardProps {
    G: IG;
    ctx: Ctx;
    moves: any;
    playerID: string;
    gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
    render() {
        let playerName = `Player ${this.props.gameArgs.playerID}`;
        const ctxObj = this.props.ctx;
        const propsPID = this.props.playerID;
        return (
            <GameLayout
                gameArgs={this.props.gameArgs}>
                <h2>Hello {playerName}!</h2>
                <h2>PropsPlayerID {propsPID}</h2>
                <pre>{JSON.stringify(this.props.gameArgs, null, 2)}</pre>
                <pre>{JSON.stringify(ctxObj, null, 2)}</pre>
            </GameLayout>
        );
    }
}

