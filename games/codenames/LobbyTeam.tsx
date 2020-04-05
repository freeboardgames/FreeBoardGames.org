import * as React from 'react';
import Player from './player';
import css from './board.css';
import {IG} from './game';

interface ILobbyTeamProps {
    G: IG;
    playerID: string;
    moves: any;
    classes: string;
    teamPlayers: any;
    teamName: string;
    teamID: number;
}

interface ILobbyTeamState {

}

export class LobbyTeam extends React.Component<ILobbyTeamProps, ILobbyTeamState> {
    _switchTeam = (teamID: number) => {
        if (this.props.playerID === null) return;
        if (!this.canSwitchToTeam(teamID)) return;

        this.props.moves.switchTeam(teamID);
    };

    canSwitchToTeam = (teamID: number) => {
        if (this.props.playerID === null) return false;

        return this.props.G.players[this.props.playerID].teamID !== teamID;
    };

    render() {
        return (
            <div className={this.props.classes}>
                <h2>{this.props.teamName}</h2>
                <button
                    onClick={() => this._switchTeam(this.props.teamID)}
                    disabled={!this.canSwitchToTeam(this.props.teamID)}>Switch to {this.props.teamName}
                </button>
                <ul>
                    {this.props.teamPlayers}
                </ul>
            </div>
        );
    }
}
