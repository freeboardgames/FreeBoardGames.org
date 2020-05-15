import * as React from 'react';
import css from './Lobby.css';
import { getPlayerTeam, isPlayerSpymaster } from './util';
import { IG } from './definitions';

interface ILobbyPlayerProps {
  G: IG;
  moves: any;
  playerID: string;
  players: any;
  isHost: boolean;
}

interface ILobbyPlayerState {}

export class LobbyPlayer extends React.Component<ILobbyPlayerProps, ILobbyPlayerState> {
  _makeSpymaster = (playerID: string) => {
    this.props.moves.makeSpymaster(playerID);
  };

  _isPlayerInTeam = (): boolean => {
    return getPlayerTeam(this.props.G, this.props.playerID) !== undefined;
  };

  render() {
    return (
      <li>
        {isPlayerSpymaster(this.props.G, this.props.playerID) ? <span>[S] </span> : ''}
        {this.props.players[this.props.playerID].name}
        {!isPlayerSpymaster(this.props.G, this.props.playerID) && this.props.isHost && this._isPlayerInTeam() ? (
          <button
            className={[css.btn, css.btnSpymaster].join(' ')}
            onClick={() => this._makeSpymaster(this.props.playerID)}
          >
            Make Spymaster
          </button>
        ) : (
          ''
        )}
      </li>
    );
  }
}
