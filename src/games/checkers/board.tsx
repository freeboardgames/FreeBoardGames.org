import * as React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG } from './game';
import { Checkerboard } from '../../common/Checkerboard';
import { Token } from '@freeboardgame.org/boardgame.io/ui';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  render() {
    return (
      <GameLayout>
        <Checkerboard>
          <Token
            x={1}
            y={1}
            square={"a6"}
          >

          </Token>
        </Checkerboard>
      </GameLayout>
    );
  }
}
