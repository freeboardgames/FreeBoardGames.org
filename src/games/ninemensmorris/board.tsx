import React from 'react';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { IG } from './game';
import { Field } from './Field';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  _selectPoint = (id: number) => {
    this.props.moves.placePiece(id);
  };

  render() {
    return (
      <GameLayout>
        <div>
          <Field points={this.props.G.points} selectPoint={this._selectPoint}></Field>
        </div>
      </GameLayout>
    );
  }
}
