import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IG, PlacementPhases } from './game';
import { PlayerHand } from './PlayerHand';
import { PlayerBettingOptions } from './PlayerBettingOptions';

import { ButtonComponent } from './ButtonComponent';

import css from './Board.css';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  _gs = () => {
    this.props.moves.GameStart();
  };

  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <div className={css.board}>
          {this.getStartGameButton()}
          {this.getPlayerBettingOptions()}
          {this.getPlayerHand()}
        </div>
      </GameLayout>
    );
  }

  getStartGameButton() {
    if (this.props.ctx.phase == null && !this.props.ctx.gameover) {
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

    return (
      <PlayerHand
        playerIndex={parseInt(playerID)}
        player={this.props.G.players[playerID]}
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

    return (
      <PlayerBettingOptions
        bet={this._bet.bind(this)}
        skip={this._skipBet.bind(this)}
        minBet={this.props.G.minBet}
        maxBet={this.props.G.maxBet}
        playerIndex={parseInt(playerID)}
      />
    );
  }

  getBrowserPlayer() {
    let playerID = this.props.playerID;
    if (isLocalGame(this.props.gameArgs)) {
      playerID = this.props.ctx.currentPlayer;
    }

    return playerID;
  }

  _selectCard(handIndex: number) {
    this.props.moves.MovePlaceToken(handIndex);
  }

  _bet(bet: number) {
    this.props.moves.MoveBet(bet);
  }

  _skipBet() {
    this.props.moves.MoveSkipBet();
  }
}
