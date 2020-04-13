import { IG, Stages, CardColor } from './definitions';
import { IGameCtx } from 'boardgame.io/core';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import * as React from 'react';
import css from './board.css';
import { isLocalGame, isOnlineGame } from '../common/gameMode';
import Button from '@material-ui/core/Button';

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
      if (this.props.ctx.activePlayers[this.props.ctx.currentPlayer] !== Stages.guess) return;
    }
    if (this.props.G.cards[cardIndex].revealed) return;

    this.props.moves.chooseCard(cardIndex);
  };

  _showSpymasterView = (isSpymaster: boolean): boolean => isSpymaster && this.state.spymasterView;

  _toggleSpymasterView = (): void => this.setState({ spymasterView: !this.state.spymasterView });

  _renderHeader = () => {
    const currentPlayerID = parseInt(this.props.ctx.currentPlayer);
    let instruction;

    if (this.props.ctx.activePlayers[this.props.ctx.currentPlayer] === Stages.giveClue) {
      instruction = (
        <p>
          <strong>{this.props.gameArgs.players[currentPlayerID].name}</strong> give your teammates a clue!
          <Button className={css.playActionBtn} variant="contained" onClick={this._clueGiven} color="primary">
            Done
          </Button>
        </p>
      );
    } else {
      instruction = (
        <p>
          <strong>{this.props.G.teams[currentPlayerID].teamID ? 'Red' : 'Blue'} Team</strong> make your guess!
          <Button className={css.playActionBtn} variant="contained" onClick={this._endTurn}>
            Pass
          </Button>
        </p>
      );
    }

    return (
      <div className={css.header}>
        <h3 className={this.props.G.teams[currentPlayerID].teamID ? css.redTitle : css.blueTitle}>
          {this.props.G.teams[currentPlayerID].teamID ? 'Red' : 'Blue'} Team
        </h3>
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
        if (card.color === CardColor.blue) classes.push(css.cardBlue);
        else if (card.color === CardColor.red) classes.push(css.cardRed);
        else if (card.color === CardColor.civilian) classes.push(css.cardCivilian);
        else if (card.color === CardColor.assassin) classes.push(css.cardAssassin);

        classes.push(css.cardRevealed);
      }

      board.push(
        <div className={classes.join(' ')} key={i} onClick={() => this._chooseCard(i)}>
          {card.word}
        </div>,
      );
    }

    return <div className={css.board}>{board}</div>;
  };

  _renderActionButtons = () => {
    return (
      <Button className={css.selectTeamBtn} variant="contained" onClick={this._toggleSpymasterView}>
        Toggle View: {this.state.spymasterView ? 'Spymaster' : 'Normal'}
      </Button>
    );
  };

  render() {
    return (
      <div>
        {this._renderHeader()}

        {this._renderCardGrid()}

        <div className={css.buttons}>{this._renderActionButtons()}</div>
      </div>
    );
  }
}
