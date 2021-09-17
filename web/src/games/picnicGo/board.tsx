import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG /* cardEnum */ } from './types';
// import { Card } from './components/Card';
import { Hand } from './components/Hand';
import { PlayerInfo } from './components/PlayerInfo';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs} maxWidth="750px">
        {this._getPlayersInfo()}
        <Hand playerID={this.props.playerID} G={this.props.G} ctx={this.props.ctx} />
      </GameLayout>
    );
  }

  _getPlayersInfo() {
    let p = (parseInt(this.props.playerID, 10) + 1) % this.props.ctx.numPlayers;
    let players = [];

    for (let i = 0; i < this.props.ctx.numPlayers; i++) {
      const playerName = this.props.gameArgs.players.find((e) => e.playerID === p).name;

      players.push(
        <PlayerInfo
          key={p}
          G={this.props.G}
          playerName={playerName}
          playerID={p.toString()}
          isSelf={i === this.props.ctx.numPlayers - 1}
          isActive={this.props.ctx.activePlayers && this.props.ctx.activePlayers.hasOwnProperty(p)}
        />,
      );
      p = (p + 1) % this.props.ctx.numPlayers;
    }

    return players;
  }
}
