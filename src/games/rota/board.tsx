import React from 'react';
import { GameLayout } from 'components/App/Game/GameLayout';
import { IGameCtx } from 'boardgame.io/core';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import Typography from '@material-ui/core/Typography';
import { IG } from './game';
import { Field } from './Field';


interface IBoardProps {
    G: IG;
    ctx: IGameCtx;
    moves: any;
    playerID: string;
    gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {


    _getStatus() {
        return 'Game Title';
    }


    _getGameOver() {
        return 'Won';
    }



    render() {
        if (this.props.ctx.gameover) {
            return <GameLayout 
                gameOver={this._getGameOver()} 
                gameArgs={this.props.gameArgs} 
            />;
        }    
        return (
            <GameLayout gameArgs={this.props.gameArgs}>
                <Typography variant='h5' style={{color: 'white', textAlign: 'center'}}>
                    {this._getStatus()}
                </Typography>
                <Field />
            </GameLayout>
        );
      }




}

