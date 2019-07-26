import React from 'react';
import { IG, isValidBuildingPosition, isAnyOwnRoadConnected, Building, Phase } from './game';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { dirToAngle, getTilePos } from './board';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import css from './Building.css';

import grey from '@material-ui/core/colors/grey';
import { isLocalGame } from '../../common/gameMode';

interface IBuildingsProps {
  G: IG;
  ctx: IGameCtx;
  playerColors: string[];
  selectedRecipe: number;
  selectedBuilding: number;
  gameArgs: IGameArgs;
  playerID: string;
  size: number;
  click: (index: number) => void;
}

export class Buildings extends React.Component<IBuildingsProps, {}> {
  render() {
    return (
      <g>
        {this.props.G.buildings
          .filter(
            building =>
              building.owner !== null ||
              (isValidBuildingPosition(this.props.G, building.index) &&
                ((this.props.selectedRecipe === Building.Settlement &&
                  isAnyOwnRoadConnected(this.props.G, this.props.ctx.currentPlayer, building.index)) ||
                  (this.props.ctx.phase === Phase.Place &&
                    (isLocalGame(this.props.gameArgs) || this.props.ctx.currentPlayer === this.props.playerID)))),
          )
          .map(building => {
            const angle = dirToAngle(building.tileRefs[0].dir);
            const { x, y } = getTilePos(this.props.G.tiles[building.tileRefs[0].tile]);
            const selected = this.props.selectedBuilding === building.index;
            let fill = building.owner === null ? grey[900] : this.props.playerColors[building.owner as any];
            if (selected) {
              fill = this.props.playerColors[this.props.ctx.currentPlayer as any];
            }

            return (
              <circle
                key={building.index}
                fill={fill}
                cx={x + this.props.size * Math.cos(angle)}
                cy={y + this.props.size * Math.sin(angle)}
                r="30"
                onClick={() => this.props.click(building.index)}
                className={`${css.Building} ${selected ? css.SelectedBuilding : null}`}
              ></circle>
            );
          })}
      </g>
    );
  }
}
