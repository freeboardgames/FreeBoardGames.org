import React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { Grid } from '@freeboardgame.org/boardgame.io/ui';
import { Token } from '@freeboardgame.org/boardgame.io/ui';
import { IG, IScore } from './game';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { Scoreboard } from './Scoreboard';
import { GameMode } from '../../App/Game/GameModePicker';

import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';

export interface ICoords {
  x: number;
  y: number;
}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  _onClick = this.onClick.bind(this);

  onClick(coords: ICoords) {
    this.props.moves.placePiece(coords.x, coords.y);
  }

  _getGameOver() {
    const scoreboard: IScore[] = this.props.ctx.gameover.scoreboard;
    if (scoreboard[0].score === scoreboard[scoreboard.length - 1].score) {
      return 'draw';
    } else {
      if (scoreboard[0].score === scoreboard[this.props.playerID as any].score) {
        return 'you won';
      } else {
        return 'you lost';
      }
    }
  }

  _getScoreBoard() {
    return (
      <Scoreboard
        scoreboard={this.props.ctx.gameover.scoreboard}
        playerID={this.props.playerID}
        players={this.props.gameArgs.players}
      />
    );
  }

  isLocalGame() {
    return this.props.gameArgs && this.props.gameArgs.mode === GameMode.LocalFriend;
  }

  _getStatus() {
    if (!this.props.gameArgs) {
      return;
    }

    let message = '';
    if (this.isLocalGame()) {
      let player;
      switch (this.props.ctx.currentPlayer) {
        case '0': {
          player = 'Red';
          break;
        }
        case '1': {
          player = 'Green';
          break;
        }
      }
      message = `${player}'s turn`;
    } else if (this.props.ctx.currentPlayer !== this.props.playerID && !this.isLocalGame()) {
      message = 'Waiting for opponent...';
    }
    return message;
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getScoreBoard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    const colors =
      this.props.ctx.numPlayers !== 2
        ? [red[500], yellow[500], green[500], blue[500]]
        : [red[500], green[500], yellow[500], blue[500]];
    return (
      <GameLayout>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginTop: '16px' }}>
          {this._getStatus()}
        </Typography>
        <Grid rows={8} cols={8} onClick={this._onClick}>
          {this.props.G.points.map((point, i) => (
            <Token
              animate={false}
              key={i}
              x={i % 8}
              y={Math.floor(i / 8)}
              style={{ fill: point === null ? 'black' : colors[point as any], transition: 'fill .5s' }}
            ></Token>
          ))}
        </Grid>
      </GameLayout>
    );
  }
}
