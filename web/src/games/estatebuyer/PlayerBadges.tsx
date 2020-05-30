import * as React from 'react';
import { IScore } from './Scoreboard';
import IPlayer from './player';
import { Phases } from './game';
import { Ctx } from 'boardgame.io';
import { PlayerBadge } from './PlayerBadge';

import css from './PlayerBadges.css';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';

export interface IPlayerBadgesProps {
  players: IPlayer[];
  playersMeta: IPlayerInRoom[];
  scores?: IScore[];
  playerID: string;
  colors?: string[];
  ctx: Ctx;
}

export class PlayerBadges extends React.Component<IPlayerBadgesProps, {}> {
  _getPlayerScore(playerIndex: number): IScore | undefined {
    if (!this.props.scores) {
      return;
    }
    return this.props.scores.find((score) => score.playerID === playerIndex.toString());
  }

  _isSelf(playerIndex: number): boolean {
    // Local Game
    if (this.props.playerID === null){
      return playerIndex.toString() === this.props.ctx.currentPlayer;
    }

    return playerIndex.toString() === this.props.playerID;
  }

  _isPlayersTurn(playerIndex: any): boolean {
    if (playerIndex == this.props.playerID){
      return true;
    }

    if (this.props.ctx.activePlayers != null
      && (this.props.ctx.activePlayers as any).find((currentValue) => (playerIndex == currentValue)) !== "undefined"){
      return true;
    }

    return false;
  }

  render() {
    const badges = this.props.players.map((player, playerIndex) => {
      const borderColor = this.props.colors ? this.props.colors[playerIndex] : 'white';
      return (
        <PlayerBadge
          key={playerIndex}
          playerID={playerIndex}
          name={this.props.playersMeta[playerIndex].name}
          active={this._isPlayersTurn(playerIndex)}
          self={this._isSelf(playerIndex)}
          score={this._getPlayerScore(playerIndex)}
          incomingCards={(this.props.ctx.phase == Phases.auction) ? player.buildings : player.checks}
          color={borderColor}
          />
      );
    });
    return <div className={css.playerBadgeContainer}>{badges}</div>;
  }
}
