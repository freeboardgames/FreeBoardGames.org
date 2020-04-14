import { IG, Stages, CardColor, Team, TeamID, Player } from './definitions';
import { IGameCtx } from 'boardgame.io/core';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import * as React from 'react';
import css from './board.css';
import { isLocalGame, isOnlineGame } from '../common/gameMode';
import Button from '@material-ui/core/Button';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';

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

  _isActive() {
    return isLocalGame(this.props.gameArgs) || this.props.isActive;
  }

  _currentPlayerInRoom(): IPlayerInRoom {
    return this.props.gameArgs.players[this._currentPlayerID()];
  };

  _currentPlayerTeam(): Team {
    return this.props.G.teams[this._currentPlayerID()];
  }

  _currentPlayerID(): number {
    return parseInt(this.props.ctx.currentPlayer);
  };

  _currentPlayerStage(): Stages {
    return this.props.ctx.activePlayers[this.props.ctx.currentPlayer] as Stages;
  }

  _playerID(): number {
    if (isLocalGame(this.props.gameArgs)) {
      return this._currentPlayerID();
    } else {
      return parseInt(this.props.ctx.playerID);
    }
  }

  _player(): Player {
    return this.props.G.players[this._playerID()];
  }

  _playerTeam(): Team {
    return this.props.G.teams[this._playerID()];
  }

  _showSpymasterView = (): boolean => this._player().isSpymaster && this.state.spymasterView;

  _toggleSpymasterView = (): void => this.setState({ spymasterView: !this.state.spymasterView });

  _clueGiven = () => {
    if (!this._isActive()) return;

    this.props.moves.clueGiven();
  };

  _chooseCard = (cardIndex: number) => {
    if (!this._isActive()) return;
    if (this._currentPlayerStage() != Stages.guess) return;
    if (this.props.G.cards[cardIndex].revealed) return;

    this.props.moves.chooseCard(cardIndex);
  };

  _endTurn = () => {
    if (!this._isActive()) return;

    this.props.events.endTurn();
  };


  _renderHeader = () => {
    let instruction;

    if (this._currentPlayerStage() === Stages.giveClue) {
      const button = (this._isActive()) ? (<Button className={css.playActionBtn} variant="contained" onClick={this._clueGiven} color="primary">
        Done
      </Button>
      ) : null;
      instruction = (
        <p>
          <strong>{this._currentPlayerInRoom().name}</strong> give your teammates a clue!
          {button}
        </p>
      );
    } else {
      const button = (this._isActive()) ? (
        <Button className={css.playActionBtn} variant="contained" onClick={this._endTurn}>
          Pass
        </Button>
      ) : null;
      instruction = (
        <p>
          <strong>{this._currentPlayerTeam().teamID === TeamID.red ? 'Red' : 'Blue'} Team</strong> make your guess!
          {button}
        </p>
      );
    }

    return (
      <div className={css.header}>
        <h3 className={this._currentPlayerTeam().teamID === TeamID.red ? css.redTitle : css.blueTitle}>
          {this._currentPlayerTeam().teamID === TeamID.red ? 'Red' : 'Blue'} Team
        </h3>
        {instruction}
      </div>
    );
  };

  _renderCardGrid = () => {
    let board = [];

    for (let i = 0; i < 25; i += 1) {
      const card = this.props.G.cards[i];

      const classes = [css.card];
      if (card.revealed || this._showSpymasterView()) {
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
    if (this._player().isSpymaster) {
      return (
        <Button className={css.selectTeamBtn} variant="contained" onClick={this._toggleSpymasterView}>
          Toggle View: {this.state.spymasterView ? 'Spymaster' : 'Normal'}
        </Button>
      );
    }
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
