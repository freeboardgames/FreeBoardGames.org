import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { PlayerBadges } from 'gamesShared/components/badges/PlayerBadges';
import { Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { isOnlineGame, isLocalGame } from '../../gamesShared/helpers/gameMode';
import Typography from '@material-ui/core/Typography';
import { isSpectator } from 'gamesShared/helpers/GameUtil';
import { IBoardProps, IBoardState } from './definations';
import CardGrid from './grid';
import { PLAYER_COLORS } from './constants';
import { getScoreBoard } from './utils';

const localPlayerNames = {
  '0': 'Player 1',
  '1': 'Player 2',
};

export class MemoryMatchBoard extends React.Component<IBoardProps, IBoardState> {
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
      playerName = localPlayerNames[this.props.ctx.currentPlayer];
      return playerName + "'s Turn";
    } else if (isOnlineGame(this.props.gameArgs)) {
      playerName = this.props.gameArgs.players[this.props.ctx.currentPlayer].name;
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return 'Your Turn';
      } else {
        if (isSpectator(this.props.playerID)) {
          return `${playerName}'s turn`;
        }
        return 'Waiting for ' + playerName;
      }
    }
  };

  _getGameOverStatus = () => {
    const { gameover } = this.props.ctx;
    if (gameover.draw) {
      return 'draw';
    }
    if (isLocalGame(this.props.gameArgs)) {
      return localPlayerNames[gameover.winner] + ' won';
    } else if (isOnlineGame(this.props.gameArgs)) {
      if (gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        if (isSpectator(this.props.playerID)) {
          return 'see scoreboard';
        }
        return 'you lost';
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
