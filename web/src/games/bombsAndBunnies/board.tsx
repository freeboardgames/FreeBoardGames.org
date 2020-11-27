import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame, isOnlineGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { Board, IBoardProps } from './components/GameBoard';

import { IPlayerProps, CardStyle as ViewCardStyle, CardType as ViewCardType } from './components/shared/interfaces';
import { IG, IGameMoves, IPlayer, CardStyle as GameCardStyle, CardType as GameCardType } from './engine/interfaces';
import {
  canBet,
  canDiscard,
  canPlaceCard,
  canRevealTargetStack,
  canSkipBet,
  getPlayerById,
  getRevealCount,
  isBetting,
  isRevealing,
  isBeingPunished,
} from './engine/stateExtensions';

interface IBgioBoardProps {
  G: IG;
  ctx: Ctx;
  moves: IGameMoves;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class BgioBoard extends React.Component<IBgioBoardProps, {}> {
  _selectCard(handIndex: number) {
    this.props.moves.PlaceCard(handIndex);
  }

  _selectPenaltyCard(targetPlayerIndex: string, handIndex: number) {
    this.props.moves.Discard(targetPlayerIndex, handIndex);
  }

  _bet(bet: number) {
    this.props.moves.Bet(bet);
  }

  _skipBet() {
    this.props.moves.SkipBet();
  }

  _revealCard(targetPlayerId: string) {
    this.props.moves.Reveal(targetPlayerId);
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this.getGameOver()}
          extraCardContent={this.getScoreboard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <Board {...this.getBoardProps()} />
      </GameLayout>
    );
  }

  getBoardProps(): IBoardProps {
    const playerId = this.getBrowserPlayer();
    const players = this.props.G.players.map((p) => this.getPlayerProps(p));
    const player = players.find((p) => p.id === playerId);
    const penaltyPlayer = players.find((p) => p.id === this.props.G.failedRevealPlayerId);
    const discardPile = this.props.G.discardPile;

    return {
      player: player,
      penaltyPlayer: penaltyPlayer,
      players: players,

      currentPlayerId: this.props.ctx.currentPlayer,

      isBetting: isBetting(this.props.ctx),
      isRevealing: isRevealing(this.props.ctx),
      currentBet: this.props.G.currentBet,
      minBet: this.props.G.minBet,
      maxBet: this.props.G.maxBet,
      revealedCount: getRevealCount(this.props.G.players),
      discardPile: discardPile,

      bet: canBet(this.props.G, this.props.ctx, playerId) ? this._bet.bind(this) : null,
      skipBet: canSkipBet(this.props.G, this.props.ctx, playerId) ? this._skipBet.bind(this) : null,
      selectCard: canPlaceCard(this.props.ctx, playerId) ? this._selectCard.bind(this) : null,
      selectPenaltyCard: canDiscard(this.props.G, this.props.ctx, playerId) ? this._selectPenaltyCard.bind(this) : null,
      revealCard: this._revealCard.bind(this),
      canRevealCard: (targetPlayerId: string) =>
        canRevealTargetStack(this.props.G, this.props.ctx, playerId, targetPlayerId),
    };
  }

  getPlayerProps(player: IPlayer): IPlayerProps {
    return {
      id: player.id,
      bet: player.bet,
      betSkipped: player.betSkipped,
      cardStyle: this.getCardStyle(player.cardStyle),
      hand: player.hand.map((c) => this.getCardType(c)),
      isDiscarding: canDiscard(this.props.G, this.props.ctx, player.id),
      isBeingPunished: isBeingPunished(this.props.G, this.props.ctx, player.id),
      isOut: player.isOut,
      revealedStack: player.revealedStack.map((c) => this.getCardType(c)),
      stack: player.stack.map((c) => this.getCardType(c)),
      wins: player.wins,
    };
  }

  getCardType(cardType: GameCardType): ViewCardType {
    switch (cardType) {
      case GameCardType.Bunny:
        return ViewCardType.Bunny;

      case GameCardType.Bomb:
        return ViewCardType.Bomb;
    }
  }

  getCardStyle(cardStyle: GameCardStyle): ViewCardStyle {
    switch (cardStyle) {
      case GameCardStyle.Style1:
        return ViewCardStyle.Style1;

      case GameCardStyle.Style2:
        return ViewCardStyle.Style2;

      case GameCardStyle.Style3:
        return ViewCardStyle.Style3;

      case GameCardStyle.Style4:
        return ViewCardStyle.Style4;

      case GameCardStyle.Style5:
        return ViewCardStyle.Style5;

      case GameCardStyle.Style6:
        return ViewCardStyle.Style6;
    }
  }

  getBrowserPlayer() {
    return isLocalGame(this.props.gameArgs) ? this.props.ctx.currentPlayer : this.props.playerID;
  }

  getGameOver() {
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
        const winnerIndex = parseInt(this.props.ctx.gameover.winner);
        const winner = this.props.gameArgs.players.find((p) => p.playerID === winnerIndex);
        return `${winner.name} won`;
      }
    }
  }

  getScoreboard() {
    if (this.props.ctx.gameover) {
      const scores: IScore[] = this.props.gameArgs.players.map((player) => {
        const gamePlayer = getPlayerById(this.props.G, player.playerID.toString());
        return {
          playerID: `${player.playerID}`,
          score: gamePlayer.isOut ? -1 : gamePlayer.wins,
        };
      });

      scores.sort((a, b) => b.score - a.score);

      return (
        <Scoreboard scoreboard={scores} players={this.props.gameArgs.players} playerID={this.props.ctx.playerID} />
      );
    }

    return null;
  }
}
