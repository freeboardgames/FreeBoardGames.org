import React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG, Tile } from './game';

import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

interface IBoardState {}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

const SIZE = 100;

export class Board extends React.Component<IBoardProps, IBoardState> {
  getTilePos(tile: Tile) {
    return {
      x: SIZE * (3 / 2) * tile.pos.x,
      y: SIZE * (Math.sqrt(3) * tile.pos.z + (Math.sqrt(3) / 2) * tile.pos.x),
    };
  }

  onTileClick(index: number) {
    console.log(index);
  }

  onBuildingClick(index: number) {
    this.props.moves.placeBuilding(index);
  }

  render() {
    return (
      <GameLayout>
        <svg viewBox="-400 -434 800 868">
          <g>
            {this.props.G.tiles.map((tile, i) => {
              const { x, y } = this.getTilePos(tile);
              const colors = [blueGrey[500], amber[500], green[800], lightGreen[600], orange[800], deepPurple[500]];
              return (
                <path
                  key={i}
                  fill={colors[tile.type]}
                  d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"
                  style={{ transform: `translate(${x - SIZE}px, ${y - (SIZE * Math.sqrt(3)) / 2}px)` }}
                  onClick={() => this.onTileClick(i)}
                ></path>
              );
            })}
          </g>
          <g>
            {this.props.G.buildings.map((building, i) => {
              const angle = (Math.PI / 3) * building.tileRefs[0].corner - Math.PI / 3;
              const { x, y } = this.getTilePos(this.props.G.tiles[building.tileRefs[0].tile]);
              const playerColors = [red[500], blue[500], grey[50], orange[500]];
              const fill = building.owner === null ? 'white' : playerColors[building.owner as any];
              return (
                <circle
                  key={i}
                  r="20"
                  fill={fill}
                  cx={x + SIZE * Math.cos(angle)}
                  cy={y + SIZE * Math.sin(angle)}
                  onClick={() => this.onBuildingClick(i)}
                ></circle>
              );
            })}
          </g>
        </svg>
      </GameLayout>
    );
  }
}
