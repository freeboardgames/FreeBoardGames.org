
import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import Typography from '@material-ui/core/Typography';
import {EnterWordPrompt} from './EnterWordPrompt';
import { isOnlineGame } from '../common/gameMode';

interface IBoardProps {
    G: any;
    ctx: any;
    moves: any;
    playerID: string;
    isActive: boolean;
    gameArgs?: IGameArgs;
    step?: any;
    events?:any;
}

export class Board extends React.Component<IBoardProps, {}> {

    constructor(props) {
        super(props);
        this._setWordForOpponent = this._setWordForOpponent.bind(this)
    }

    onClick = (letter: string) => () => {
        this.props.moves.letterSelected(letter);

        // when online, change turns only if the user is done guessing 
        if (isOnlineGame(this.props.gameArgs)) {
            const currentPlayer = this.props.ctx.currentPlayer; 
            const nextPlayer = currentPlayer==='0' ? '1': '0'; 
            const playerStatus = this.props.G.status[currentPlayer]; 

            // check if current player is done 
            if ( playerStatus.wordLen > 0 && 
                (!playerStatus.correctGuess.includes('_') || playerStatus.wrongGuess.length >= 10)) {
                    this.props.events.endTurn({'next': nextPlayer})
            } else {
                this.props.events.endTurn({'next': currentPlayer})
            }                
        } 
    };

    _getStatus(){
        if (isOnlineGame(this.props.gameArgs)) {
            if (this.props.ctx.currentPlayer === this.props.playerID) {
              return 'YOUR TURN';
            } else {
              return 'Waiting for opponent...';
            }
          }
        return 'Someone is playing';
    }

    _getWord() {
        console.log(this.props.ctx.currentPlayer, this.props.G.status)
        const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
        const word = playerStatus.correctGuess; 
        const breakLen = 8; 
        let xOffset = 1; 
        const yOffset = 3;
        const cells = []

        for(var y = 0; y < 3; y++){
            for(var x = 0; x < breakLen; x++ ) {
                const idx = y*breakLen+x;
                if ( idx >= word.length ) break; 
                var letter = word[idx];
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
        const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
        for (var i = 0; i < albhabets.length; i++) {    
            let textColor = "blue"; 
            if(playerStatus.correctGuess.indexOf(albhabets[i]) > -1) {
                textColor = "green"; 
            } 
            else if(playerStatus.wrongGuess.indexOf(albhabets[i]) > -1) {
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

    _setWordForOpponent(word: string) {
        this.props.moves.setWords(word);
        this.props.events.endTurn({ next: this.props.ctx.currentPlayer === '0' ? '1' : '0'})
    }

    _getBoard() {

        let toShow = null;

        // if the words are not available, ask players to enter them 
        if (this.props.G.status['0'].wordLen === 0 || this.props.G.status['1'].wordLen === 0) {

            if ( this.props.playerID === '0') {
                if (this.props.G.status['1'].wordLen === 0 && this.props.ctx.currentPlayer === '0') {
                    toShow = <EnterWordPrompt setEnterWord={this._setWordForOpponent} />
                } else {
                    toShow = 
                        <Typography variant="h6" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
                            Waiting for the Opponent to Enter a Word for you ... 
                        </Typography>
                }
                
            } else if (this.props.playerID === '1') {
                if (this.props.G.status['0'].wordLen === 0 && this.props.ctx.currentPlayer === '1') {
                    toShow = <EnterWordPrompt setEnterWord={this._setWordForOpponent} />
                } else {
                    toShow = 
                        <Typography variant="h6" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
                            Waiting for the Opponent to Enter a Word for you ... 
                        </Typography>
                }
            }
        } else {
            toShow = (
                <svg width="100%" height="100%" viewBox="0 0 10 10">
                    {this._getWord()} 
                    {this._getAlphabets()}
                </svg>
            );
        }

        return(
            <div>
                <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
                    {this._getStatus()}
                </Typography>
                { toShow }

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
