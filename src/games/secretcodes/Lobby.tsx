import * as React from 'react';
import { IG } from './definitions';
import css from './Lobby.css';
import mainCss from './main.css';
import { LobbyTeam } from './LobbyTeam';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import { LobbyPlayer } from './LobbyPlayer';
import { IGameCtx } from 'boardgame.io/core';
import { isLocalGame } from '../common/gameMode';
import Button from '@material-ui/core/Button';

interface ILobbyProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
  isHost: boolean;
}

interface ILobbyState {}

export class Lobby extends React.Component<ILobbyProps, ILobbyState> {
  gameCanStart = (): boolean => {
    const { numPlayers } = this.props.ctx;
    if (this.props.G.teams[0].spymaster === null || this.props.G.teams[1].spymaster === null) return false;
    return this.props.G.teams.reduce((sum, t) => sum + t.players.length, 0) === numPlayers;
  };

  _startGame = () => {
    if (!isLocalGame(this.props.gameArgs)) {
      if (this.props.playerID !== '0') return;
      if (!this.gameCanStart()) return;
    }

    this.props.events.endPhase();
  };

  render() {
    const teams = {
      0: [],
      1: [],
      unassigned: [],
    };
    const { players } = this.props.gameArgs;

    for (const playerIndex in this.props.G.players) {
      const player = this.props.G.players[playerIndex];
      const item = (
        <LobbyPlayer
          key={playerIndex}
          playerIndex={playerIndex}
          moves={this.props.moves}
          player={player}
          players={players}
          isHost={this.props.isHost}
        />
      );

      teams[player.teamID?.toString() || 'unassigned'].push(item);
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
            teamPlayers={teams[0]}
            teamID={0}
          />
          <LobbyTeam
            moves={this.props.moves}
            G={this.props.G}
            playerID={this.props.playerID}
            classes={[css.team, css.teamRed].join(' ')}
            teamName={'Red Team'}
            teamPlayers={teams[1]}
            teamID={1}
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

        {this.props.isHost || isLocalGame(this.props.gameArgs) ? (
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
