import React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { Grid } from '@freeboardgame.org/boardgame.io/ui';
import { Token } from '@freeboardgame.org/boardgame.io/ui';
import { IG } from './game';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';

import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

export interface ICoords {
  x: number;
  y: number;
}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  _onClick = this.onClick.bind(this);

  onClick(coords: ICoords) {
    this.props.moves.placePiece(coords.x, coords.y);
    console.log(coords);
  }

  render() {
    const colors = [red[500], yellow[500], green[500], blue[500]];
    return (
      <GameLayout>
        <Grid rows={8} cols={8} onClick={this._onClick}>
          {this.props.G.points.map((point, i) => (
            <Token
              animate={false}
              key={i}
              x={i % 8}
              y={Math.floor(i / 8)}
              style={{ fill: point === null ? 'black' : colors[point as any], transition: 'fill .5s' }}
            ></Token>
          ))}
        </Grid>
      </GameLayout>
    );
  }
}
