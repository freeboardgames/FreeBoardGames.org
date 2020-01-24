
import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import Typography from '@material-ui/core/Typography';
import { isOnlineGame } from '../common/gameMode';

interface IBoardProps {
    G: any;
    ctx: any;
    moves: any;
    playerID: string;
    isActive: boolean;
    gameArgs?: IGameArgs;
    step?: any;
}

export class Board extends React.Component<IBoardProps, {}> {


    _getStatus(){
        return 'Someone is playing'; 
    }

    _getCells() {
        return (
            <div>
                
            </div>
        );
    }

    _getBoard() {
        return(
            <div>
                <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
                    {this._getStatus()}
                </Typography>
                <svg width="100%" height="100%" viewBox="0 0 3 3">
                    {this._getCells()}
                </svg>
            </div>
        );
    }

    _getGameOver() {
        if (isOnlineGame(this.props.gameArgs)) {
            
        }
        return 'someone won';
    }

    _getGameOverBoard() {
        return(
            <div>

            </div>
        );
    }


    render() {
        if (this.props.ctx.gameover) {
            return (
              <GameLayout
                gameOver={this._getGameOver()}
                extraCardContent={this._getGameOverBoard()}
                gameArgs={this.props.gameArgs}
              />
            );
          }
          return <GameLayout gameArgs={this.props.gameArgs}>{this._getBoard()}</GameLayout>;
    }

}



export default Board;
