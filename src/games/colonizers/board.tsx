import React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG, Tile, isValidBuildingPosition, Phase, Building, IMoves, getScoreBoard } from './game';
import { GameMode } from '../../App/Game/GameModePicker';
import { ScoreBadges } from '../../common/ScoreBadges';
import { Roads } from './Roads';

import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

import BuildingDialog from './BuildingDialog';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Buildings } from './Buildings';

interface IBoardState {
  selectedBuilding: number;
  selectedRecipe: Building;
  buildingDialogOpen: boolean;
}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: IMoves;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

const SIZE = 100;
const PLAYER_COLORS = [red[500], blue[500], grey[50], orange[500]];
const RESOURCE_COLORS = [blueGrey[500], amber[500], green[800], lightGreen[600], orange[800], deepPurple[500]];

export function dirToAngle(dir: number) {
  return (Math.PI / 3) * dir - Math.PI / 3;
}

export function getTilePos(tile: Tile) {
  return {
    x: SIZE * (3 / 2) * tile.pos.x,
    y: SIZE * (Math.sqrt(3) * tile.pos.z + (Math.sqrt(3) / 2) * tile.pos.x),
  };
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  state = {
    selectedBuilding: null as number,
    buildingDialogOpen: false,
    selectedRecipe: null as number,
  };

  _closeBuildingDialog = this.closeBuildingDialog.bind(this);
  _openBuildingDialog = this.openBuildingDialog.bind(this);
  _chooseBuilding = this.chooseBuilding.bind(this);
  _onRoadClick = this.onRoadClick.bind(this);
  _onBuildingClick = this.onBuildingClick.bind(this);
  _endTurn = this.endTurn.bind(this);

  chooseBuilding(index: number) {
    this.setState({
      ...this.state,
      buildingDialogOpen: false,
      selectedRecipe: index,
    });
  }

  endTurn() {
    this.props.events.endTurn();
  }

  closeBuildingDialog() {
    this.setState({
      ...this.state,
      buildingDialogOpen: false,
    });
  }

  openBuildingDialog() {
    this.setState({
      ...this.state,
      buildingDialogOpen: true,
    });
  }

  isLocalGame() {
    return this.props.gameArgs && this.props.gameArgs.mode === GameMode.LocalFriend;
  }

  onBuildingClick(index: number) {
    if (this.state.selectedRecipe !== Building.City && !isValidBuildingPosition(this.props.G, index)) {
      return;
    }

    if (this.props.ctx.phase === Phase.Game) {
      this.props.moves.build(this.state.selectedRecipe, index);
      this.setState({
        ...this.state,
        selectedRecipe: null,
      });
    } else {
      this.setState({
        ...this.state,
        selectedBuilding: index,
      });
    }
  }

  onRoadClick(index: number) {
    if (this.props.ctx.phase === Phase.Game) {
      if (this.state.selectedRecipe === Building.Road) {
        this.props.moves.build(this.state.selectedRecipe, index);
        this.setState({
          ...this.state,
          selectedRecipe: null,
        });
      }
    } else {
      if (this.state.selectedBuilding !== null) {
        this.props.moves.placeInitial(this.state.selectedBuilding, index);
        this.setState({
          ...this.state,
          selectedBuilding: null,
        });
      }
    }
  }

  render() {
    const robberPos = getTilePos(this.props.G.tiles[this.props.G.robber]);

    return (
      <GameLayout>
        <BuildingDialog
          open={this.state.buildingDialogOpen}
          handleClose={this._closeBuildingDialog}
          handleClick={this._chooseBuilding}
        />
        <Grid container justify="center" alignItems="center">
          {this.props.G.players[this.props.ctx.currentPlayer as any].resources.map((resource, i) => (
            <Avatar key={i} style={{ margin: '0 5px', background: RESOURCE_COLORS[i] }}>
              {resource}
            </Avatar>
          ))}
        </Grid>
        <svg viewBox="-435 -469 870 938">
          <g>
            {this.props.G.tiles
              .filter(tile => tile !== null)
              .map(tile => {
                const { x, y } = getTilePos(tile);
                return (
                  <g key={tile.index}>
                    <path
                      fill={RESOURCE_COLORS[tile.type]}
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
          <Roads
            G={this.props.G}
            ctx={this.props.ctx}
            size={SIZE}
            playerColors={PLAYER_COLORS}
            selectedRecipe={this.state.selectedRecipe}
            selectedBuilding={this.state.selectedBuilding}
            click={this._onRoadClick}
          />
          <Buildings
            G={this.props.G}
            ctx={this.props.ctx}
            size={SIZE}
            playerColors={PLAYER_COLORS}
            selectedRecipe={this.state.selectedRecipe}
            selectedBuilding={this.state.selectedBuilding}
            gameArgs={this.props.gameArgs}
            playerID={this.props.playerID}
            click={this._onBuildingClick}
          />
          <g>
            <circle cx={robberPos.x} cy={robberPos.y} r="40" fill="black" />
          </g>
        </svg>
        <ScoreBadges
          scoreboard={getScoreBoard(this.props.G)}
          playerID={this.props.playerID}
          players={this.props.gameArgs.players}
          colors={PLAYER_COLORS}
        />
        <Button
          variant="outlined"
          style={{ color: 'white', borderColor: grey[500] }}
          onClick={this._openBuildingDialog}
        >
          Build
        </Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: grey[500] }}>
          Trade
        </Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: grey[500] }} onClick={this._endTurn}>
          End turn
        </Button>
      </GameLayout>
    );
  }
}
