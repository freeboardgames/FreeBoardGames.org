/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import Chess from './chessjswrapper';
import { Checkerboard, IAlgebraicCoords, IColorMap } from './checkerboard';
import { Token } from 'boardgame.io/ui';
import GameBar from '../../App/Game/GameBar';
import { GameSharing } from '../../App/Game/GameSharing';
import Bishop from './pieces/bishop';
import King from './pieces/king';
import Knight from './pieces/knight';
import Pawn from './pieces/pawn';
import Queen from './pieces/queen';
import Rook from './pieces/rook';
import AlertLayer from '../../App/Game/AlertLayer';
import * as ReactGA from 'react-ga';

const COL_NAMES = 'abcdefgh';
const SELECTED_COLOR = 'green';
const MOVABLE_COLOR = 'palegreen';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  isConnected: boolean;
}

function getBoard(matchCode: string) {
  class Board extends React.Component<IBoardProps, {}> {
    static propTypes = {
      G: PropTypes.any.isRequired,
      ctx: PropTypes.any.isRequired,
      moves: PropTypes.any.isRequired,
      playerID: PropTypes.string,
      isActive: PropTypes.bool,
      isConnected: PropTypes.bool,
    };

    chess = Chess();
    state = {
      selected: '',
      dismissedSharing: false,
    };
    _click = this.click.bind(this);
    _dismissSharing = this.dismissSharing.bind(this);

    componentWillReceiveProps(nextProps: IBoardProps) {
      if (nextProps.G.pgn) {
        this.chess.load_pgn(nextProps.G.pgn);
        this.setState({
          ...this.state,
          selected: '',
        });
      }
    }

    dismissSharing() {
      this.setState({
        ...this.state,
        dismissedSharing: true,
      });
    }

    render() {
      let alert = null;
      if (!this.props.isConnected) {
        alert = (
          <AlertLayer>
            <h1>Connection lost</h1>
            Trying to connect...
          </AlertLayer>);
      }
      if (!this.state.dismissedSharing && matchCode &&
           this.props.playerID === '0') {
        alert = (
          <AlertLayer>
            <GameSharing
              gameCode={'chess'}
              matchCode={matchCode}
              playerID={this.props.playerID}
              onDismiss={this._dismissSharing}
            />
          </AlertLayer>
        );
      }
      return (
        <GameBar
          text={this._getStatus()}
          backgroundColor={this.chess.turn() === 'b' ? 'black' : 'white'}
          textColor={this.chess.turn() === 'b' ? 'white' : 'black'}
          alert={alert}
        >
          <Checkerboard
            style={{position: 'fixed', bottom: 0, maxWidth: '500px'}}
            invert={this.props.playerID === '1'}
            highlightedSquares={this._getHighlightedSquares()}
            onClick={this._click}
          >
            {this._getPieces()}
          </Checkerboard>
        </GameBar>
      );
    }

    click(coords: IAlgebraicCoords) {
      ReactGA.event({
        category: 'ChessGame',
        action: 'click',
      });
      const { square } = coords;
      if (!this.props.isActive) {
        return;
      }

      if (!this.state.selected && this._isSelectable(square)) {
        this.setState({
          ...this.state,
          selected: square,
        });
      }

      if (this.state.selected) {
        const moves = this._getMoves();
        const move = moves.find((m: any) => {
          return m.from === this.state.selected && m.to === square;
        });
        if (move) {
          this.props.moves.move(move.san);
        } else {
          this.setState({
            ...this.state,
            selected: '',
          });
        }
      }
    }

    _getHighlightedSquares() {
      const result = {} as IColorMap;
      if (this.state.selected) {
        result[this.state.selected] = SELECTED_COLOR;
      }
      for (const move of this._getMoves()) {
        result[move.to] = MOVABLE_COLOR;
      }
      return result;
    }

    _getPieces() {
      const result = [];
      for (let y = 1; y <= 8; y++) {
        for (let x = 0; x < 8; x++) {
          const square = COL_NAMES[x] + y;
          const p = this.chess.get(square);
          if (p) {
            result.push(
              <Token
                square={square}
                animate={true}
                key={this._getInitialCell(square)}
                onClick={this._click}
              >
                {this._getPieceByTypeAndColor(p.type, p.color)}
              </Token>,
            );
          }
        }
      }
      return result;
    }

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

    _getStatus() {
      if (this.props.ctx.winner) {
        switch (this.props.ctx.winner) {
          case 'b':
            return 'Black won!';
          case 'w':
            return 'White won!';
          case 'd':
            return 'Draw!';
        }
      }
      if (this.chess.in_check()) {
        return 'CHECK';
      }
      switch (this.chess.turn()) {
        case 'w':
          return 'White\'s turn';
        case 'b':
          return 'Black\'s turn';
      }
    }

    _getInitialCell(square: string) {
      const history = this.chess.history({ verbose: true });
      let lastSeen = square;
      for (let i = history.length - 1; i >= 0; i--) {
        const move = history[i];
        if (lastSeen === move.to) {
          lastSeen = move.from;
        }
      }
      return lastSeen;
    }

    _isSelectable(square: string) {
      const piece = this.chess.get(square);
      return (
        piece &&
        piece.color === this._getCurrentPlayer() &&
        this.chess.moves({ square }).length > 0
      );
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
  return Board;
}

export default getBoard;
