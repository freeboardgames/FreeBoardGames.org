import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame, isOnlineGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';

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
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getScoreboard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <div className={css.board}>{this.getGameComponents()}</div>
      </GameLayout>
    );
  }

  getGameComponents() {
    return [
      this.getPlayerZones(0),
      this.getBetButtons(1),
      this.getPlayerHand(2),
      this.getPlayerBettingOptions(3),
      this.getOtherPlayerHandPenalty(4),
    ];
  }

  getBetButtons(key: number) {
    const playerID = this.getBrowserPlayer();

    return (
      <div key={key} style={{ marginBottom: '-10px' }}>
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

  getPlayerHand(key: number) {
    const playerID = this.getBrowserPlayer();

    if (playerID === null) {
      return (
        <div key={key} className={css.spectator}>
          <span>You are in spectator mode.</span>
        </div>
      );
    }

    if (this.betPanelToggle) return null;
    var player = getPlayerById(this.props.G, playerID);

    return (
      <PlayerHand
        key={key}
        playerId={player.id}
        hand={player.hand}
        cardStyle={player.cardStyle}
        selectCard={canPlaceCard(this.props.ctx, playerID) ? this._selectCard.bind(this) : null}
      />
    );
  }

  getPlayerBettingOptions(key: number) {
    const playerID = this.getBrowserPlayer();

    if (!this.betPanelToggle) return null;

    return (
      <BetPanel
        key={key}
        bet={this._bet.bind(this)}
        minBet={this.props.G.minBet}
        maxBet={this.props.G.maxBet}
        playerIndex={parseInt(playerID)}
      />
    );
  }

  getOtherPlayerHandPenalty(key: number) {
    var playerId = this.getBrowserPlayer();
    var penaltyPlayerId = this.props.G.failedRevealPlayerId;
    if (!penaltyPlayerId) return null;

    var penaltyPlayer = getPlayerById(this.props.G, penaltyPlayerId);
    if (!canDiscard(this.props.G, playerId)) return null;

    return (
      <PlayerHandPenalty
        key={key}
        hand={penaltyPlayer.hand}
        playerId={playerId}
        cardStyle={penaltyPlayer.cardStyle}
        targetPlayerId={penaltyPlayerId}
        selectCard={this._selectPenaltyCard.bind(this)}
      ></PlayerHandPenalty>
    );
  }

  getPlayerZones(key: number) {
    var currentPlayerId = this.props.ctx.currentPlayer;
    return (
      <PlayerZones
        key={key}
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

  _getGameOver() {
    if (this.props.ctx.gameover.draw) {
      return 'draw';
    }
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return 'you lost';
      }
    } else {
      if (this.props.ctx.gameover.winner) {
        var winnerIndex = parseInt(this.props.ctx.gameover.winner);
        var winner = this.props.gameArgs.players.find((p) => p.playerID === winnerIndex);
        return `${winner.name} won`;
      }
    }
  }

  _getScoreboard() {
    if (this.props.ctx.gameover) {
      const scores: IScore[] = this.props.gameArgs.players.map((player) => {
        var gamePlayer = getPlayerById(this.props.G, player.playerID.toString());
        return {
          playerID: `${player.playerID}`,
          score: gamePlayer.isOut ? -1 : gamePlayer.wins,
        };
      });

      return (
        <Scoreboard scoreboard={scores} players={this.props.gameArgs.players} playerID={this.props.ctx.playerID} />
      );
    }

    return null;
  }
}
