import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG, getScoreBoard, isAllowedDeck } from './game';
import { Decks } from './Decks';
import { PlayerHand } from './PlayerHand';
import { Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { PlayerBadges } from 'gamesShared/components/badges/PlayerBadges';
import Typography from '@material-ui/core/Typography';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  step?: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  aiSecondDeck: boolean;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  _selectCard = async (id: number) => {
    if (!this._canPlay() || this.props.ctx.phase !== 'CARD_SELECT') {
      return;
    }
    this.props.moves.selectCard(id);
  };

  _selectDeck = (id: number) => {
    if (
      !this._canPlay() ||
      this.props.ctx.phase !== 'DECK_SELECT' ||
      !isAllowedDeck(this.props.G, id, this.props.playerID)
    ) {
      return;
    }
    this.props.moves.selectDeck(id);
  };

  _getStatus() {
    if (!this.props.gameArgs) {
      return;
    }
    if (!this._canPlay()) {
      return 'Waiting for opponent...';
    }
    if (this.props.ctx.phase === 'CARD_SELECT') {
      return 'SELECT CARD';
    } else {
      return 'SELECT BOARD';
    }
  }

  _canPlay() {
    if (this.props.ctx.phase === 'CARD_SELECT') {
      return (
        this.props.ctx.activePlayers !== null &&
        Object.keys(this.props.ctx.activePlayers)?.includes(this.props.playerID)
      );
    } else {
      return this.props.playerID === this.props.ctx.currentPlayer;
    }
  }

  _getGameOver() {
    if (this.props.ctx.gameover.winner !== undefined) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return 'you lost';
      }
    } else {
      return 'draw';
    }
  }

  _getScoreBoard() {
    return (
      <Scoreboard
        scoreboard={getScoreBoard(this.props.G)}
        playerID={this.props.playerID}
        players={this.props.gameArgs.players}
        scoreName="Penalty points"
      />
    );
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getScoreBoard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {this._getStatus()}
        </Typography>
        <Decks G={this.props.G} ctx={this.props.ctx} playerID={this.props.playerID} selectDeck={this._selectDeck} />
        <PlayerHand G={this.props.G} playerID={this.props.playerID} selectCard={this._selectCard} />
        <div style={{ clear: 'left', paddingTop: '8px' }}>
          <PlayerBadges
            scores={getScoreBoard(this.props.G)}
            playerID={this.props.playerID}
            players={this.props.gameArgs.players}
            ctx={this.props.ctx}
          />
        </div>
      </GameLayout>
    );
  }
}

export default Board;
