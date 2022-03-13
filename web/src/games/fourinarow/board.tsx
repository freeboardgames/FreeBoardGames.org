import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';
import { EmptyDisk, FilledDisk } from './Shapes';
import Typography from '@material-ui/core/Typography';
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';
import { numOfColumns, numOfRows, localPlayerNames } from './constants';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';

interface IBoardInnerProps extends WithCurrentGameTranslation {}

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  step?: any;
}

export class BoardInternal extends React.Component<IBoardProps & IBoardInnerProps, {}> {
  onClick = (id: number) => {
    if (this.props.isActive) {
      this.props.moves.selectColumn(id);
    }
  };

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs)) {
      const pName = this.props.gameArgs.players[this.props.ctx.currentPlayer].name;
      if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
        if (this.props.ctx.currentPlayer === this.props.playerID) {
          return this.props.translate('board.your_turn');
        } else {
          return this.props.translate('board.waiting_for_player', { pName });
        }
      } else {
        return this.props.translate('board.player_turn', { pName });
      }
    } else {
      // Local or AI game
      const pName = this.props.translate(localPlayerNames[this.props.ctx.currentPlayer]);
      return this.props.translate('board.player_turn', { pName });
    }
  }

  _getGameOver() {
    if (isOnlineGame(this.props.gameArgs)) {
      // Online game
      if (this.props.ctx.gameover.winner !== undefined) {
        if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
          if (this.props.ctx.gameover.winner === this.props.playerID) {
            return this.props.translate('board.game_over.you_won');
          } else {
            return this.props.translate('board.game_over.you_lost');
          }
        } else {
          return this.props.translate('board.game_over.player_won', {
            pName: this.props.gameArgs.players[this.props.ctx.gameover.winner].name,
          });
        }
      } else {
        return this.props.translate('board.game_over.draw');
      }
    } else if (isAIGame(this.props.gameArgs)) {
      switch (this.props.ctx.gameover.winner) {
        case '0':
          return this.props.translate('board.game_over.you_won');
        case '1':
          return this.props.translate('board.game_over.you_lost');
        case undefined:
          return this.props.translate('board.game_over.draw');
      }
    } else {
      // Local game
      const winner_pName = this.props.translate(localPlayerNames[this.props.ctx.gameover.winner]);

      switch (this.props.ctx.gameover.winner) {
        case '0':
        case '1':
          return this.props.translate('board.game_over.player_won', { pName: winner_pName });
        case undefined:
          return this.props.translate('board.game_over.draw');
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
    for (let i = numOfColumns - 1; i >= 0; i--) {
      for (let j = numOfRows - 1; j >= 0; j--) {
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

const enhance = compose<IBoardInnerProps, IBoardProps>(withCurrentGameTranslation);
export const Board = enhance(BoardInternal);
