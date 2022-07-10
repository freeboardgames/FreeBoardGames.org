/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as React from 'react';
import { IGameArgs } from 'fbg-games/gamesShared/definitions/game';
import { GameLayout } from 'fbg-games/gamesShared/components/fbg/GameLayout';
import { Circle, Cross, Lines } from './Shapes';
import Typography from '@mui/material/Typography';
import { isFirstPersonView } from 'fbg-games/gamesShared/helpers/GameUtil';

interface Props {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs: IGameArgs;
  translate: (msgId: string) => string;
  step?: any;
}

class Board extends React.Component<Props, {}> {
  onClick = (id: number) => () => {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
    }
  };

  isActive(id: number) {
    return this.props.isActive && this.props.G.cells[id] === null;
  }

  _getStatus() {
    if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return this.props.translate('your_turn');
      } else {
        return this.props.translate('waiting_for_opponent');
      }
    } else {
      switch (this.props.ctx.currentPlayer) {
        case '0':
          return this.props.translate('red_s_turn');
        case '1':
          return this.props.translate('green_s_turn');
      }
    }
  }

  _getGameOver() {
    if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
      // Online game
      if (this.props.ctx.gameover.winner !== undefined) {
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return this.props.translate('you_won');
        } else {
          return this.props.translate('you_lost');
        }
      } else {
        return 'draw';
      }
    } else {
      // Local game
      switch (this.props.ctx.gameover.winner) {
        case '0':
          return this.props.translate('red_won');
        case '1':
          return this.props.translate('green_won');
        case undefined:
          return this.props.translate('draw');
      }
    }
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getGameOverBoard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }
    return <GameLayout gameArgs={this.props.gameArgs}>{this._getBoard()}</GameLayout>;
  }

  _getCells() {
    const cells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(<rect key={`${id}`} x={i} y={j} width="1" height="1" fill="black" onClick={this.onClick(id)} />);
        let overlay;
        if (this.props.G.cells[id] === '0') {
          overlay = <Cross x={i} y={j} key={`cross${id}`} />;
        } else if (this.props.G.cells[id] === '1') {
          overlay = <Circle x={i} y={j} key={`circle${id}`} />;
        }
        if (overlay) {
          cells.push(overlay);
        }
      }
    }
    return cells;
  }
  _getBoard() {
    return (
      <div>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {this._getStatus()}
        </Typography>
        <svg width="100%" height="100%" viewBox="0 0 3 3">
          {this._getCells()}
          {Lines}
        </svg>
      </div>
    );
  }

  _getGameOverBoard() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg width="50%" height="50%" viewBox="0 0 3 3">
          {this._getCells()}
          {Lines}
        </svg>
      </div>
    );
  }
}

export default Board;