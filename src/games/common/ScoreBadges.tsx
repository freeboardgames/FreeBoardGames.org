import * as React from 'react';
import { IScore } from './Scoreboard';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';
import css from './ScoreBadges.css';
import Typography from '@material-ui/core/Typography';
import { IGameCtx } from 'boardgame.io/core';

interface IScoreBadgesProps {
  scoreboard: IScore[];
  players: IPlayerInRoom[];
  playerID: string;
  colors?: string[];
  ctx: IGameCtx;
}

export class ScoreBadges extends React.Component<IScoreBadgesProps, {}> {
  render() {
    const badges = this.props.scoreboard.map((score) => {
      const nickname = this.props.players.find((player) => player.playerID.toString() === score.playerID).name;
      const isSelf = score.playerID.toString() === this.props.playerID;
      const isActive = this.props.ctx.activePlayers !== null && score.playerID in this.props.ctx.activePlayers;
      const isCurrentPlayer = this.props.ctx.activePlayers === null && this.props.ctx.currentPlayer === score.playerID;
      return (
        <div
          className={css.ScoreBadge}
          key={score.playerID}
          style={{ borderColor: this.props.colors ? this.props.colors[score.playerID as any] : 'white' }}
          data-testid={`scorebadge-${score.playerID}`}
        >
          <span className={css.Nickname}>
            <Typography
              data-testid={`nickname-${score.playerID}`}
              style={{ color: 'white' }}
              className={isSelf ? css.Self : undefined}
              variant="body2"
            >
              {isActive || isCurrentPlayer ? '🕒 ' : ''}
              {nickname}
            </Typography>
          </span>
          <span>
            <Typography
              data-testid={`score-${score.playerID}`}
              style={{ color: 'white' }}
              className={isSelf ? css.Self : undefined}
              variant="body2"
            >
              {score.score}
            </Typography>
          </span>
        </div>
      );
    });
    return <div style={{ clear: 'left', paddingTop: '8px' }}>{badges}</div>;
  }
}
