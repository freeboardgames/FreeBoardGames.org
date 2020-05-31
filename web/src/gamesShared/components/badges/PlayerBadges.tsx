import * as React from 'react';
import { IScore } from 'gamesShared/components/scores/Scoreboard';
import { IPlayerInRoom } from 'gamesShared/definitions/player';
import css from './PlayerBadges.css';
import Typography from '@material-ui/core/Typography';
import { Ctx } from 'boardgame.io';
import { isPlayersTurn } from 'gamesShared/helpers/GameUtil';

interface IPlayerBadgesProps {
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
    return player.playerID.toString() === this.props.playerID;
  }

  _renderName(player: IPlayerInRoom) {
    return (
      <span>
        <Typography
          data-testid={`nickname-${player.playerID}`}
          style={{ color: 'white' }}
          className={this._isSelf(player) ? css.Self : undefined}
          variant="body2"
        >
          {isPlayersTurn(player.playerID.toString(), this.props.ctx) ? '🕒 ' : ''}
          {player.name}
        </Typography>
      </span>
    );
  }

  _maybeRenderScore(player: IPlayerInRoom) {
    const score = this._getPlayerScore(player.playerID.toString());
    if (!score) {
      return;
    }
    return (
      <span className={css.Score}>
        <Typography
          data-testid={`score-${score.playerID}`}
          style={{ color: 'white' }}
          className={this._isSelf(player) ? css.Self : undefined}
          variant="body2"
        >
          {score.score}
        </Typography>
      </span>
    );
  }

  render() {
    const badges = this.props.players.map((player) => {
      const borderColor = this.props.colors ? this.props.colors[player.playerID] : 'white';
      return (
        <div
          className={css.PlayerBadge}
          key={player.playerID}
          style={{ borderColor }}
          data-testid={`badge-${player.playerID}`}
        >
          {this._renderName(player)}
          {this._maybeRenderScore(player)}
        </div>
      );
    });
    return <div className={css.PlayerBadgeContainer}>{badges}</div>;
  }
}
