import React from 'react';
import { GameLayout } from 'components/App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { IG } from './game';
import { Field } from './Field';
import { Phase } from './game';
import Typography from '@material-ui/core/Typography';
import css from './Board.css';
import { isOnlineGame, isAIGame, isLocalGame } from '../common/gameMode';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  selected: number;
}

export class Board extends React.Component<IBoardProps, {}> {
  state: IBoardState = { selected: null };

  _getStatus() {
    if (!this.props.gameArgs) {
      return;
    }

    let prefix = '';
    if (isLocalGame(this.props.gameArgs)) {
      prefix = this.props.ctx.currentPlayer === '0' ? '[WHITE]' : '[RED]';
    }

    if (this.props.ctx.currentPlayer !== this.props.playerID && !isLocalGame(this.props.gameArgs)) {
      return 'Waiting for opponent...';
    } else if (this.props.G.haveToRemovePiece) {
      return `${prefix} REMOVE PIECE`;
    }

    if (this.props.ctx.phase === Phase.Place) {
      return `${prefix} PLACE PIECE`;
    } else {
      return `${prefix} MOVE PIECE`;
    }
  }

  _getGameOver() {
    if (isOnlineGame(this.props.gameArgs) || isAIGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return 'you lost';
      }
    } else {
      if (this.props.ctx.gameover.winner === '0') {
        return 'white won';
      } else {
        return 'red won';
      }
    }
  }

  _selectPoint = (id: number) => {
    if (this.props.playerID !== this.props.ctx.currentPlayer && !isLocalGame(this.props.gameArgs)) {
      return;
    }

    if (this.props.G.haveToRemovePiece) {
      this.props.moves.removePiece(id);
    } else if (this.props.ctx.phase === Phase.Place) {
      this.props.moves.placePiece(id);
    } else if (this.state.selected === null) {
      if (
        this.props.G.points[id].piece !== null &&
        this.props.G.points[id].piece.player === this.props.ctx.currentPlayer
      ) {
        this.setState({ selected: id });
      }
    } else {
      this.props.moves.movePiece(this.state.selected, id);
      this.setState({ selected: null });
    }
  };

  render() {
    if (this.props.ctx.gameover) {
      return <GameLayout gameOver={this._getGameOver()} gameArgs={this.props.gameArgs} />;
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <Typography variant="h5" className={css.Status}>
          {this._getStatus()}
        </Typography>
        <Field points={this.props.G.points} selectPoint={this._selectPoint} selected={this.state.selected}></Field>
      </GameLayout>
    );
  }
}
