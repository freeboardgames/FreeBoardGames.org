import * as React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';

import css from './Board.module.css';
import { HotelGrid } from './components/HotelGrid';
import { IG, Merger, Player, Score } from './types';
import { PlayerActions } from './components/PlayerActions';
import { MergerDetails } from './components/MergerDetails';
import { MergersDialog } from './components/MergersDialog';
import { Hotels } from './hotels';
import { MergersGameStatus } from './components/MergersGameStatus';
import { Button, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { IPlayerInRoom } from 'gamesShared/definitions/player';
import { StockGuide } from './components/StockGuide';

export interface BoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export interface BoardState {
  mergerDetailsDismissed: boolean;
  gameOverDetailsDismissed: boolean;
  showPriceCard: boolean;
}

// TODOs:
//  - animations
//  - sounds
//  - highlight players with stock during a merger
//  - countdown at the end
export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props) {
    super(props);
    this.state = {
      mergerDetailsDismissed: false,
      gameOverDetailsDismissed: false,
      showPriceCard: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.G.merger?.chainToMerge !== prevProps.G.merger?.chainToMerge) {
      // reset the merger dialog dismissed state
      this.setState({ mergerDetailsDismissed: false });
    }
  }

  playerID(): string {
    return this.props.playerID;
  }

  player(): Player {
    return this.props.G.players[this.playerID()];
  }

  playerIndex(id: string = this.playerID()): number {
    return this.props.ctx.playOrder.indexOf(id);
  }

  playerName(id: string = this.playerID()): string {
    if (!this.props.gameArgs) {
      return `Player ${id}`;
    }
    return this.props.gameArgs.players[this.playerIndex(id)].name;
  }

  playerPhase(): string {
    return this.props.ctx.currentPlayer === this.playerID() && this.props.ctx.phase;
  }

  playerStage(): string {
    return this.props.ctx.activePlayers && this.props.ctx.activePlayers[this.playerIndex()];
  }

  currentPlayer(): string | undefined {
    return !this.props.ctx.gameover && this.props.ctx.currentPlayer;
  }

  playersInRoom(): IPlayerInRoom[] | undefined {
    return this.props.gameArgs?.players;
  }

  isAllPlayerStateVisible() {
    return Object.keys(this.props.G.players).length > 1;
  }

  maybeRenderMergerDetails() {
    if (this.props.ctx.phase !== 'mergerPhase' || this.state.mergerDetailsDismissed) {
      return;
    }

    const { chainToMerge, survivingChain } = this.props.G.merger;

    return (
      <MergersDialog
        dialogId="merger-details-dialog"
        title={`${chainToMerge} is merging into ${survivingChain}!`}
        onClose={() => this.setState({ mergerDetailsDismissed: true })}
        closeButtonText="OK"
      >
        <MergerDetails
          merger={this.props.G.merger}
          playOrder={this.props.ctx.playOrder}
          playerIdToNameFn={(id: string) => this.playerName(id)}
        />
      </MergersDialog>
    );
  }

  renderFinalScores() {
    const { scores } = this.props.ctx.gameover;
    const renderScore = (score: Score) => (
      <p key={`score-${score.id}`}>
        {this.playerName(score.id)}: ${score.money}
      </p>
    );
    return (
      <div className={css.MarginTopBottom}>
        <Typography variant="h6">Scores</Typography>
        <Typography variant="body1" component="div">
          {scores.map(renderScore)}
        </Typography>
      </div>
    );
  }

  renderFinalPayouts(finalMergers: Merger[]) {
    const mergerDetails = finalMergers.map((merger) => {
      return (
        <MergerDetails
          key={`final-merger-details-${merger.chainToMerge}`}
          merger={merger}
          playOrder={this.props.ctx.playOrder}
          playerIdToNameFn={(id) => this.playerName(id)}
        />
      );
    });

    return (
      <div className={css.MarginTopBottom}>
        <Typography variant="h6">Final payouts</Typography>
        {mergerDetails}
      </div>
    );
  }

  winnerMessage(): string {
    const { winner, winners } = this.props.ctx.gameover;
    if (winner) {
      return `${this.playerName(winner)} wins!`;
    } else {
      return `${winners.map((id) => this.playerName(id)).join(' & ')} tied!`;
    }
  }

  gameOverMessage(): string | undefined {
    if (!this.props.ctx.gameover) {
      return;
    }

    const { scores } = this.props.ctx.gameover;
    const scoresMessage = scores.map((s) => `${this.playerName(s.id)}: $${s.money}`).join(', ');
    return `${this.winnerMessage()} Scores: ${scoresMessage}`;
  }

  maybeRenderGameOverDetails() {
    if (!this.props.ctx.gameover || this.state.gameOverDetailsDismissed) {
      return;
    }

    return (
      <MergersDialog
        dialogId="game-over-dialog"
        title={this.winnerMessage()}
        onClose={() => this.setState({ gameOverDetailsDismissed: true })}
        closeButtonText="OK"
      >
        <Typography variant="body1">
          {this.playerName(this.props.ctx.gameover.declaredBy)} has declared the game over.
        </Typography>
        {this.renderFinalScores()}
        {this.renderFinalPayouts(this.props.ctx.gameover.finalMergers)}
      </MergersDialog>
    );
  }

  maybeRenderPriceCard() {
    if (!this.state.showPriceCard) {
      return null;
    }

    return (
      <MergersDialog
        dialogId="price-card-dialog"
        title="Stock Price and Bonus by Number of Stock"
        onClose={() => this.setState({ showPriceCard: false })}
        closeButtonText="Close"
      >
        <StockGuide></StockGuide>
      </MergersDialog>
    );
  }

  renderCurrentTurn() {
    if (!this.playersInRoom()) {
      return null;
    }

    return (
      <div className={css.WrapRow}>
        <div className={css.MarginRight}>Current turn:</div>
        {this.playersInRoom().map((player) => {
          let turnClass = '';
          if (this.currentPlayer() === `${player.playerID}`) {
            if (this.currentPlayer() === this.player().id) {
              turnClass = css.YourTurn;
            } else {
              turnClass = css.CurrentTurn;
            }
          }
          const elementId = `player-label-${player.playerID}`;
          return (
            <div id={elementId} key={elementId} className={`${css.Player} ${turnClass}`}>
              {player.name}
            </div>
          );
        })}
      </div>
    );
  }

  renderLastMove() {
    let message: string;
    message = this.props.G.lastMove || '';
    for (const p of this.playersInRoom() || []) {
      message = message.replace(new RegExp(`Player ${p.playerID}`, 'g'), p.name);
    }
    return (
      <div id="last-move" className={css.WrapRow}>
        <div className={css.MarginRight}>Last move:</div>
        <div>{message}</div>
      </div>
    );
  }

  render() {
    const hotels = new Hotels(this.props.G.hotels);
    return (
      <GameLayout maxWidth="1000px" gameArgs={this.props.gameArgs}>
        <ThemeProvider theme={responsiveFontSizes(createMuiTheme({ palette: { type: 'dark' } }))}>
          <div className={`${css.Mergers} ${css.BoardContainer}`}>
            <HotelGrid
              hotels={hotels}
              lastPlacedHotel={this.props.G.lastPlacedHotel}
              isPlacingHotel={this.playerStage() === 'placeHotelStage'}
              playerID={this.playerID()}
              onHotelClicked={this.props.moves.placeHotel}
            />
            <div className={css.PlayerActionsContainer}>
              <PlayerActions
                hotels={hotels}
                players={this.props.G.players}
                availableStocks={this.props.G.availableStocks}
                merger={this.props.G.merger}
                moves={this.props.moves}
                playerID={this.playerID()}
                playerIndex={this.playerIndex()}
                playerPhase={this.playerPhase()}
                playerStage={this.playerStage()}
                gameOverMessage={this.gameOverMessage()}
              />
            </div>
            <div className={css.LastMoveAndCurrentTurnContainer}>
              {this.renderLastMove()}
              {this.isAllPlayerStateVisible() ? null : this.renderCurrentTurn()}
            </div>
            <MergersGameStatus
              hotels={hotels}
              players={this.props.G.players}
              playerID={this.playerID()}
              availableStocks={this.props.G.availableStocks}
              currentPlayer={this.props.ctx.currentPlayer}
              playersInRoom={this.playersInRoom()}
            />
            <div className={css.ShowGuideButtonContainer}>
              <Button variant="outlined" onClick={() => this.setState({ showPriceCard: true })}>
                Show Guide
              </Button>
            </div>
          </div>
          {this.maybeRenderPriceCard()}
          {this.maybeRenderMergerDetails()}
          {this.maybeRenderGameOverDetails()}
        </ThemeProvider>
      </GameLayout>
    );
  }
}
