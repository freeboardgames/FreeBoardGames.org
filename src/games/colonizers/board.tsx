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

import css from './Board.css';

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

  isBuildingSelectable(index: number) {
    return this.props.G.buildings[index].tileRefs.some(
      ref => this.props.G.buildings[this.props.G.tiles[ref.tile].buildings[(ref.dir + 1) % 6]].type !== null,
    );
  }

  onBuildingClick(index: number) {
    if (this.isBuildingSelectable(index)) {
      return;
    }

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

  getRoads() {
    return this.props.G.roads
      .filter(road => road.owner !== null || this.state.selectedBuilding !== null)
      .map(road => {
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
            strokeWidth="20"
            strokeLinecap="round"
            stroke={stroke}
            onClick={() => this.onRoadClick(road.index)}
            key={road.index}
          ></line>
        );
      });
  }

  getBuildings() {
    return this.props.G.buildings
      .filter(building => building.owner !== null || !this.isBuildingSelectable(building.index))
      .map(building => {
        const angle = this.dirToAngle(building.tileRefs[0].dir);
        const { x, y } = this.getTilePos(this.props.G.tiles[building.tileRefs[0].tile]);
        const selected = this.state.selectedBuilding === building.index;
        let fill = building.owner === null ? 'black' : PLAYER_COLORS[building.owner as any];
        if (selected) {
          fill = PLAYER_COLORS[this.props.ctx.currentPlayer as any];
        }

        return (
          <circle
            key={building.index}
            fill={fill}
            cx={x + SIZE * Math.cos(angle)}
            cy={y + SIZE * Math.sin(angle)}
            onClick={() => this.onBuildingClick(building.index)}
            className={`${css.Building} ${selected ? css.SelectedBuilding : null}`}
          ></circle>
        );
      });
  }

  render() {
    return (
      <GameLayout>
        <svg viewBox="-400 -434 800 868">
          <g>
            {this.props.G.tiles
              .filter(tile => tile !== null)
              .map((tile, i) => {
                console.log(tile);
                const { x, y } = this.getTilePos(tile);
                const colors = [blueGrey[500], amber[500], green[800], lightGreen[600], orange[800], deepPurple[500]];
                return (
                  <g key={i}>
                    <path
                      fill={colors[tile.type]}
                      d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"
                      style={{ transform: `translate(${x - SIZE}px, ${y - (SIZE * Math.sqrt(3)) / 2}px)` }}
                    ></path>
                    <text
                      x={x}
                      y={y}
                      fontSize="60"
                      textAnchor="middle"
                      fontWeight="bold"
                      fontFamily="Roboto"
                      alignmentBaseline="central"
                    >
                      {tile.number}
                    </text>
                  </g>
                );
              })}
          </g>
          <g>{this.getRoads()}</g>
          <g>{this.getBuildings()}</g>
        </svg>
      </GameLayout>
    );
  }
}
