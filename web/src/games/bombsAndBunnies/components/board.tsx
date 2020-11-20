import * as React from 'react';

import { PlayerHandPenalty } from './PlayerHandPenalty';
import { PlayerHand } from './PlayerHand';
import { BetPanel } from './BetPanel';
import { BetButton, SkipButton } from './BetButton';
import { IBetDisplayProps } from './BetDisplay';
import { IDiscardPileProps } from './DiscardPile';

import css from './Board.css';
import { PlayerZones } from './PlayerZones';
import { CardStyle, IPlayerProps } from './shared/interfaces';

export interface IBoardProps {
  player: IPlayerProps;
  penaltyPlayer: IPlayerProps;
  players: IPlayerProps[];

  currentPlayerId: string;

  isBetting: boolean;
  isRevealing: boolean;
  currentBet: number;
  minBet: number;
  maxBet: number;
  revealedCount: number;
  discardPile: CardStyle[];

  bet?: (bet: number) => void;
  skipBet: () => void;
  selectCard?: (handIndex: number) => void;
  selectPenaltyCard?: (argetPlayerIndex: string, handIndex: number) => void;
  revealCard?: (targetPlayerId: string) => void;
  canRevealCard?: (targetPlayerId: string) => boolean;
}

export class Board extends React.Component<IBoardProps, {}> {
  betPanelToggle: boolean = false;

  _getPlayerId = () => this.props.player?.id;

  _toggleBetPanel = () => {
    this.betPanelToggle = !this.betPanelToggle;
    this.forceUpdate();
  };

  render() {
    return (
      <div className={css.board}>
        {this.getPlayerZones()}
        {this.getBetButtons()}
        {this.getPlayerHand()}
        {this.getPlayerBettingOptions()}
        {this.getOtherPlayerHandPenalty()}
      </div>
    );
  }

  getBetButtons() {
    return (
      <div style={{ marginBottom: '-10px' }}>
        <span style={{ marginRight: '20px' }}>
          <BetButton
            click={this.props.bet ? this._toggleBetPanel.bind(this) : null}
            active={this.betPanelToggle}
          ></BetButton>
        </span>
        <SkipButton click={this.props.skipBet}></SkipButton>
      </div>
    );
  }

  getPlayerHand() {
    const player = this.props.player;

    if (!player) {
      return (
        <div className={css.spectator}>
          <span>You are in spectator mode.</span>
        </div>
      );
    }

    if (this.betPanelToggle) return null;

    return (
      <PlayerHand
        playerId={player.id}
        hand={player.hand}
        cardStyle={player.cardStyle}
        selectCard={this.props.selectCard}
      />
    );
  }

  getPlayerBettingOptions() {
    if (!this.betPanelToggle) return null;

    return <BetPanel bet={this.props.bet} minBet={this.props.minBet} maxBet={this.props.maxBet} />;
  }

  getOtherPlayerHandPenalty() {
    const penaltyPlayer = this.props.penaltyPlayer;

    if (!penaltyPlayer) return null;
    if (!this.props.selectPenaltyCard) return null;

    return (
      <PlayerHandPenalty
        hand={penaltyPlayer.hand}
        playerId={this.props.player.id}
        cardStyle={penaltyPlayer.cardStyle}
        targetPlayerId={penaltyPlayer.id}
        selectCard={this.props.selectPenaltyCard}
      ></PlayerHandPenalty>
    );
  }

  getPlayerZones() {
    return (
      <PlayerZones
        betDisplayProps={this.getBetDisplayProps()}
        discardPileProps={this.getDiscardPileProps()}
        currentPlayerId={this.props.currentPlayerId}
        perspectivePlayerId={this.props.player.id}
        players={this.props.players}
        currentBet={this.props.currentBet}
        revealCard={this.props.revealCard}
        canRevealTargetStack={this.props.canRevealCard}
      />
    );
  }

  getBetDisplayProps(): IBetDisplayProps | undefined {
    if (!this.props.isBetting && !this.props.isRevealing) return;

    return {
      currentBet: this.props.currentBet,
      isRevealing: this.props.isRevealing,
      revealedCount: this.props.revealedCount,
    };
  }

  getDiscardPileProps(): IDiscardPileProps {
    return {
      cards: this.props.discardPile,
    };
  }
}
