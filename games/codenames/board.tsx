import * as React from 'react';
import {IG, PHASES} from './game';
import {IGameCtx} from 'boardgame.io/core';
import {IGameArgs} from '../../components/App/Game/GameBoardWrapper';
import css from './board.css';
import Player from './player';

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

    canSwitchToTeam = (teamID: number) => {
        if(this.props.playerID === null) return false;

        return this.props.G.players[this.props.playerID].teamID !== teamID;
    };

    _chooseCard = (cardIndex: number) => {
        console.log(cardIndex);

        if (!this.props.isActive) return;
        // this.props.moves.chooseCard;
    };

    _switchTeam = (teamID: number) => {
        if(this.props.playerID === null) return;
        if(!this.canSwitchToTeam(teamID)) return;

        this.props.moves.switchTeam(teamID);
    };

    _makeSpymaster = (player: Player) => {
        this.props.moves.makeSpymaster(player);
    };

    gameCanStart = (): boolean => {
        const { numPlayers } = this.props.ctx;
        if(this.props.G.teams[0].spymaster === null || this.props.G.teams[1].spymaster === null) return false;
        return this.props.G.teams.reduce((sum, t) => sum + t.players.length, 0) === numPlayers;
    };

    _startGame = () => {
        if(this.props.playerID !== '0') return;
        if(!this.gameCanStart()) return;

        this.props.events.endPhase();
    };

    _renderLobby = () => {
        let teamBlue = [];
        let teamRed = [];
        let unassigned = [];
        const {players} = this.props.gameArgs;

        for(const playerIndex in this.props.G.players) {
            const player = this.props.G.players[playerIndex];

            switch (player.teamID) {
                case 0:
                    teamBlue.push(
                        <li key={playerIndex}>
                            {player.isSpymaster ? <span>[S]</span> : ''}
                            {players[playerIndex].name}
                            {!player.isSpymaster && this.isHost()
                                ? <button
                                    onClick={() => this._makeSpymaster(player)}>make spymaster</button>
                                : ''}
                        </li>
                    );
                    break;
                case 1:
                    teamRed.push(
                        <li key={playerIndex}>
                            {player.isSpymaster ? <span>[S]</span> : ''}
                            {players[playerIndex].name}
                            {!player.isSpymaster && this.isHost()
                                ? <button
                                    onClick={() => this._makeSpymaster(player)}>make spymaster</button>
                                : ''}
                        </li>
                    );
                    break;
                default:
                    unassigned.push(
                        <li key={playerIndex}>{players[playerIndex].name}</li>
                    );
                    break;

            }
        }

        return (
            <main>
                <h1>Lobby</h1>

                <div className={css.teamsContainer}>
                    <div className={[css.team, css.teamBlue].join(' ')}>
                        <h2>Blue Team</h2>
                        <button
                            onClick={() => this._switchTeam(0)}
                            disabled={!this.canSwitchToTeam(0)}>Switch to Blue Team</button>
                        <ul>
                            {teamBlue}
                        </ul>
                    </div>
                    <div className={`${css.team} ${css.teamRed}`}>
                        <h2>Red Team</h2>
                        <button onClick={() => this._switchTeam(1)}
                                disabled={!this.canSwitchToTeam(1)}>Switch to Blue Team</button>
                        <ul>
                            {teamRed}
                        </ul>
                    </div>
                    <div className={`${css.unassigned}`}>
                        <h2>Unassigned</h2>
                        <ul>
                            {unassigned}
                        </ul>
                    </div>
                </div>

                <p>In order to start the game all players need to join a team and each team must have a spymaster.</p>

                {this.isHost()
                    ? <button
                        onClick={this._startGame}
                        disabled={!this.gameCanStart()}>Start game</button>
                    : ''
                }
            </main>
        )
    };

    _renderBoard = () => {
        let board = [];

        for (let i = 0; i < 25; i += 1) {
            board.push(
                <div
                    className={css.card}
                    key={i}
                    onClick={() => this._chooseCard(i)}>
                    {this.props.G.cards[i].word}
                </div>,
            );
        }

        return (
            <main>
                <div className={css.board}>
                    {board}
                </div>

                <button onClick={this.props.moves.clueGiven}>Clue given</button>
            </main>
        );
    };

    render() {
        if (this.props.ctx.phase === PHASES.LOBBY) {
            return this._renderLobby();
        } else {
            return this._renderBoard();
        }
    }
}

export default Board;
