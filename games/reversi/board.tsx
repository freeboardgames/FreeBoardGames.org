import React from 'react';
import { IGameArgs } from 'components/App//Game/GameBoardWrapper';
import { GameLayout } from 'components/App//Game/GameLayout';
import { Grid } from '@freeboardgame.org/boardgame.io/ui';
import { Token } from '@freeboardgame.org/boardgame.io/ui';
import { IG, getScoreBoard } from './game';
import { IScore } from '../common/Scoreboard';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { Scoreboard } from '../common/Scoreboard';
import { GameMode } from 'components/App/Game/GameModePicker';
import { ScoreBadges } from '../common/ScoreBadges';
import css from './Board.css';

import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

import Typography from '@material-ui/core/Typography';
import { isAIGame } from '../common/gameMode';

export interface ICoords {
  x: number;
  y: number;
}

export interface IColorMap {
  [key: string]: string;
}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  step?: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  _onClick = this.onClick.bind(this);

  async onClick(coords: ICoords) {
    if (isAIGame(this.props.gameArgs) && this.props.ctx.currentPlayer === '1') {
      return;
    }

    await this.props.moves.placePiece(coords.x, coords.y);
    if (isAIGame(this.props.gameArgs) && this.props.ctx.currentPlayer === '1') {
      setTimeout(() => this.props.step(), 1000);
    }
  }

  _getGameOver() {
    const scoreboard: IScore[] = this.props.ctx.gameover.scoreboard;
    if (scoreboard[0].score === scoreboard[scoreboard.length - 1].score) {
      return 'draw';
    } else {
      if (scoreboard[0].score === scoreboard.find(rank => rank.playerID === this.props.playerID).score) {
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
    } else if (this.props.ctx.currentPlayer === this.props.playerID && !this.isLocalGame()) {
      message = 'Place piece';
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
    const colorMap = this.getColorMap();

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {this._getStatus()}
        </Typography>
        <Grid rows={8} cols={8} onClick={this._onClick} colorMap={colorMap}>
          {this.props.G.points
            .map((point, i) => ({ player: point, position: i }))
            .filter(point => point.player !== null)
            .map(point => (
              <Token animate={false} key={point.position} x={point.position % 8} y={(point.position / 8) << 0}>
                <rect
                  width="0.8"
                  height="0.8"
                  x="0.1"
                  y="0.1"
                  style={{ fill: colors[point.player as any] }}
                  className={css.Piece}
                ></rect>
              </Token>
            ))}
        </Grid>
        <ScoreBadges
          scoreboard={getScoreBoard(this.props.G, this.props.ctx)}
          playerID={this.props.playerID}
          players={this.props.gameArgs.players}
          colors={colors}
        />
      </GameLayout>
    );
  }

  getColorMap(): IColorMap {
    const colorMap = {} as IColorMap;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const key = `${x},${y}`;
        let color: any = grey[800];
        if ((x + y) % 2 === 0) {
          color = grey[900];
        }
        colorMap[key] = color;
      }
    }
    return colorMap;
  }
}
