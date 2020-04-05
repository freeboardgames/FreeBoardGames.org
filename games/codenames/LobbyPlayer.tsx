import * as React from 'react';
import Player from './player';
import css from './Lobby.css';

interface ILobbyPlayerProps {
    moves: any;
    playerIndex: string;
    player: Player;
    players: any;
    isHost: boolean;
}

interface ILobbyPlayerState {

}

export class LobbyPlayer extends React.Component<ILobbyPlayerProps, ILobbyPlayerState> {
    _makeSpymaster = (player: Player) => {
        this.props.moves.makeSpymaster(player);
    };

    render() {
        return (
            <li>
                {this.props.player.isSpymaster ? <span>[S] </span> : ''}
                {this.props.players[this.props.playerIndex].name}
                {!this.props.player.isSpymaster && this.props.isHost
                    ? <button
                        className={[css.btn, css.btnSpymaster].join(' ')}
                        onClick={() => this._makeSpymaster(this.props.player)}>Make Spymaster</button>
                    : ''}
            </li>
        );
    }
}
