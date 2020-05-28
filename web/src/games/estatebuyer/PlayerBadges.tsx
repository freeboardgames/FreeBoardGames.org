import * as React from 'react';
import { IScore } from './Scoreboard';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';
import Typography from '@material-ui/core/Typography';
import { Ctx } from 'boardgame.io';
import { isPlayersTurn } from '../common/GameUtil';
import { Phases } from './game';

import css from './PlayerBadges.css';

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
    // Local Game
    if (this.props.playerID === null){
      return player.playerID.toString() === this.props.ctx.currentPlayer;
    }

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

  _maybeRenderField(playerID: any, value: any, slf: boolean, tname: string, csname: string) {
    return (
      <span className={csname}>
        <Typography
          data-testid={`${tname}-${playerID}`}
          style={{ color: 'white' }}
          className={self ? css.Self : undefined}
          variant="body2"
        >
          {value}
        </Typography>
      </span>
    );
  }

  _maybeRenderMoney(player: IPlayerInRoom) {
    const score = this._getPlayerScore(player.playerID.toString());
    if (!score) {
      return;
    }
    return this._maybeRenderField(score.playerID, "$"+score.score, this._isSelf(player), "money", css.Money);
  }

  _maybeRenderBid(player: IPlayerInRoom) {
    const score = this._getPlayerScore(player.playerID.toString());
    if (!score) {
      return;
    }
    if (this.props.ctx.phase !=  Phases.auction){
      return;
    }
    let val: any = "No Bid";
    if (score.passed){
      val = "Passed";
    } else if (score.bid > 0){
      val = score.bid;
    }
    return this._maybeRenderField(score.playerID, val, this._isSelf(player), "bid", css.Bid);
  }

  _maybeRenderScore(player: IPlayerInRoom) {
    const score = this._getPlayerScore(player.playerID.toString());
    if (!score) {
      return;
    }
    return this._maybeRenderField(score.playerID, "$"+score.score, this._isSelf(player), "score", css.Score);
  }

  render() {
    const badges = this.props.players.map((player) => {
      const borderColor = this.props.colors ? this.props.colors[player.playerID] : 'white';
      const cname = [css.PlayerBadge, isPlayersTurn(player.playerID.toString(), this.props.ctx) ? css.Active : ''].join(' ');
      return (
        <div
          className={cname}
          key={player.playerID}
          style={{ borderColor }}
          data-testid={`badge-${player.playerID}`}
        >
          {this._renderName(player)}
          {this._maybeRenderBid(player)}
          {this._maybeRenderScore(player)}
        </div>
      );
    });
    return <div className={css.PlayerBadgeContainer}>{badges}</div>;
  }
}
