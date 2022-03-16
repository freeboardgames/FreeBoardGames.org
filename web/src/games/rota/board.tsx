import React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { IGameArgs } from 'gamesShared/definitions/game';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';
import { IPlayerInRoom } from 'gamesShared/definitions/player';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';
import Typography from '@material-ui/core/Typography';
import { IG, Phase } from './game';
import { Field } from './Field';
import { Ctx } from 'boardgame.io';

interface IBoardInnerProps extends WithCurrentGameTranslation {}

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

const localPlayerNames = ['local.red', 'local.blue'];

export class BoardInternal extends React.Component<IBoardProps & IBoardInnerProps, {}> {
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

    let prefix = '';
    if (isLocalGame(this.props.gameArgs)) {
      // Local game
      const localPlayerName = this.props.translate(localPlayerNames[this.props.ctx.currentPlayer]);

      prefix = `[${localPlayerName.toUpperCase()}]`;
    }

    if (this.props.ctx.currentPlayer !== this.props.playerID && !isLocalGame(this.props.gameArgs)) {
      const pName = this._playerInRoom().name;
      if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
        return this.props.translate('board.waiting_for_player', { pName });
      } else {
        return this.props.translate('board.player_turn', { pName });
      }
    }

    if (this.props.ctx.phase === Phase.Place) {
      return this.props.translate('board.prefix_place_piece', { prefix });
    } else {
      return this.props.translate('board.prefix_move_piece', { prefix });
    }
  }

  _getGameOver() {
    if (isFirstPersonView(this.props.gameArgs, this.props.playerID)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return this.props.translate('board.game_over.you_won');
      } else {
        return this.props.translate('board.game_over.you_lost');
      }
    } else if (this.props.ctx.gameover.winner) {
      if (isLocalGame(this.props.gameArgs)) {
        return this.props.translate('board.game_over.player_won', {
          pName: this.props.translate(localPlayerNames[this.props.ctx.gameover.winner]),
        });
      } else {
        return this.props.translate('board.game_over.player_won', {
          pName: this._playerInRoom(this.props.ctx.gameover.winner).name,
        });
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

const enhance = compose<IBoardInnerProps, IBoardProps>(withCurrentGameTranslation);
export const Board = enhance(BoardInternal);
