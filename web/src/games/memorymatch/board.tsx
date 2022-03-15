import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { PlayerBadges } from 'gamesShared/components/badges/PlayerBadges';
import { Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';
import { isOnlineGame, isLocalGame } from '../../gamesShared/helpers/gameMode';
import Typography from '@material-ui/core/Typography';
import { isSpectator } from 'gamesShared/helpers/GameUtil';
import { IBoardProps, IBoardState } from './definations';
import CardGrid from './grid';
import { PLAYER_COLORS } from './constants';
import { getScoreBoard } from './utils';

const localPlayerNames = ['player_1', 'player_2'];

interface IBoardInnerProps extends WithCurrentGameTranslation {}

export class MemoryMatchBoardInternal extends React.Component<IBoardProps & IBoardInnerProps, IBoardState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _isAllowedToMakeMoves = () => {
    return (
      isLocalGame(this.props.gameArgs) ||
      (isOnlineGame(this.props.gameArgs) && this.props.playerID === this.props.ctx.currentPlayer)
    );
  };

  _getStatus = () => {
    if (!this.props.gameArgs) {
      return;
    }

    let playerName;
    if (isLocalGame(this.props.gameArgs)) {
      playerName = this.props.translate(`board.${localPlayerNames[this.props.ctx.currentPlayer]}`);
      return this.props.translate('board.players_turn', { playerName });
    } else if (isOnlineGame(this.props.gameArgs)) {
      playerName = this.props.gameArgs.players[this.props.ctx.currentPlayer].name;
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return this.props.translate('board.your_turn');
      } else {
        if (isSpectator(this.props.playerID)) {
          return this.props.translate('board.players_turn', { playerName });
        }
        return this.props.translate('board.waiting_for_player', { playerName });
      }
    }
  };

  _getGameOverStatus = () => {
    const { gameover } = this.props.ctx;
    if (gameover.draw) {
      return this.props.translate('board.draw');
    }
    if (isLocalGame(this.props.gameArgs)) {
      return this.props.translate('board.player_won', { winnerName: localPlayerNames[gameover.winner] });
    } else if (isOnlineGame(this.props.gameArgs)) {
      if (gameover.winner === this.props.playerID) {
        return this.props.translate('board.you_won');
      } else {
        if (isSpectator(this.props.playerID)) {
          return this.props.translate('board.see_scoreboard');
        }
        return this.props.translate('board.you_lost');
      }
    }
  };

  _renderScoreBoard = () => {
    return (
      <Scoreboard
        scoreboard={getScoreBoard(this.props.G, this.props.ctx)}
        playerID={this.props.playerID}
        players={this.props.gameArgs.players}
      />
    );
  };

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOverStatus()}
          extraCardContent={this._renderScoreBoard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    if (this.props.G.timeShownCards && this._isAllowedToMakeMoves()) {
      setTimeout(() => {
        if (this._isAllowedToMakeMoves()) {
          this.props.moves.hideShownCards();
        }
      }, 1500);
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <div style={{ backgroundColor: 'black' }}>
          <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
            {this._getStatus()}
          </Typography>
          <CardGrid
            gridSize={this.props.G.gridSize}
            cards={this.props.G.cards}
            onCardClick={(cardId: number) => {
              if (!this.props.G.timeShownCards && this._isAllowedToMakeMoves()) {
                this.props.moves.cardClicked(cardId);
              }
            }}
          />
          <PlayerBadges
            scores={getScoreBoard(this.props.G, this.props.ctx)}
            playerID={this.props.playerID}
            players={this.props.gameArgs.players}
            colors={Object.values(PLAYER_COLORS)}
            ctx={this.props.ctx}
          />
        </div>
      </GameLayout>
    );
  }
}

const enhance = compose<IBoardInnerProps, IBoardProps>(withCurrentGameTranslation);
export const MemoryMatchBoard = enhance(MemoryMatchBoardInternal);
