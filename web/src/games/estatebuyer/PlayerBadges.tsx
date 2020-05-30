import * as React from 'react';
import { IScore } from './Scoreboard';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';
import Typography from '@material-ui/core/Typography';
import { Ctx } from 'boardgame.io';
import { isPlayersTurn } from '../common/GameUtil';
import { PlayerBadge } from './PlayerBadge';
import { Phases } from './game';

import css from './PlayerBadges.css';

export interface IPlayerBadgesProps {
  scores?: IScore[];
  players: IPlayerInRoom[];
  playerID: string;
  colors?: string[];
  ctx: Ctx;
}

export class PlayerBadges extends React.Component<IPlayerBadgesProps, {}> {
  _getPlayerScore(playerID: string): IScore | undefined {
    if (!this.props.scores) {
      return;
    }
    return this.props.scores.find((score) => score.playerID === playerID);
  }

  _isSelf(player: IPlayerInRoom) {
    // Local Game
    if (this.props.playerID === null){
      return player.playerID.toString() === this.props.ctx.currentPlayer;
    }

    return player.playerID.toString() === this.props.playerID;
  }

  render() {
    const badges = this.props.players.map((player) => {
      const borderColor = this.props.colors ? this.props.colors[player.playerID] : 'white';
      return (
        <PlayerBadge
          key={player.playerID}
          playerID={player.playerID}
          name={player.name}
          active={isPlayersTurn(player.playerID.toString(), this.props.ctx)}
          self={this._isSelf(player)}
          score={this._getPlayerScore(player.playerID.toString())}
          color={borderColor}
          />
      );
    });
    return <div className={css.playerBadgeContainer}>{badges}</div>;
  }
}
