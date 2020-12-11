import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { EmptyDisk, FilledDisk } from './Shapes';
import Typography from '@material-ui/core/Typography';
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';
import { numOfColumns, numOfRows, localPlayerNames } from './constants';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  step?: any;
}

export class Board extends React.Component<IBoardProps, {}> {
  onClick = (id: number) => {
    if (this.props.isActive) {
      this.props.moves.selectColumn(id);
    }
  };

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.currentPlayer === this.props.playerID) {
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

        // draw Red and Blue disks, and when every it is to be shown drop it down
        ['0', '1'].forEach((c) => {
          cells.push(
            <FilledDisk
              key={`filled_chip_${c}_${id}`}
              x={i}
              y={j}
              color={c}
              showOnScreen={c === this.props.G.grid[i][j]}
            />,
          );
        });

        cells.push(
          <EmptyDisk
            key={`empty_chip_${id}`}
            x={i}
            y={j}
            onClick={() => {
              this.onClick(id);
            }}
          />,
        );
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
        <svg width="100%" height="100%" viewBox="0 0 7 6" style={{ backgroundColor: 'black' }}>
          {this._getCells()}
        </svg>
      </div>
    );
  }

  _getGameOverBoard() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg width="50%" height="50%" viewBox="0 0 7 6" style={{ backgroundColor: 'black' }}>
          {this._getCells()}
        </svg>
      </div>
    );
  }
}

export default Board;
