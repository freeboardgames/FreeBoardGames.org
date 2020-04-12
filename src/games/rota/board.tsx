import React from 'react';
import { GameLayout } from 'components/App/Game/GameLayout';
import { IGameCtx } from 'boardgame.io/core';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { isOnlineGame, isAIGame, isLocalGame } from '../common/gameMode';
import Typography from '@material-ui/core/Typography';
import { IG, Phase } from './game';
import { Field } from './Field';


interface IBoardProps {
    G: IG;
    ctx: IGameCtx;
    moves: any;
    playerID: string;
    gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {

    _pointClicked = (pointID:number) => {
        if (this.props.playerID !== this.props.ctx.currentPlayer && !isLocalGame(this.props.gameArgs)) {
            return;
        }
        if (this.props.ctx.phase === Phase.Place) {
            this.props.moves.placePiece(pointID);
        }
    };

    _getStatus() {
        return 'Game Title';
    }


    _getGameOver() {
        if (isOnlineGame(this.props.gameArgs) || isAIGame(this.props.gameArgs)) {
            if (this.props.ctx.gameover.winner === this.props.playerID) {
                return 'you won';
            } else {
                return 'you lost';
            }
        } else {
            if (this.props.ctx.gameover.winner === '0') {
                return 'red won';
            } else {
                return 'blue won';
            }
        }
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
                <Field 
                    points={this.props.G.points}
                    selectPoint={this._pointClicked}
                />
            </GameLayout>
        );
      }




}

