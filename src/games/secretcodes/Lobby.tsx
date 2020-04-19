import * as React from 'react';
import { IG, TeamColor } from './definitions';
import css from './Lobby.css';
import { LobbyTeam } from './LobbyTeam';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import { LobbyPlayer } from './LobbyPlayer';
import { Ctx } from 'boardgame.io';
import { isLocalGame } from '../common/gameMode';
import Button from '@material-ui/core/Button';
import { getPlayerTeam } from './util';

interface ILobbyProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
  isHost: boolean;
}

interface ILobbyState {}

export class Lobby extends React.Component<ILobbyProps, ILobbyState> {
  componentDidMount() {
    if (isLocalGame(this.props.gameArgs) && this.gameCanStart()) {
      this.props.events.endPhase();
    }
  }

  gameCanStart = (): boolean => {
    const { numPlayers } = this.props.ctx;
    if (this.props.G.teams[0].spymasterID === null || this.props.G.teams[1].spymasterID === null) return false;
    return this.props.G.teams.reduce((sum, t) => sum + t.playersID.length, 0) === numPlayers;
  };

  _startGame = () => {
    this.props.events.endPhase();
  };

  render() {
    const teams = {
      [TeamColor.Blue]: [],
      [TeamColor.Red]: [],
      unassigned: [],
    };
    const { players } = this.props.gameArgs;

    for (const playerID in players) {
      const item = (
        <LobbyPlayer
          key={playerID}
          G={this.props.G}
          moves={this.props.moves}
          playerID={playerID}
          players={players}
          isHost={this.props.isHost}
        />
      );

      teams[getPlayerTeam(this.props.G, playerID)?.color || 'unassigned'].push(item);
    }

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Select teams</h1>

        <div className={css.teamsContainer}>
          <LobbyTeam
            moves={this.props.moves}
            G={this.props.G}
            playerID={this.props.playerID}
            classes={[css.team, css.teamBlue].join(' ')}
            teamName={'Blue Team'}
            teamPlayers={teams[TeamColor.Blue]}
            teamColor={TeamColor.Blue}
          />
          <LobbyTeam
            moves={this.props.moves}
            G={this.props.G}
            playerID={this.props.playerID}
            classes={[css.team, css.teamRed].join(' ')}
            teamName={'Red Team'}
            teamPlayers={teams[TeamColor.Red]}
            teamColor={TeamColor.Red}
          />
          <div className={[css.team, css.unassigned].join(' ')}>
            <h3>Unassigned</h3>
            <ul>{teams.unassigned}</ul>
          </div>
        </div>

        {!this.gameCanStart() ? (
          <p className={css.text}>
            In order to start the game all players need to join a team and each team must have a spymaster.
          </p>
        ) : null}

        {this.props.isHost ? (
          <Button
            style={{ float: 'right' }}
            variant="contained"
            onClick={this._startGame}
            color="primary"
            disabled={!this.gameCanStart()}
          >
            Done, play!
          </Button>
        ) : null}
      </div>
    );
  }
}
