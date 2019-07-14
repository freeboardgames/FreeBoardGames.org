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

interface IBoardState {
  selectedBuilding: number;
}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

const SIZE = 100;
const PLAYER_COLORS = [red[500], blue[500], grey[50], orange[500]];

export class Board extends React.Component<IBoardProps, IBoardState> {
  state = {
    selectedBuilding: null as number,
  };

  getTilePos(tile: Tile) {
    return {
      x: SIZE * (3 / 2) * tile.pos.x,
      y: SIZE * (Math.sqrt(3) * tile.pos.z + (Math.sqrt(3) / 2) * tile.pos.x),
    };
  }

  dirToAngle(dir: number) {
    return (Math.PI / 3) * dir - Math.PI / 3;
  }

  onBuildingClick(index: number) {
    this.setState({
      ...this.state,
      selectedBuilding: index,
    });
  }

  onRoadClick(index: number) {
    if (this.state.selectedBuilding !== null) {
      this.props.moves.placeInitial(this.state.selectedBuilding, index);
      this.setState({
        ...this.state,
        selectedBuilding: null,
      });
    }
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
                ></path>
              );
            })}
          </g>
          <g>
            {this.props.G.roads.map((road, i) => {
              const angle1 = this.dirToAngle(road.tileRefs[0].dir);
              const angle2 = this.dirToAngle((road.tileRefs[0].dir + 5) % 6);
              const { x, y } = this.getTilePos(this.props.G.tiles[road.tileRefs[0].tile]);
              const stroke = road.owner === null ? 'black' : PLAYER_COLORS[road.owner as any];

              return (
                <line
                  x1={x + SIZE * Math.cos(angle1)}
                  y1={y + SIZE * Math.sin(angle1)}
                  x2={x + SIZE * Math.cos(angle2)}
                  y2={y + SIZE * Math.sin(angle2)}
                  strokeWidth={10}
                  stroke={stroke}
                  onClick={() => this.onRoadClick(i)}
                  key={i}
                ></line>
              );
            })}
          </g>
          <g>
            {this.props.G.buildings.map((building, i) => {
              const angle = this.dirToAngle(building.tileRefs[0].dir);
              const { x, y } = this.getTilePos(this.props.G.tiles[building.tileRefs[0].tile]);
              const fill = building.owner === null ? 'black' : PLAYER_COLORS[building.owner as any];
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
