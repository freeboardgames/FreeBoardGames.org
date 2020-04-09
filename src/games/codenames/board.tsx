import * as React from 'react';
import { IG, PHASES, STAGES } from './game';
import { IGameCtx } from 'boardgame.io/core';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import css from './board.css';
import lobbyCss from './Lobby.css';
import { CARD_COLOR } from './card';
import { GameLayout } from '../../components/App/Game/GameLayout';
import { Lobby } from './Lobby';
import './global.css';
import { isLocalGame, isOnlineGame } from '../common/gameMode';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  step?: any;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
  isActive: boolean;
  isMultiplayer: boolean;
}

interface IBoardState {
  spymasterView: boolean;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  state = {
    spymasterView: isOnlineGame(this.props.gameArgs),
  };

  isHost = () => this.props.playerID === '0';

  _renderLobby = () => {
    return (
      <Lobby
        G={this.props.G}
        ctx={this.props.ctx}
        moves={this.props.moves}
        events={this.props.events}
        playerID={this.props.playerID}
        gameArgs={this.props.gameArgs}
        isHost={this.isHost()}
      />
    );
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

  _renderBoard = () => {
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

    return (
      <main className={css.main}>
        <div className={css.wrapper}>
          <div className={css.header}>
            <h1>{this.props.G.teams[parseInt(this.props.ctx.currentPlayer)].teamID ? 'Red' : 'Blue'} Team</h1>

            {this.props.ctx.activePlayers[this.props.ctx.currentPlayer] === STAGES.GIVE_CLUE ? (
              <p>
                <strong>{this.props.gameArgs.players[parseInt(this.props.ctx.currentPlayer)].name}</strong> give your
                teammates a clue!
              </p>
            ) : (
              <p>
                <strong>
                  {this.props.G.teams[parseInt(this.props.ctx.currentPlayer)].teamID ? 'Red' : 'Blue'} Team
                </strong>{' '}
                make your guess!
              </p>
            )}
          </div>

          <div className={css.board}>{board}</div>

          <div className={css.buttons}>
            {this.props.ctx.activePlayers[this.props.ctx.currentPlayer] === STAGES.GIVE_CLUE &&
            this.props.isActive &&
            (isLocalGame(this.props.gameArgs) || isSpymaster) ? (
              <button className={css.btn} onClick={this._clueGiven}>
                Clue given
              </button>
            ) : (
              ''
            )}
            {this.props.ctx.activePlayers[this.props.playerID] === STAGES.GUESS ||
            (isLocalGame(this.props.gameArgs) &&
              this.props.ctx.activePlayers[this.props.ctx.currentPlayer] === STAGES.GUESS) ? (
              <button className={css.btn} onClick={this._endTurn}>
                End guessing
              </button>
            ) : (
              ''
            )}
            {isLocalGame(this.props.gameArgs) || isSpymaster ? (
              <button className={css.btn} onClick={this._toggleSpymasterView}>
                Toggle Spymaster View
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </main>
    );
  };

  _getScoreBoard = () => {
    return (
      <div className={[lobbyCss.team, lobbyCss.unassigned, css.winners].join(' ')}>
        <h3>Winners!</h3>

        {this.props.ctx.gameover.winner.players.map((p) => {
          return <p key={p.playerID}>{this.props.gameArgs.players[p.playerID].name}</p>;
        })}
      </div>
    );
  };

  render() {
    if (this.props.ctx.gameover)
      return (
        <GameLayout
          gameOver={this.props.ctx.gameover.winner.teamId ? 'Red Team wins' : 'Blue Team wins'}
          extraCardContent={this._getScoreBoard()}
          gameArgs={this.props.gameArgs}
        />
      );

    if (this.props.ctx.phase === PHASES.LOBBY) {
      return this._renderLobby();
    } else {
      return this._renderBoard();
    }
  }
}

export default Board;
