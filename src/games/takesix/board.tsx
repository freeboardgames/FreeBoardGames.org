import * as React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG, getScoreBoard } from './game';
import { Decks } from './Decks';
import { PlayerHand } from './PlayerHand';
import { Scoreboard } from './Scoreboard';
import Typography from '@material-ui/core/Typography';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  step?: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  aiSecondDeck: boolean;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  state: IBoardState = { aiSecondDeck: false };

  _selectCard = async (id: number) => {
    this.props.moves.selectCard(id);
    if (this.isAIGame()) {
      await this.props.step();
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        this.setState({ aiSecondDeck: true });
      } else {
        this.setState({ aiSecondDeck: false });
        setTimeout(() => {
          this.props.step();
        }, 1000);
      }
    }
  };
  _selectDeck = (id: number) => {
    this.props.moves.selectDeck(id);
    if (this.isAIGame() && this.state.aiSecondDeck) {
      setTimeout(() => {
        this.props.step();
      }, 1000);
    }
  };

  _getStatus() {
    if (this.props.gameArgs) {
      if (this.props.ctx.actionPlayers.some(player => player === this.props.playerID)) {
        if (this.props.ctx.phase === 'CARD_SELECT') {
          return 'SELECT CARD';
        } else {
          return 'SELECT BOARD';
        }
      } else {
        return 'Waiting for opponent...';
      }
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
      <div>
        <Typography variant="title" align="center" style={{ marginTop: '0px', marginBottom: '16px' }}>
          Scoreboard
        </Typography>
        <Scoreboard
          scoreboard={getScoreBoard(this.props.G)}
          playerID={this.props.playerID}
          players={this.props.gameArgs.players}
        />
      </div>
    );
  }

  isAIGame() {
    return this.props.gameArgs.mode === GameMode.AI;
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this.isAIGame() ? null : this._getScoreBoard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    if (this.props.playerID === null) {
      return (
        <GameLayout>
          <div>
            <svg />
          </div>
        </GameLayout>
      );
    }

    return (
      <GameLayout>
        <h2 style={{ textAlign: 'center' }}>{this._getStatus()}</h2>
        <Decks G={this.props.G} ctx={this.props.ctx} playerID={this.props.playerID} selectDeck={this._selectDeck} />
        <PlayerHand G={this.props.G} playerID={this.props.playerID} selectCard={this._selectCard} />
        <div style={{ clear: 'left' }}>
          Penalty points:{' '}
          {this.props.G.players[this.props.playerID as any].penaltyCards
            .map(card => card.value)
            .reduce((a, b) => a + b, 0)}
        </div>
      </GameLayout>
    );
  }
}

export default Board;
