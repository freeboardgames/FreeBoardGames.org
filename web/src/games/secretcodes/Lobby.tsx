import * as React from 'react';
import { IG, TeamColor } from './definitions';
import css from './Lobby.css';
import { LobbyTeam } from './LobbyTeam';
import { IGameArgs } from 'gamesShared/definitions/game';
import { LobbyPlayer } from './LobbyPlayer';
import { Ctx } from 'boardgame.io';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';
import Button from '@material-ui/core/Button';
import { getPlayerTeam, gameCanStart } from './util';

interface ILobbyProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
  isHost: boolean;
}

interface ILobbyState { }

export class Lobby extends React.Component<ILobbyProps, ILobbyState> {
  componentDidMount() {
    if (isLocalGame(this.props.gameArgs) && gameCanStart(this.props.G, this.props.ctx)) {
      this._startGame();
    }
  }

  _startGame = () => {
    this.props.moves.startGame();
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

        {!gameCanStart(this.props.G, this.props.ctx) ? (
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
            disabled={!gameCanStart(this.props.G, this.props.ctx)}
          >
            Done, play!
          </Button>
        ) : null}
      </div>
    );
  }
}
