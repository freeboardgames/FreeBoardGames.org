import * as React from 'react';
import { IScore } from './Scoreboard';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';
import css from './ScoreBadges.css';
import Typography from '@material-ui/core/Typography';
import { Ctx } from 'boardgame.io';
import { isPlayersTurn } from './GameUtil';

interface IScoreBadgesProps {
  scoreboard: IScore[];
  players: IPlayerInRoom[];
  playerID: string;
  colors?: string[];
  ctx: Ctx;
}

export class ScoreBadges extends React.Component<IScoreBadgesProps, {}> {
  render() {
    const badges = this.props.scoreboard.map((score) => {
      const nickname = this.props.players.find((player) => player.playerID.toString() === score.playerID).name;
      const isSelf = score.playerID.toString() === this.props.playerID;
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
              {isPlayersTurn(score.playerID, this.props.ctx) ? '🕒 ' : ''}
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
