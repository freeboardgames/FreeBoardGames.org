/*
 * Copyright 2018 The @freeboardgame.org/boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';

import Chess from './chessjswrapper';
import {
  Checkerboard,
  IAlgebraicCoords,
  ICartesianCoords,
  IColorMap,
  cartesianToAlgebraic,
  IOnDragData,
} from '../../common/Checkerboard';
import { Token } from '@freeboardgame.org/boardgame.io/ui';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { GameMode } from '../../App/Game/GameModePicker';
import Bishop from './pieces/bishop';
import King from './pieces/king';
import Knight from './pieces/knight';
import Pawn from './pieces/pawn';
import Queen from './pieces/queen';
import Rook from './pieces/rook';
import { playSound } from './sound';
import { IOptionsItems } from '../../App/Game/GameDarkSublayout';
import Typography from '@material-ui/core/Typography';

const COL_NAMES = 'abcdefgh';
const HIGHLIGHTED_COLOR = 'green';
const MOVABLE_COLOR = 'palegreen';
const MOVED_COLOR = '#CCE5FF';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  step: any;
  playerID: string;
  isActive: boolean;
  isConnected: boolean;
  gameArgs: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  chess = Chess();
  state = {
    selected: '',
    highlighted: '',
    dragged: '',
    soundEnabled: true,
  };

  render() {
    if (this.props.G.pgn) {
      this.chess.load_pgn(this.props.G.pgn);
    }
    if (this.props.ctx.gameover) {
      const gameOverBoard = (
        <div style={{ width: '50%', height: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
          <Checkerboard invert={this.getPlayer() === 'b'} onClick={(): undefined => undefined}>
            {this._getPieces()}
          </Checkerboard>
        </div>
      );
      return (
        <GameLayout gameOver={this._getGameOver()} gameArgs={this.props.gameArgs} extraCardContent={gameOverBoard} />
      );
    }
    return (
      <GameLayout optionsMenuItems={this._getOptionsMenuItems}>
        <div>
          <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
            {this._getStatus()}
          </Typography>
          <Checkerboard
            invert={this.getPlayer() === 'b'}
            highlightedSquares={this._getHighlightedSquares()}
            onClick={this._click}
          >
            {this._getPieces()}
          </Checkerboard>
        </div>
      </GameLayout>
    );
  }

  getPlayer(): 'w' | 'b' {
    if (this.props.playerID === '1') {
      return 'b';
    } else {
      return 'w';
    }
  }

  _click = (coords: IAlgebraicCoords) => {
    const { square } = coords;
    if (!this.props.isActive) {
      return;
    }

    if (!this.state.selected && this._isSelectable(square)) {
      this.setState({ ...this.state, selected: square, highlighted: square });
    } else if (this.state.selected) {
      this._tryMove(this.state.selected, square);
    }
  };

  _tryMove(from: string, to: string) {
    const moves = this._getMoves();
    // check if this is a valid move
    const move = moves.find(m => m.from === from && m.to === to);
    if (move) {
      // actually make the move
      this.props.moves.move(move.san);
      if (this._getSoundPref()) {
        playSound();
      }
      if (this.props.gameArgs && this.props.gameArgs.mode === GameMode.AI) {
        this.props.step();
      }
    }
    // clear the selection and highlighted piece
    this.setState({ ...this.state, selected: '', highlighted: '' });
  }

  _shouldDrag = (coords: ICartesianCoords) => {
    const x = coords.x;
    const y = coords.y;
    const square = cartesianToAlgebraic(x, y);
    const result = this.props.isActive && this._isSelectable(square);
    if (result) {
      this.setState({
        ...this.state,
        dragged: this._getInitialCell(square),
      });
      return true;
    }
  };

  _onDrag = (data: IOnDragData) => {
    const x = data.x;
    const y = data.y;
    const originalX = data.originalX;
    const originalY = data.originalY;
    if (Math.sqrt((x - originalX) ** 2 + (y - originalY) ** 2) > 0.2) {
      this.setState({
        ...this.state,
        selected: this._getSquare(originalX, originalY),
        highlighted: this._getSquare(x, y),
      });
    } else {
      this.setState({
        ...this.state,
        selected: '',
        highlighted: '',
      });
    }
  };

  _onDrop = (coords: ICartesianCoords) => {
    const x = coords.x;
    const y = coords.y;
    if (this.state.selected) {
      this.setState({ ...this.state, dragged: '' });
      this._tryMove(this.state.selected, this._getSquare(x, y));
    }
  };

  _getHighlightedSquares() {
    const result = {} as IColorMap;
    const history = this._fixHistory(this.chess.history({ verbose: true }));
    if (history.length > 0) {
      const lastMove = history[history.length - 1];
      if (this._getCurrentPlayer() !== lastMove.color) {
        result[lastMove.from] = MOVED_COLOR;
        result[lastMove.to] = MOVED_COLOR;
      }
    }
    for (const move of this._getMoves()) {
      result[move.to] = MOVABLE_COLOR;
    }
    if (this.state.highlighted) {
      result[this.state.highlighted] = HIGHLIGHTED_COLOR;
    }
    return result;
  }

  _getSquare(x: number, y: number) {
    return cartesianToAlgebraic(this._getInRange(x), this._getInRange(y));
  }

  _getInRange(x: number) {
    return Math.max(Math.min(Math.round(x), 7), 0);
  }

  _getPieces() {
    const dragged = [];
    const result = [];
    for (let y = 1; y <= 8; y++) {
      for (let x = 0; x < 8; x++) {
        const square = COL_NAMES[x] + y;
        const piece = this.chess.get(square);
        if (piece) {
          const token = (
            <Token
              draggable={true}
              shouldDrag={this._shouldDrag}
              onDrag={this._onDrag}
              onDrop={this._onDrop}
              square={square}
              animate={true}
              key={this._getInitialCell(square)}
            >
              {this._getPieceByTypeAndColor(piece.type, piece.color)}
            </Token>
          );
          if (square === this.state.dragged) {
            result.push(token);
          } else {
            dragged.push(token);
          }
        }
      }
    }
    return dragged.concat(result);
  }

  _setSoundPref = (soundEnabled: boolean) => {
    this.setState(oldState => {
      return { ...oldState, soundEnabled };
    });
  };

  _toggleSoundPref = () => {
    this._setSoundPref(!this._getSoundPref());
  };

  _getSoundPref = () => {
    return this.state.soundEnabled;
  };

  _getOptionsMenuItems = () => {
    const curSoundPref = this._getSoundPref();
    const newSoundPref = !curSoundPref;
    const option: IOptionsItems = {
      onClick: this._toggleSoundPref,
      text: `${newSoundPref ? 'Enable' : 'Disable'} sound`,
    };
    const options = [option];
    return options;
  };

  _getPieceByTypeAndColor(type: string, color: string) {
    switch (type) {
      case 'b':
        return <Bishop color={color} />;
      case 'k':
        return <King color={color} />;
      case 'n':
        return <Knight color={color} />;
      case 'p':
        return <Pawn color={color} />;
      case 'q':
        return <Queen color={color} />;
      case 'r':
        return <Rook color={color} />;
    }
  }

  _getGameOver() {
    const gameArgs = this.props.gameArgs;
    const mode = gameArgs.mode;
    if (mode === GameMode.OnlineFriend || mode === GameMode.AI) {
      if (this.props.ctx.gameover === this.getPlayer()) {
        return 'you won';
      } else if (this.props.ctx.gameover === 'd') {
        return 'draw';
      } else {
        return 'you lost';
      }
    } else {
      // Local game
      switch (this.props.ctx.gameover) {
        case 'w':
          return 'white won';
        case 'b':
          return 'black won';
        case 'd':
          return 'draw';
      }
    }
  }

  _getStatus() {
    // Online Multiplayer
    if (this.props.gameArgs && this.props.gameArgs.mode === GameMode.OnlineFriend) {
      if (this.chess.in_check()) {
        return 'CHECK';
      }
      if (this.chess.turn() === this.getPlayer()) {
        return 'YOUR TURN';
      } else {
        return 'Waiting for opponent...';
      }
    } else {
      // Local game
      if (this.chess.in_check()) {
        return 'CHECK';
      }
      switch (this.chess.turn()) {
        case 'w':
          return "White's turn";
        case 'b':
          return "Black's turn";
      }
    }
  }

  _getInitialCell(square: string) {
    const history = this._fixHistory(this.chess.history({ verbose: true }));
    let lastSeen = square;
    for (let i = history.length - 1; i >= 0; i--) {
      const move = history[i];
      if (lastSeen === move.to) {
        lastSeen = move.from;
      }
    }
    return lastSeen;
  }

  // Castling only contains one move, leading to wrong initial cell.
  _fixHistory(history: any) {
    const result = [];
    for (const move of history) {
      let newMove = null;
      if (move.san === 'O-O-O') {
        if (move.color === 'w') {
          newMove = { from: 'a1', to: 'd1' };
        } else {
          newMove = { from: 'a8', to: 'd8' };
        }
      } else if (move.san === 'O-O') {
        if (move.color === 'w') {
          newMove = { from: 'h1', to: 'f1' };
        } else {
          newMove = { from: 'h8', to: 'f8' };
        }
      }
      result.push(move);
      if (newMove) {
        result.push(newMove);
      }
    }
    return result;
  }

  _isSelectable(square: string) {
    const piece = this.chess.get(square);
    return piece && piece.color === this._getCurrentPlayer() && this.chess.moves({ square }).length > 0;
  }

  _getCurrentPlayer() {
    if (this.props.ctx.currentPlayer === '0') {
      return 'w';
    } else {
      return 'b';
    }
  }

  _getMoves() {
    if (!this.state.selected) {
      return [];
    }
    return this.chess.moves({
      verbose: true,
      square: this.state.selected,
    });
  }
}
