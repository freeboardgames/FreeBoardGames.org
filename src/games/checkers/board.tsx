import * as React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG, toCoord } from './game';
import { Checkerboard, IAlgebraicCoords, ICartesianCoords, IOnDragData } from '../../common/Checkerboard';
import { Token } from '@freeboardgame.org/boardgame.io/ui';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
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
  state = {
    selected: null as ICartesianCoords,
  };

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
        selected: { x: originalX, y: originalY },
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

  _onDrop = (coords: ICartesianCoords) => {
    if (this.state.selected) {
      console.log('test move');
      this.props.moves.move(this.state.selected, roundCoords(coords));
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
            <circle r="0.4" fill={piece.data.playerID === '1' ? 'white' : 'black'} cx="0.5" cy="0.5"></circle>
          </Token>
        );
      });
  };

  render() {
    return (
      <GameLayout>
        <Checkerboard onClick={this._onClick}>{this.getPieces()}</Checkerboard>
      </GameLayout>
    );
  }
}
