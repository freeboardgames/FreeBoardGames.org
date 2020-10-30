import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
<<<<<<< HEAD
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
=======
import { IG, PlacementPhases } from './game';
import { PlayerHand } from './PlayerHand';
import { BetPanel } from './BetPanel';
>>>>>>> upstream/master

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
<<<<<<< HEAD
  betPanelToggle: boolean = false;

  _toggleBetPanel = () => {
    this.betPanelToggle = !this.betPanelToggle;
    this.forceUpdate();
  };

=======
>>>>>>> upstream/master
  _gs = () => {
    this.props.moves.GameStart();
  };

  _selectCard(handIndex: number) {
    this.props.moves.MovePlaceCard(handIndex);
  }

<<<<<<< HEAD
  _selectPenaltyCard(targetPlayerIndex: string, handIndex: number) {
    this.props.moves.MoveDiscard(targetPlayerIndex, handIndex);
  }

  _bet(bet: number) {
    this.betPanelToggle = false;
=======
  _bet(bet: number) {
>>>>>>> upstream/master
    this.props.moves.MoveBet(bet);
  }

  _skipBet() {
<<<<<<< HEAD
    this.betPanelToggle = false;
    this.props.moves.MoveSkipBet();
  }

  _revealCard(targetPlayerId: string) {
    this.props.moves.MoveReveal(targetPlayerId);
=======
    this.props.moves.MoveSkipBet();
  }

  _revealCard(targetPlayerIndex: number) {
    this.props.moves.MoveReveal(targetPlayerIndex);
>>>>>>> upstream/master
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

<<<<<<< HEAD
    return [
      this.getPlayerZones(),
      this.getBetButtons(),
      this.getPlayerHand(),
      this.getPlayerBettingOptions(),
      this.getOtherPlayerHandPenalty(),
    ];
=======
    return [this.getPlayerBettingOptions(), this.getPlayerZones(), this.getPlayerHand()];
>>>>>>> upstream/master
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

<<<<<<< HEAD
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

=======
>>>>>>> upstream/master
  getPlayerHand() {
    const playerID = this.getBrowserPlayer();

    if (playerID === null) {
      return (
        <div className={css.spectator}>
          <span>You are in spectator mode.</span>
        </div>
      );
    }

<<<<<<< HEAD
    if (this.betPanelToggle) return null;
    var player = getPlayerById(this.props.G, playerID);

    return (
      <PlayerHand
        playerId={player.id}
        hand={player.hand}
        cardStyle={player.cardStyle}
        selectCard={canPlaceCard(this.props.ctx, playerID) ? this._selectCard.bind(this) : null}
=======
    return (
      <PlayerHand
        playerIndex={parseInt(playerID)}
        player={this.props.G.players[playerID]}
        selectCard={
          this.props.ctx.phase && PlacementPhases.map((p) => p.toString()).includes(this.props.ctx.phase)
            ? this._selectCard.bind(this)
            : null
        }
>>>>>>> upstream/master
      />
    );
  }

  getPlayerBettingOptions() {
    const playerID = this.getBrowserPlayer();

<<<<<<< HEAD
    if (!this.betPanelToggle) return null;

    return (
      <BetPanel
        bet={this._bet.bind(this)}
=======
    return (
      <BetPanel
        bet={this._bet.bind(this)}
        skip={this._skipBet.bind(this)}
>>>>>>> upstream/master
        minBet={this.props.G.minBet}
        maxBet={this.props.G.maxBet}
        playerIndex={parseInt(playerID)}
      />
    );
  }

<<<<<<< HEAD
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
=======
  getPlayerZones() {
    return (
      <PlayerZones
        currentPlayerIndex={this.props.ctx.playOrderPos}
        perspectivePlayer={this.getBrowserPlayer()}
        players={this.props.G.players}
        revealCard={this._revealCard.bind(this)}
>>>>>>> upstream/master
      ></PlayerZones>
    );
  }

<<<<<<< HEAD
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

=======
>>>>>>> upstream/master
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
