import * as React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG, toCoord } from './game';
import {
  Checkerboard,
  IAlgebraicCoords,
  ICartesianCoords,
  IOnDragData,
  applyInvertion,
} from '../../common/Checkerboard';
import { GameMode } from '../../App/Game/GameModePicker';
import { Token } from '@freeboardgame.org/boardgame.io/ui';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  step?: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  selected: ICartesianCoords;
}

function roundCoords(coords: ICartesianCoords) {
  return { x: Math.round(coords.x), y: Math.round(coords.y) };
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  state: IBoardState = {
    selected: null,
  };

  isInverted() {
    return this.isOnlineGame() && this.props.playerID === '1';
  }

  _onClick = (coords: IAlgebraicCoords) => {
    console.log(coords);
  };

  _onDrag = (coords: IOnDragData) => {
    const x = coords.x;
    const y = coords.y;
    const originalX = coords.originalX;
    const originalY = coords.originalY;
    if (Math.sqrt((x - originalX) ** 2 + (y - originalY) ** 2) > 0.2) {
      this.setState({
        ...this.state,
        selected: applyInvertion({ x: originalX, y: originalY }, this.isInverted()),
        //highlighted: this._getSquare(x, y),
      });
    } else {
      this.setState({
        ...this.state,
        selected: null,
        //highlighted: '',
      });
    }
  };

  stepAI = () => {
    setTimeout(async () => {
      await this.props.step();
      if (this.props.ctx.currentPlayer === '1') {
        this.stepAI();
      }
    }, 1000);
  };

  _onDrop = async (coords: ICartesianCoords) => {
    if (this.state.selected) {
      this.props.moves.move(this.state.selected, applyInvertion(roundCoords(coords), this.isInverted()));
      if (this.isAIGame() && this.props.ctx.currentPlayer === '1') {
        this.stepAI();
      }
    }
  };

  getPieces = () => {
    return this.props.G.board
      .map((piece, index) => ({ data: piece, index }))
      .filter(piece => piece.data !== null)
      .map(piece => {
        const { x, y } = toCoord(piece.index);
        return (
          <Token
            x={x}
            y={y}
            draggable={true}
            shouldDrag={() => true}
            onDrop={this._onDrop}
            onDrag={this._onDrag}
            animate={true}
            key={piece.data.id}
          >
            <g>
              <circle r="0.4" fill={piece.data.playerID === '0' ? grey[50] : grey[900]} cx="0.5" cy="0.5" />
              {piece.data.isKing ? (
                <circle r="0.2" cx="0.5" cy="0.5" fill={piece.data.playerID === '1' ? grey[800] : grey[400]} />
              ) : null}
            </g>
          </Token>
        );
      });
  };

  isLocalGame() {
    return this.props.gameArgs && this.props.gameArgs.mode === GameMode.LocalFriend;
  }

  isOnlineGame() {
    return this.props.gameArgs && this.props.gameArgs.mode === GameMode.OnlineFriend;
  }

  isAIGame() {
    return this.props.gameArgs && this.props.gameArgs.mode === GameMode.AI;
  }

  _getStatus() {
    if (this.isOnlineGame()) {
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return 'Move piece';
      } else {
        return 'Waiting for opponent...';
      }
    } else {
      switch (this.props.ctx.currentPlayer) {
        case '0':
          return "White's turn";
        case '1':
          return "Black's turn";
      }
    }
  }

  _getGameOver() {
    const winner = this.props.ctx.gameover.winner;
    if (winner) {
      if (this.isLocalGame()) {
        if (winner === '0') {
          return 'white won';
        } else {
          return 'black won';
        }
      } else {
        if (winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      }
    }
  }

  render() {
    if (this.props.ctx.gameover) {
      return <GameLayout gameOver={this._getGameOver()} gameArgs={this.props.gameArgs} />;
    }

    return (
      <GameLayout>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {this._getStatus()}
        </Typography>
        <Checkerboard onClick={this._onClick} invert={this.isInverted()}>
          {this.getPieces()}
        </Checkerboard>
      </GameLayout>
    );
  }
}
