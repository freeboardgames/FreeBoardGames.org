import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import {
  IG,
  canBet,
  canSkipBet,
  getPlayerById,
  canDiscard,
  isRevealing,
  isBetting,
  canRevealTargetStack,
  canPlaceCard,
  getRevealCount,
} from './game';
import { PlayerHandPenalty } from './PlayerHandPenalty';
import { PlayerHand } from './PlayerHand';
import { BetPanel } from './BetPanel';
import { BetButton, SkipButton } from './BetButton';
import { IBetDisplayProps } from './BetDisplay';
import { IDiscardPileProps } from './DiscardPile';

import { ButtonComponent } from './ButtonComponent';

import css from './Board.css';
import { PlayerZones } from './PlayerZones';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  betPanelToggle: boolean = false;

  _toggleBetPanel = () => {
    this.betPanelToggle = !this.betPanelToggle;
    this.forceUpdate();
  };

  _gs = () => {
    this.props.moves.GameStart();
  };

  _selectCard(handIndex: number) {
    this.props.moves.MovePlaceCard(handIndex);
  }

  _selectPenaltyCard(targetPlayerIndex: string, handIndex: number) {
    this.props.moves.MoveDiscard(targetPlayerIndex, handIndex);
  }

  _bet(bet: number) {
    this.betPanelToggle = false;
    this.props.moves.MoveBet(bet);
  }

  _skipBet() {
    this.betPanelToggle = false;
    this.props.moves.MoveSkipBet();
  }

  _revealCard(targetPlayerId: string) {
    this.props.moves.MoveReveal(targetPlayerId);
  }

  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <div className={css.board}>{this.getGameComponents()}</div>
      </GameLayout>
    );
  }

  getGameComponents() {
    if (this.isNewGame()) {
      return this.getStartGameButton();
    }

    return [
      this.getPlayerZones(),
      this.getBetButtons(),
      this.getPlayerHand(),
      this.getPlayerBettingOptions(),
      this.getOtherPlayerHandPenalty(),
    ];
  }

  getStartGameButton() {
    if (this.props.playerID == this.props.ctx.currentPlayer || this.props.playerID == null) {
      return (
        <div className={css.startButtonContainer}>
          <ButtonComponent click={this._gs}>START GAME</ButtonComponent>
        </div>
      );
    } else {
      return (
        <div className={css.startButtonContainer}>
          <span className={css.startWaiting}>Waiting for the Lobby Owner to Start...</span>
        </div>
      );
    }
  }

  getBetButtons() {
    const playerID = this.getBrowserPlayer();

    return (
      <div style={{ marginBottom: '-10px' }}>
        <span style={{ marginRight: '20px' }}>
          <BetButton
            click={canBet(this.props.G, this.props.ctx, playerID) ? this._toggleBetPanel.bind(this) : null}
            active={this.betPanelToggle}
          ></BetButton>
        </span>
        <SkipButton
          click={canSkipBet(this.props.G, this.props.ctx, playerID) ? this._skipBet.bind(this) : null}
        ></SkipButton>
      </div>
    );
  }

  getPlayerHand() {
    const playerID = this.getBrowserPlayer();

    if (playerID === null) {
      return (
        <div className={css.spectator}>
          <span>You are in spectator mode.</span>
        </div>
      );
    }

    if (this.betPanelToggle) return null;
    var player = getPlayerById(this.props.G, playerID);

    return (
      <PlayerHand
        playerId={player.id}
        hand={player.hand}
        cardStyle={player.cardStyle}
        selectCard={canPlaceCard(this.props.ctx, playerID) ? this._selectCard.bind(this) : null}
      />
    );
  }

  getPlayerBettingOptions() {
    const playerID = this.getBrowserPlayer();

    if (!this.betPanelToggle) return null;

    return (
      <BetPanel
        bet={this._bet.bind(this)}
        minBet={this.props.G.minBet}
        maxBet={this.props.G.maxBet}
        playerIndex={parseInt(playerID)}
      />
    );
  }

  getOtherPlayerHandPenalty() {
    var playerId = this.getBrowserPlayer();
    var penaltyPlayerId = this.props.G.failedRevealPlayerId;
    if (!penaltyPlayerId) return null;

    var penaltyPlayer = getPlayerById(this.props.G, penaltyPlayerId);
    if (!canDiscard(this.props.G, playerId)) return null;

    return (
      <PlayerHandPenalty
        hand={penaltyPlayer.hand}
        playerId={playerId}
        cardStyle={penaltyPlayer.cardStyle}
        targetPlayerId={penaltyPlayerId}
        selectCard={this._selectPenaltyCard.bind(this)}
      ></PlayerHandPenalty>
    );
  }

  getPlayerZones() {
    var currentPlayerId = this.props.ctx.currentPlayer;
    return (
      <PlayerZones
        betDisplayProps={this.getBetDisplayProps()}
        discardPileProps={this.getDiscardPileProps()}
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={this.getBrowserPlayer()}
        players={this.props.G.players}
        revealCard={isRevealing(this.props.ctx) ? this._revealCard.bind(this) : null}
        canRevealTargetStack={(targetPlayerId: string) =>
          canRevealTargetStack(this.props.G, this.props.ctx, targetPlayerId)
        }
      ></PlayerZones>
    );
  }

  getBetDisplayProps(): IBetDisplayProps | undefined {
    var ctx = this.props.ctx;
    if (!isBetting(ctx) && !isRevealing(ctx)) return;

    return {
      currentBet: this.props.G.currentBet,
      isRevealing: isRevealing(ctx),
      revealedCount: getRevealCount(this.props.G.players),
    };
  }

  getDiscardPileProps(): IDiscardPileProps {
    return {
      cards: this.props.G.discardPile,
    };
  }

  getBrowserPlayer() {
    let playerID = this.props.playerID;
    if (isLocalGame(this.props.gameArgs)) {
      playerID = this.props.ctx.currentPlayer;
    }

    return playerID;
  }

  isNewGame() {
    return this.props.ctx.phase == null && !this.props.ctx.gameover;
  }
}
