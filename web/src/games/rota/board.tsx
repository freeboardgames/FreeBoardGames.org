import React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { IGameArgs } from 'gamesShared/definitions/game';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';
import { IPlayerInRoom } from 'gamesShared/definitions/player';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';
import Typography from '@material-ui/core/Typography';
import { IG, Phase } from './game';
import { Field } from './Field';
import { Ctx } from 'boardgame.io';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  idSelectedPoint: number;
}

export const localPlayerNames = { '0': 'Shreeji', '1': 'Saint' };

export class Board extends React.Component<IBoardProps, {}> {
  state: IBoardState = { idSelectedPoint: null };

  _pointClicked = (pointID: number) => {
    if (this.props.playerID !== this.props.ctx.currentPlayer && !isLocalGame(this.props.gameArgs)) {
      return;
    }
    if (this.props.ctx.phase === Phase.Place) {
      this.props.moves.placePiece(pointID);
    } else if (this.state.idSelectedPoint === null) {
      if (this.props.G.points[pointID].playerID === this.props.ctx.currentPlayer) {
        this.setState({ idSelectedPoint: pointID });
      }
    } else {
      this.props.moves.movePiece(this.state.idSelectedPoint, pointID);
      this.setState({ idSelectedPoint: null });
    }
  };

  _playerInRoom(playerID = null): IPlayerInRoom {
    return this.props.gameArgs.players[playerID === null ? this.props.ctx.currentPlayer : playerID];
  }

  _getStatus() {
    if (!this.props.gameArgs) {
      return;
    }

    // let prefix = 'MURTI';
    // if (isLocalGame(this.props.gameArgs)) {
    let prefix = `${localPlayerNames[this.props.ctx.currentPlayer].toUpperCase()}`;
    // }

    if (this.props.ctx.currentPlayer !== this.props.playerID && !isLocalGame(this.props.gameArgs)) {
      if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
        return `Waiting for ${this._playerInRoom().name} ...`;
      } else {
        return `${this._playerInRoom().name}'s turn`;
      }
    }

    if (this.props.ctx.phase === Phase.Place) {
      return `PLACE ${prefix}`;
    } else {
      return `MOVE ${prefix}`;
    }
  }

  _getGameOver() {
    if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return 'you lost';
      }
    } else if (this.props.ctx.gameover.winner) {
      if (isLocalGame(this.props.gameArgs)) {
        return `${localPlayerNames[this.props.ctx.gameover.winner]} won`;
      } else {
        return `${this._playerInRoom(this.props.ctx.gameover.winner).name} won`;
      }
    }
  }

  _getBoard(boardSize = 100) {
    return (
      <Field
        boardSize={boardSize}
        points={this.props.G.points}
        clickPoint={this._pointClicked}
        idSelectedPoint={this.state.idSelectedPoint}
      />
    );
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getBoard(50)}
          gameArgs={this.props.gameArgs}
        />
      );
    }
    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }}>
          {this._getStatus()}
        </Typography>
        {this._getBoard()}
      </GameLayout>
    );
  }
}
