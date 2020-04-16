import * as React from 'react';
import { IG, TeamColor } from './definitions';
import css from './Lobby.css';
import Button from '@material-ui/core/Button';
import { getPlayerTeam } from './util';

interface ILobbyTeamProps {
  G: IG;
  playerID: string;
  moves: any;
  classes: string;
  teamPlayers: any;
  teamName: string;
  teamColor: TeamColor;
}

interface ILobbyTeamState {}

export class LobbyTeam extends React.Component<ILobbyTeamProps, ILobbyTeamState> {
  _switchTeam = (teamColor: TeamColor) => {
    if (this.props.playerID === null) return;
    if (!this.canSwitchToTeam(teamColor)) return;

    this.props.moves.switchTeam(teamColor);
  };

  canSwitchToTeam = (teamColor: TeamColor): boolean => {
    if (this.props.playerID === null) return false;
    const team = getPlayerTeam(this.props.G, this.props.playerID);

    return team?.color !== teamColor;
  };

  render() {
    return (
      <div className={this.props.classes}>
        <h3>{this.props.teamName}</h3>
        <ul>{this.props.teamPlayers}</ul>
        <Button
          className={css.selectTeamBtn}
          variant="contained"
          onClick={() => this._switchTeam(this.props.teamColor)}
          color="secondary"
          disabled={!this.canSwitchToTeam(this.props.teamColor)}
        >
          Select
        </Button>
      </div>
    );
  }
}
