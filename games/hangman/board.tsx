
import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import Typography from '@material-ui/core/Typography';
// import {SimpleModal} from './Shapes';
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

    onClick = (letter: string) => () => {
        this.props.moves.letterSelected(letter);
    };

    _getStatus(){
        return 'Someone is playing';
    }

    _getWord() {
        const word = this.props.G.status.word;
        const breakLen = 8; 
        let xOffset = 1; 
        const yOffset = 3;
        const cells = []

        for(var y = 0; y < 3; y++){
            for(var x = 0; x < breakLen; x++ ) {
                const idx = y*breakLen+x;
                if ( idx >= word.length ) break; 
                var letter = this.props.G.status.correct.indexOf(word[idx]) > -1 ? word[idx] : '_';
                cells.push(
                    <g key={'word_group'+ idx}>
                        <rect key={ "word_rect_" + idx} x={x+xOffset} y={y+yOffset} width="1" height="1" fill="white" />
                        <text key={ "word_letter_" + idx} x={x + xOffset + 0.3} y={y + yOffset + 0.7} fontSize={0.7} fill="green">{letter}</text>   
                    </g>
                );
            }
        }
        return cells;
    }

    _getAlphabets() {

        const albhabets = "abcdefghijklmnopqrstuvwxyz";
        const cells = []; 
        for (var i = 0; i < albhabets.length; i++) {    
            let textColor = "blue"; 
            if(this.props.G.status.correct.indexOf(albhabets[i]) > -1) {
                textColor = "green"; 
            } 
            else if(this.props.G.status.wrong.indexOf(albhabets[i]) > -1) {
                textColor = "red";
            }    
            let x:number = i;
            let y:number = 7;
            if (i >= 10 && i < 19) {
                x = ( i - 10 ) + 0.5; 
                y = y + 1
            } 
            if (i >= 19 ) {
                x = (i - 19) + 1.5; 
                y = y + 2;
            }
            cells.push(
                <g key={'alph_group'+ i} onClick={this.onClick(albhabets[i])} >
                    <rect key={ "alph_rect_" + i} x={x} y={y} width="1" height="1" fill="white" />
                    <text key={ "alph_" + i} x={x + 0.3} y={y + 0.7} fontSize={0.7} fill={textColor}>{albhabets[i]}</text>   
                </g>
            )
        };
        return cells;
    }

    _getBoard() {
        return(
            <div>
                <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
                    {this._getStatus()}
                </Typography>
                <svg width="100%" height="100%" viewBox="0 0 10 10">
                    {this._getWord()}
                    {this._getAlphabets()}
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
