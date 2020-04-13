import { IG, STAGES } from './game';
import { IGameCtx } from 'boardgame.io/core';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import * as React from 'react';
import css from './board.css';
import mainCss from './main.css';
import { CARD_COLOR } from './card';
import { isLocalGame, isOnlineGame } from '../common/gameMode';

interface IPlayBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
  isActive: boolean;
  isHost: boolean;
}

interface IPlayBoardState {
  spymasterView: boolean;
}

export class PlayBoard extends React.Component<IPlayBoardProps, IPlayBoardState> {
  state = {
    spymasterView: isOnlineGame(this.props.gameArgs),
  };

  _clueGiven = () => {
    if (!this.props.isActive) return;

    this.props.moves.clueGiven();
  };

  _endTurn = () => {
    if (!isLocalGame(this.props.gameArgs)) {
      if (!this.props.isActive) return;
    }

    this.props.events.endTurn();
  };

  _chooseCard = (cardIndex: number) => {
    if (!isLocalGame(this.props.gameArgs)) {
      if (!this.props.isActive) return;
      if (this.props.ctx.activePlayers[parseInt(this.props.playerID)] === null) return;
    } else {
      if (this.props.ctx.activePlayers[this.props.ctx.currentPlayer] !== STAGES.GUESS) return;
    }
    if (this.props.G.cards[cardIndex].revealed) return;

    this.props.moves.chooseCard(cardIndex);
  };

  _showSpymasterView = (isSpymaster: boolean): boolean => isSpymaster && this.state.spymasterView;

  _toggleSpymasterView = (): void => this.setState({ spymasterView: !this.state.spymasterView });

  _renderHeader = () => {
    const currentPlayerID = parseInt(this.props.ctx.currentPlayer);
    let instruction;

    if (this.props.ctx.activePlayers[this.props.ctx.currentPlayer] === STAGES.GIVE_CLUE) {
      instruction = (
        <p>
          <strong>{this.props.gameArgs.players[currentPlayerID].name}</strong> give your teammates a clue!
        </p>
      );
    } else {
      instruction = (
        <p>
          <strong>{this.props.G.teams[currentPlayerID].teamID ? 'Red' : 'Blue'} Team</strong> make your guess!
        </p>
      );
    }

    return (
      <div className={css.header}>
        <h1>{this.props.G.teams[currentPlayerID].teamID ? 'Red' : 'Blue'} Team</h1>

        {instruction}
      </div>
    );
  };

  _renderCardGrid = () => {
    const player = this.props.G.players[this.props.playerID || parseInt(this.props.ctx.currentPlayer)];
    const { isSpymaster } = player;
    let board = [];

    for (let i = 0; i < 25; i += 1) {
      const card = this.props.G.cards[i];

      const classes = [css.card];
      if (card.revealed || this._showSpymasterView(isSpymaster)) {
        if (card.color === CARD_COLOR.BLUE) classes.push(css.cardBlue);
        else if (card.color === CARD_COLOR.RED) classes.push(css.cardRed);
        else if (card.color === CARD_COLOR.CIVILIAN) classes.push(css.cardCivilian);
        else if (card.color === CARD_COLOR.ASSASSIN) classes.push(css.cardAssassin);

        classes.push(css.cardRevealed);
      }

      board.push(
        <div className={classes.join(' ')} key={i} onClick={() => this._chooseCard(i)}>
          <svg viewBox="0 0 100 100">
            <text textAnchor="middle" dominantBaseline="middle" x={50} y={50}>
              {card.word}
            </text>
          </svg>
        </div>,
      );
    }

    return <div className={css.board}>{board}</div>;
  };

  _renderActionButtons = () => {
    const player = this.props.G.players[this.props.playerID || parseInt(this.props.ctx.currentPlayer)];
    const { isSpymaster } = player;
    const isLocal = isLocalGame(this.props.gameArgs);
    const isLocalOrSpymaster = isLocal || isSpymaster;
    let buttons = [];

    if (
      this.props.ctx.activePlayers[this.props.ctx.currentPlayer] === STAGES.GIVE_CLUE &&
      this.props.isActive &&
      isLocalOrSpymaster
    ) {
      buttons.push(
        <button key={buttons.length} className={mainCss.btn} onClick={this._clueGiven}>
          I&apos;ve given my clue!
        </button>,
      );
    }
    if (
      this.props.ctx.activePlayers[this.props.playerID] === STAGES.GUESS ||
      (isLocal && this.props.ctx.activePlayers[this.props.ctx.currentPlayer] === STAGES.GUESS)
    ) {
      buttons.push(
        <button key={buttons.length} className={mainCss.btn} onClick={this._endTurn}>
          Pass to the other team
        </button>,
      );
    }
    if (isLocalOrSpymaster) {
      buttons.push(
        <button key={buttons.length} className={mainCss.btn} onClick={this._toggleSpymasterView}>
          Toggle View: {this.state.spymasterView ? 'Spymaster' : 'Normal'}
        </button>,
      );
    }

    return buttons;
  };

  render() {
    return (
      <main className={mainCss.main}>
        <div className={mainCss.wrapper}>
          {this._renderHeader()}

          {this._renderCardGrid()}

          <div className={css.buttons}>{this._renderActionButtons()}</div>
        </div>
      </main>
    );
  }
}
