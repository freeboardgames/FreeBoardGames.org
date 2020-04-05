import * as React from 'react';
import {IG, PHASES} from './game';
import {IGameCtx} from 'boardgame.io/core';
import {IGameArgs} from '../../components/App/Game/GameBoardWrapper';
import css from './board.css';
import {CARD_COLOR} from './card';
import {GameLayout} from '../../components/App/Game/GameLayout';
import {Lobby} from './Lobby';
import './global.css';

interface IBoardProps {
    G: IG;
    ctx: IGameCtx;
    moves: any;
    step?: any;
    events: any;
    playerID: string;
    gameArgs?: IGameArgs;
    isActive: boolean;
    isMultiplayer: boolean;
}

interface IBoardState {

}

export class Board extends React.Component<IBoardProps, IBoardState> {
    isHost = () => this.props.playerID === '0';

    _renderLobby = () => {
        return (
            <Lobby
                G={this.props.G}
                ctx={this.props.ctx}
                moves={this.props.moves}
                events={this.props.events}
                playerID={this.props.playerID}
                gameArgs={this.props.gameArgs}
                isHost={this.isHost()}
            />
        )
    };

    _clueGiven = () => {
        if (!this.props.isActive) return;

        this.props.moves.clueGiven();
    };

    _chooseCard = (cardIndex: number) => {
        if (!this.props.isActive) return;

        this.props.moves.chooseCard(cardIndex);
    };

    _renderBoard = () => {
        const player = this.props.G.players[this.props.playerID];
        const {isSpymaster} = player;
        let board = [];

        for (let i = 0; i < 25; i += 1) {
            const card = this.props.G.cards[i];

            const classes = [css.card];
            if (card.revealed || isSpymaster) {
                if (card.color === CARD_COLOR.BLUE) classes.push(css.cardBlue);
                else if (card.color === CARD_COLOR.RED) classes.push(css.cardRed);
                else if (card.color === CARD_COLOR.CIVILIAN) classes.push(css.cardCivilian);
                else if (card.color === CARD_COLOR.ASSASSIN) classes.push(css.cardAssassin);
            }

            board.push(
                <div
                    className={classes.join(' ')}
                    key={i}
                    onClick={() => this._chooseCard(i)}>
                    {card.word}
                </div>,
            );
        }

        return (
            <main>
                <div className={css.board}>
                    {board}
                </div>

                <button onClick={this._clueGiven}>Clue given</button>
            </main>
        );
    };

    _getScoreBoard = () => {
        return (
            <div>boe</div>
        );
    };

    render() {
        if (this.props.ctx.gameover) return (
            <GameLayout
                gameOver={'TEAM wins!'}
                extraCardContent={this._getScoreBoard()}
                gameArgs={this.props.gameArgs}
            />
        );

        if (this.props.ctx.phase === PHASES.LOBBY) {
            return this._renderLobby();
        } else {
            return this._renderBoard();
        }
    }
}

export default Board;
