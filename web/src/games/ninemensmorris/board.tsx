import React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import { IG } from './game';
import { Field } from './Field';
import { Phase } from './game';
import Typography from '@material-ui/core/Typography';
import css from './Board.module.css';
import { isOnlineGame, isAIGame, isLocalGame } from '../../gamesShared/helpers/gameMode';
import { isSpectator } from 'gamesShared/helpers/GameUtil';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface IBoardInnerProps extends WithCurrentGameTranslation {}

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  selected: number;
}

export class BoardInternal extends React.Component<IBoardProps & IBoardInnerProps, {}> {
  state: IBoardState = { selected: null };

  _getStatus() {
    if (!this.props.gameArgs) {
      return;
    }

    let prefix = '';
    const WHITE = this.props.translate('board.white').toUpperCase();
    const RED = this.props.translate('board.red').toUpperCase();
    if (isLocalGame(this.props.gameArgs)) {
      prefix = this.props.ctx.currentPlayer === '0' ? `[${WHITE}]` : `[${RED}]`;
    }

    if (this.props.ctx.currentPlayer !== this.props.playerID && !isLocalGame(this.props.gameArgs)) {
      if (isOnlineGame(this.props.gameArgs)) {
        const playerName = this.props.gameArgs.players[this.props.ctx.currentPlayer].name;
        if (isSpectator(this.props.playerID)) {
          return this.props.translate('board.players_turn', { playerName });
        }
        return this.props.translate('board.wait_for_player', { playerName });
      }
      return this.props.translate('board.waiting_for_opponent');
    } else if (this.props.G.haveToRemovePiece) {
      return this.props.translate('board.remove_piece', { prefix });
    }

    if (this.props.ctx.phase === Phase.Place) {
      return this.props.translate('board.place_piece', { prefix });
    } else {
      return this.props.translate('board.move_piece', { prefix });
    }
  }

  _getGameOver() {
    if (isOnlineGame(this.props.gameArgs) || isAIGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return this.props.translate('board.you_won');
      } else {
        if (isOnlineGame(this.props.gameArgs) && isSpectator(this.props.playerID)) {
          const winnerName = this.props.gameArgs.players[this.props.ctx.gameover.winner].name;
          return this.props.translate('board.player_won', { winnerName });
        }
        return this.props.translate('board.you_lost');
      }
    } else {
      if (this.props.ctx.gameover.winner === '0') {
        return this.props.translate('board.white_won');
      } else {
        return this.props.translate('board.red_won');
      }
    }
  }

  _selectPoint = (id: number) => {
    if (this.props.playerID !== this.props.ctx.currentPlayer && !isLocalGame(this.props.gameArgs)) {
      return;
    }

    if (this.props.G.haveToRemovePiece) {
      this.props.moves.removePiece(id);
    } else if (this.props.ctx.phase === Phase.Place) {
      this.props.moves.placePiece(id);
    } else if (this.state.selected === null) {
      if (
        this.props.G.points[id].piece !== null &&
        this.props.G.points[id].piece.player === this.props.ctx.currentPlayer
      ) {
        this.setState({ selected: id });
      }
    } else {
      this.props.moves.movePiece(this.state.selected, id);
      this.setState({ selected: null });
    }
  };

  render() {
    if (this.props.ctx.gameover) {
      return <GameLayout gameOver={this._getGameOver()} gameArgs={this.props.gameArgs} />;
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <Typography variant="h5" className={css.Status}>
          {this._getStatus()}
        </Typography>
        <Field points={this.props.G.points} selectPoint={this._selectPoint} selected={this.state.selected}></Field>
      </GameLayout>
    );
  }
}

const enhance = compose<IBoardInnerProps, IBoardProps>(withCurrentGameTranslation);
export const Board = enhance(BoardInternal);
