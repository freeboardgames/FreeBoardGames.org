import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { PlayerHand } from './PlayerHand';

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
        selectCard={this._selectCard.bind(this)}
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

  _selectCard(playerIndex: number, i: number) {
    this.props.moves.MovePlaceToken(playerIndex, i);
  }
}
