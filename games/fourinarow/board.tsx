import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import { EmptyDisk, CircleBlue, CircleRed } from './Shapes';
import Typography from '@material-ui/core/Typography';
import { isOnlineGame, isAIGame } from '../common/gameMode';
import { numOfColumns, numOfRows, localPlayerNames } from './constants';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID?: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  step?: any;
}

export class Board extends React.Component<IBoardProps, {}> {
  onClick = (id: number) => () => {
    if (this.isActive(id)) {
      this.props.moves.selectColumn(id);
      if (isAIGame(this.props.gameArgs)) {
        setTimeout(this.props.step, 250);
      }
    }
  };

  isActive(id: number) {
    const rowId = id % 10;
    const colId = Math.floor(id / 10);
    return this.props.isActive && this.props.G.grid[colId][rowId] === null;
  }

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.playerID === undefined) {
        return 'Spectator';
      } else if (this.props.ctx.currentPlayer === this.props.playerID) {
        return 'YOUR TURN';
      } else {
        return 'Waiting for opponent...';
      }
    } else {
      // Local or AI game
      return localPlayerNames[this.props.ctx.currentPlayer] + "'s turn";
    }
  }

  _getGameOver() {
    if (isOnlineGame(this.props.gameArgs)) {
      // Online game
      if (this.props.ctx.gameover.winner !== undefined) {
        if (this.props.playerID === undefined) {
          return 'someone won';
        }
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      } else {
        return 'draw';
      }
    } else if (isAIGame(this.props.gameArgs)) {
      switch (this.props.ctx.gameover.winner) {
        case '0':
          return 'you won';
        case '1':
          return 'you lost';
        case undefined:
          return 'draw';
      }
    } else {
      // Local game
      switch (this.props.ctx.gameover.winner) {
        case '0':
          return localPlayerNames['0'] + ' won';
        case '1':
          return localPlayerNames['1'] + ' won';
        case undefined:
          return 'draw';
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
    for (let i = 0; i < numOfColumns; i++) {
      for (let j = 0; j < numOfRows; j++) {
        const id = 10 * i + j;
        cells.push(
          <rect
            key={`cell_${id}`}
            x={i}
            y={j}
            width="1"
            height="1"
            //fill="#dac292"
            //stroke="#dac292"
            strokeWidth="0.05"
          />,
        );
        cells.push(<EmptyDisk x={i} y={j} key={`empty_chip_${id}`} onClick={this.onClick(id)} />);

        let overlay;
        if (this.props.G.grid[i][j] === '0') {
          overlay = <CircleBlue x={i} y={j} key={`chip_${id}`} />;
        } else if (this.props.G.grid[i][j] === '1') {
          overlay = <CircleRed x={i} y={j} key={`chip_${id}`} />;
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
        <svg width="100%" height="100%" viewBox="0 0 7 6">
          {this._getCells()}
        </svg>
      </div>
    );
  }

  _getGameOverBoard() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg width="50%" height="50%" viewBox="0 0 7 6">
          {this._getCells()}
        </svg>
      </div>
    );
  }
}

export default Board;
