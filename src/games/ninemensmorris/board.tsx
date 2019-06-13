import React from 'react';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { IG } from './game';
import { Field } from './Field';
import { Phase } from './game';

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

  _getGameOver() {
    if (this.props.ctx.gameover.winner === this.props.playerID) {
      return 'you won';
    } else {
      return 'you lost';
    }
  }

  _selectPoint = (id: number) => {
    if (this.props.G.haveToRemovePiece) {
      this.props.moves.removePiece(id);
    } else if (this.props.ctx.phase === Phase.Place) {
      this.props.moves.placePiece(id);
    } else if (this.state.selected === null) {
      if (this.props.G.points[id].piece !== null && this.props.G.points[id].piece.player === this.props.playerID) {
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
      <GameLayout>
        <div>
          <Field points={this.props.G.points} selectPoint={this._selectPoint}></Field>
        </div>
      </GameLayout>
    );
  }
}
