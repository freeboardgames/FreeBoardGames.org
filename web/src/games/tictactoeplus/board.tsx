/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Circle, Cross, Lines, WildCardChar } from './Shapes';
import Typography from '@material-ui/core/Typography';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface IBoardInnerProps extends WithCurrentGameTranslation {}

interface IBoardOutterProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  step?: any;
}

export class BoardInternal extends React.Component<IBoardInnerProps & IBoardOutterProps, {}> {
  localPlayerNames = {
    '0': this.props.translate('red'),
    '1': this.props.translate('green'),
  };

  onClick = (id: number) => () => {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
    }
  };

  isActive(id: number) {
    return this.props.isActive && this.props.G.cells[id] === null;
  }

  _getPlayerName = (playerID = null) => {
    const pID = playerID === null ? this.props.ctx.currentPlayer : playerID;
    if (isLocalGame(this.props.gameArgs)) {
      return this.localPlayerNames[pID];
    } else {
      return this.props.gameArgs.players ? this.props.gameArgs.players[pID].name : this.props.translate('unknown');
    }
  };

  _getStatus() {
    if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return this.props.translate('your_turn');
      } else {
        return this.props.translate('waiting_for_player', { name: this._getPlayerName() });
      }
    } else {
      return this.props.translate('player_s_turn', { name: this._getPlayerName() });
    }
  }

  _getGameOver() {
    if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
      if (this.props.ctx.gameover.winner !== undefined) {
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return this.props.translate('you_won');
        } else {
          return this.props.translate('you_lost');
        }
      }
    } else {
      if (this.props.ctx.gameover.winner) {
        return `${this._getPlayerName(this.props.ctx.gameover.winner)} won`;
      }
    }
    return this.props.translate('draw');
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
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const id = 4 * i + j;
        cells.push(<rect key={`${id}`} x={i} y={j} width="1" height="1" fill="black" onClick={this.onClick(id)} />);
        let overlay;
        if (this.props.G.cells[id] === '0') {
          overlay = <Cross x={i} y={j} key={`cross${id}`} />;
        } else if (this.props.G.cells[id] === '1') {
          overlay = <Circle x={i} y={j} key={`circle${id}`} />;
        } else if (this.props.G.cells[id] === '2') {
          overlay = <WildCardChar x={i} y={j} key={`circle${id}`} />;
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
        <Typography
          variant="h5"
          data-testid="status"
          style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}
        >
          {this._getStatus()}
        </Typography>
        <svg width="100%" height="100%" viewBox="0 0 4 4">
          {this._getCells()}
          {Lines}
        </svg>
      </div>
    );
  }

  _getGameOverBoard() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg width="50%" height="50%" viewBox="0 0 4 4">
          {this._getCells()}
          {Lines}
        </svg>
      </div>
    );
  }
}

const enhance = compose<IBoardInnerProps, IBoardOutterProps>(withCurrentGameTranslation);

export const Board = enhance(BoardInternal);
