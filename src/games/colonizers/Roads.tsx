import React from 'react';
import { isRoadConnectedToOwned, isRoadConnected, IG, Building } from './game';
import { dirToAngle, getTilePos } from './board';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { Phase } from './phase';
import grey from '@material-ui/core/colors/grey';
import css from './Road.css';

interface IRoadsProps {
  G: IG;
  ctx: IGameCtx;
  size: number;
  playerColors: string[];
  selectedRecipe: Building;
  selectedBuilding: number;
  click: (index: number) => void;
}

export class Roads extends React.Component<IRoadsProps, {}> {
  render() {
    return (
      <g>
        {this.props.G.roads
          .filter(
            road =>
              road.owner !== null ||
              (this.props.ctx.phase === Phase.Game &&
                this.props.selectedRecipe === Building.Road &&
                isRoadConnectedToOwned(this.props.G, this.props.ctx.currentPlayer, road.index)) ||
              (this.props.ctx.phase === Phase.Place &&
                this.props.selectedBuilding !== null &&
                isRoadConnected(this.props.G, this.props.selectedBuilding, road.index)),
          )
          .map(road => {
            const angle1 = dirToAngle(road.tileRefs[0].dir);
            const angle2 = dirToAngle((road.tileRefs[0].dir + 5) % 6);
            const { x, y } = getTilePos(this.props.G.tiles[road.tileRefs[0].tile]);
            const stroke = road.owner === null ? grey[900] : this.props.playerColors[road.owner as any];

            return (
              <line
                x1={x + this.props.size * Math.cos(angle1)}
                y1={y + this.props.size * Math.sin(angle1)}
                x2={x + this.props.size * Math.cos(angle2)}
                y2={y + this.props.size * Math.sin(angle2)}
                strokeWidth="20"
                strokeLinecap="round"
                stroke={stroke}
                onClick={() => this.props.click(road.index)}
                key={road.index}
                className={css.Road}
              ></line>
            );
          })}
      </g>
    );
  }
}
