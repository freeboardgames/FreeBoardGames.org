
import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import Typography from '@material-ui/core/Typography';
import {EnterWordPrompt} from './EnterWordPrompt';
import { isOnlineGame } from '../common/gameMode';
import { grey, red, blue } from '@material-ui/core/colors';

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
    }

    _getWord() {
        const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
        const word = playerStatus.correctGuess; 
        const breakLen = 8; 
        const cells = []

        // max 2 lines are allowed, each with max 8 characters 
        for(var y = 0; y < 2; y++) {
            
            // decide the offset based on number of letters in current line 
            let charsOnLine = word.length - y * breakLen;
            let xOffset = 5 - ( charsOnLine < breakLen ? charsOnLine : breakLen ) / 2;
            let numOfLines = Math.ceil(word.lenth / breakLen);
            let yOffset = 1 + ( 1 + y ) * 0.3 + ( numOfLines === 1 ? 0.8 : 0); 

            for(var x = 0; x < breakLen; x++ ) {
                const idx = y*breakLen+x;
                if ( idx >= word.length ) break; 
                var letter = word[idx];
                cells.push(
                    <g key={'word_group'+ idx}>
                        <text 
                            key={ "word_letter_" + idx} 
                            x={x + xOffset + 0.5} y={y + yOffset}
                            fontSize={0.85} textAnchor="middle"
                            fill="#40c4ff"
                        >
                            {letter !== '_' ? letter.toUpperCase() : ' '}
                        </text>  
                        <line
                            x1={x + xOffset + 0.1}
                            y1={y + yOffset + 0.25}
                            x2={x + xOffset + 0.9}
                            y2={y + yOffset + 0.25}
                            stroke="#40c4ff"
                            style={{"strokeWidth": 0.125}}
                        /> 
                    </g>
                );
            }
        }

        // add hint 
        // split string into data of equal size
        let splittedHint = playerStatus.wordHint.match(/.{1,33}/g);
        let hintText = [ <tspan key={'hint_text_hint'} x={1.2} y={3.6} fontWeight="bold" > Hint: </tspan> ]; 
        let hintLineNo = 1; 
        for(var h of splittedHint){
            hintText.push(<tspan key={'hint_text_'+h} x={1.2} dy={0.6} >{h}</tspan>);
            hintLineNo = hintLineNo + 1;
        }

        cells.push(
            <g key={'hint_group'}>
            {/* <rect 
                key= {"hint box"}
                x={1} y={4} width={8} height={2}
                fill={grey[700]}
            /> */}
            <text 
                key={ "hint text"} 
                x={1.2} y={3.6}
                fontSize={0.5} alignmentBaseline="before-edge"
                fill={ grey[400] }
            >
                { hintText }                
            </text>  
            </g>
        )

        // cells.push(
        //     <div>
        //         <Typography variant="subtitle2" style={{ textAlign: 'center', color: grey[400], marginBottom: '16px' }}>
        //             {playerStatus.wordHint}
        //         </Typography>
        //     </div>
        // )


        return cells;
    }

    _getAlphabets() {

        const albhabets = "abcdefghijklmnopqrstuvwxyz";
        const cells = []; 
        const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
        for (var i = 0; i < albhabets.length; i++) {    
            let textColor = null; 
            if(playerStatus.correctGuess.indexOf(albhabets[i]) > -1) {
                textColor = "#00e676";
            } 
            else if(playerStatus.wrongGuess.indexOf(albhabets[i]) > -1) {
                textColor = "#ff1744";
            }    
            let lineNo = Math.floor(i/9); 
            let x:number = ( i - ( 9 * lineNo ) ) * 1.1 + 0.1
            let y:number = 6.5 + lineNo * 1.2;            
            if (i >= 18 ) {
                x = (i - 18) * 1.1 + 0.6; 
            }
            cells.push(
                <g key={'alph_group'+ i} onClick={this.onClick(albhabets[i])} >
                    <circle   
                        key={ "alph_rect_" + i} 
                        cx={x+0.5} cy={y+0.5} r={0.45} 
                        fill={textColor} 
                        strokeWidth={0.05}
                        stroke={grey[50]}                        
                    />
                    <text 
                        key={ "alph_" + i} 
                        x={x + 0.5} y={y + 0.5} 
                        fontSize={0.65} dy={0.2}
                        fill="white" textAnchor="middle"
                    >
                        {albhabets[i].toUpperCase()}
                    </text>   
                </g>
            )
        };
        return cells;
    }

    _setWordForOpponent(word: string, hint:string) {
        this.props.moves.setWords(word, hint);
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
        // Online game
        if (isOnlineGame(this.props.gameArgs)) {
            if (this.props.ctx.gameover.winner !== undefined) {
                if (this.props.ctx.gameover.winner === this.props.playerID) {
                    return 'you won';
                } else {
                    return 'you lost';
                }
            } else {
                return 'draw';
            }
        }
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
