/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import GameBar from '../../App/Game/GameBar';
// import './board.css';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  isConnected: boolean;
  isMultiplayer: boolean;
  isPreview: boolean
}

interface IBoardState {
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
    isConnected: PropTypes.bool,
    isPreview: PropTypes.bool,
  };

  onClick = (id: number) => {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
    }
  }

  isActive(id: number) {
    return this.props.isActive && this.props.G.cells[id] === null;
  }

  render() {
    const ctx = this.props.ctx;
    const tbody = [];
    for (let i = 0; i < 3; i++) {
      const cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        // @ts-ignore
        cells.push(
          <td
            key={id}
            className={this.isActive(id) ? 'active' : ''}
            onClick={() => this.onClick(id)}
          >
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    let disconnected = null;
    if (this.props.isMultiplayer && !this.props.isConnected) {
      disconnected = <div>Disconnected!</div>;
    }

    let winner = null;
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    let player = null;
    if (this.props.playerID) {
      player = <div id="player">Player: {this.props.playerID}</div>;
    }

    if (this.props.isPreview) {
      disconnected = player = null;
    }

    return (
      <GameBar>
        <div>
          <table id="board">
            <tbody>{tbody}</tbody>
          </table>
          {player}
          {winner}
          {disconnected}
        </div>
      </GameBar>
    );
  }
}

export default Board;
