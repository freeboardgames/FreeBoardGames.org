import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IG, PlacementPhases, canBet, canSkipBet, getPlayerById, canDiscard, canReveal } from './game';
import { OtherPlayerHandPenalty } from './OtherPlayerHandPenalty';
import { PlayerHand } from './PlayerHand';
import { BetPanel } from './BetPanel';
import { BetButton, SkipButton } from './BetButton';

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

  _selectPenaltyCard(handIndex: number) {
    this.props.moves.MoveDiscard(handIndex);
  }

  _bet(bet: number) {
    this.betPanelToggle = false;
    this.props.moves.MoveBet(bet);
  }

  _skipBet() {
    this.betPanelToggle = false;
    this.props.moves.MoveSkipBet();
  }

  _revealCard(targetPlayerIndex: number) {
    this.props.moves.MoveReveal(targetPlayerIndex);
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
    return (
      <div>
        <span style={{ marginRight: '20px' }}>
          <BetButton
            click={canBet(this.props.G, this.props.ctx) ? this._toggleBetPanel.bind(this) : null}
            active={this.betPanelToggle}
          ></BetButton>
        </span>
        <SkipButton click={canSkipBet(this.props.G, this.props.ctx) ? this._skipBet.bind(this) : null}></SkipButton>
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

    return (
      <PlayerHand
        playerIndex={parseInt(playerID)}
        hand={this.props.G.players[playerID].hand}
        selectCard={
          this.props.ctx.phase && PlacementPhases.map((p) => p.toString()).includes(this.props.ctx.phase)
            ? this._selectCard.bind(this)
            : null
        }
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
    var penaltyPlayerId = this.props.G.penaltyPlayerId;
    if (!penaltyPlayerId) return null;

    var penaltyPlayer = getPlayerById(this.props.G, penaltyPlayerId);
    if (!canDiscard(this.props.G)) return null;

    return (
      <OtherPlayerHandPenalty
        handSize={penaltyPlayer.hand.length}
        playerId={penaltyPlayerId}
        selectCard={this._selectPenaltyCard.bind(this)}
      ></OtherPlayerHandPenalty>
    );
  }

  getPlayerZones() {
    return (
      <PlayerZones
        currentPlayerIndex={this.props.ctx.playOrderPos}
        perspectivePlayer={this.getBrowserPlayer()}
        players={this.props.G.players}
        revealCard={canReveal(this.props.ctx) ? this._revealCard.bind(this) : null}
      ></PlayerZones>
    );
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
