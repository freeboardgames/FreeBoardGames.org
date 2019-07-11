import React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG } from './game';

import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';
import deepPurple from '@material-ui/core/colors/deepPurple';

interface IBoardState {}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  render() {
    return (
      <GameLayout>
        <svg viewBox="-400 -434 800 868">
          {this.props.G.tiles.map(tile => {
            const size = 100;
            const x = size * ((3 / 2) * tile.pos.x) - size;
            const y = size * (Math.sqrt(3) * tile.pos.z + (Math.sqrt(3) / 2) * tile.pos.x) - (size * Math.sqrt(3)) / 2;
            const colors = [blueGrey[500], amber[500], green[800], lightGreen[600], orange[800], deepPurple[500]];
            return (
              <path
                key={`${tile.pos.x}-${tile.pos.y}`}
                fill={colors[tile.type]}
                d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              ></path>
            );
          })}
        </svg>
      </GameLayout>
    );
  }
}
