import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { Scoreboard } from './Scoreboard';
import { PlayerHand } from './PlayerHand';
import { Phases, getScoreBoard, HighestBid } from './game';
import { BidPanelComponent } from './BidPanelComponent';
import { PlayerBadges } from './PlayerBadges';
import { Tableau } from './Tableau';
import { ButtonComponent } from './ButtonComponent';
import { playSound } from './Sound';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';

import css from './Board.module.css';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, { gameOverPrepared: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      gameOverPrepared: 0,
    };
  }

  _gs = () => {
    this.props.moves.GameStart(this.props.playerID == null);
  };

  componentDidUpdate(prevProps) {
    //This makes it play at the beginning of every round, not just game start
    if (this.props.G.round != prevProps.G.round) {
      playSound('Start');
    }
  }

  render() {
    if (this.props.ctx.gameover) {
      if (this.state.gameOverPrepared == 0) {
        this.prepareGameOver();
      } else if (this.state.gameOverPrepared == 2) {
        return this.renderGameOver();
      }
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <div className={css.board}>
          <PlayerBadges
            players={this.props.G.players}
            playersMeta={this.props.gameArgs.players}
            scores={getScoreBoard(this.props.G)}
            playerID={this.props.playerID}
            round={this.props.G.round}
            ctx={this.props.ctx}
          />
          {this.getStartGameButton()}
          {this.getTableau()}
          {this.getBidPanel()}
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

  getTableau() {
    if (this.props.ctx.phase != null) {
      let drawFrom = [];
      if (this.props.ctx.phase == Phases.auction) {
        drawFrom = this.props.G.buildings;
      } else if (this.props.ctx.phase && this.props.ctx.phase.includes(Phases.property_selection)) {
        drawFrom = this.props.G.checks;
      }

      return (
        <Tableau
          drawFrom={drawFrom}
          cardsontable={this.props.G.cardsontable}
          numPlayers={this.props.ctx.numPlayers}
          playerID={this.props.playerID}
        />
      );
    }
  }

  getBrowserPlayer() {
    let playerID = this.props.playerID;
    if (isLocalGame(this.props.gameArgs)) {
      playerID = this.props.ctx.currentPlayer;
    }

    return playerID;
  }

  getBidPanel() {
    const playerID = this.getBrowserPlayer();

    if (playerID === null) {
      return;
    }

    if (this.props.ctx.phase == Phases.auction) {
      return (
        <BidPanelComponent
          players={this.props.G.players}
          currentPlayer={this.props.ctx.currentPlayer}
          moves={this.props.moves}
          playerID={playerID}
          currentHighBid={HighestBid(this.props.G.players)}
        />
      );
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
          this.props.ctx.phase && this.props.ctx.phase.includes(Phases.property_selection)
            ? this._selectCard.bind(this)
            : null
        }
      />
    );
  }

  prepareGameOver() {
    this.setState({ gameOverPrepared: 1 });
    setTimeout(() => {
      this.setState({ gameOverPrepared: 2 });
    }, 4000);
  }

  renderGameOver() {
    return (
      <GameLayout
        gameOver={this._getGameOver()}
        extraCardContent={this._getScoreBoard()}
        gameArgs={this.props.gameArgs}
      />
    );
  }

  _selectCard(playerIndex: number, i: number) {
    this.props.moves.MoveSelectBuilding(playerIndex, i);
  }

  _getScoreBoard() {
    return (
      <Scoreboard
        scoreboard={getScoreBoard(this.props.G)}
        playerID={this.props.playerID}
        players={this.props.gameArgs.players}
      />
    );
  }

  _getGameOver() {
    const winner = this.props.ctx.gameover.winner;
    if (winner !== undefined) {
      if (this.props.playerID) {
        if (winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      }
      return 'Player ' + (parseInt(winner) + 1) + ' won';
    }
    return 'it is a tie';
  }
}
