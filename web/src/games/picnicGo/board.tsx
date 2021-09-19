import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { isSpectator } from 'gamesShared/helpers/GameUtil';
import { Ctx } from 'boardgame.io';
import { IG } from './types';
import { BottomInfo } from './components/BottomInfo';
import { PlayerInfo } from './components/PlayerInfo';
import Typography from '@material-ui/core/Typography';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getScoreboard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs} maxWidth="750px">
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '8px' }}>
          ROUND {this.props.G.round}
        </Typography>
        {this._getPlayersInfo()}
        <BottomInfo playerID={this.props.playerID} G={this.props.G} ctx={this.props.ctx} />
      </GameLayout>
    );
  }

  _getGameOver() {
    const scoreboard: IScore[] = this.props.ctx.gameover.scoreboard;
    if (scoreboard[0].score === scoreboard[scoreboard.length - 1].score) {
      return 'draw';
    } else {
      if (isSpectator(this.props.playerID)) {
        return 'see scoreboard';
      }
      if (scoreboard[0].score === scoreboard.find((e) => e.playerID === this.props.playerID).score) {
        return 'you won';
      } else {
        return 'you lost';
      }
    }
  }

  _getScoreboard() {
    return (
      <Scoreboard
        scoreboard={this.props.ctx.gameover.scoreboard}
        playerID={this.props.playerID}
        players={this.props.gameArgs.players}
      />
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
