import * as React from 'react';
import { IG, Phases } from './definitions';
import { IGameCtx } from 'boardgame.io/core';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import css from './board.css';
import lobbyCss from './Lobby.css';
import { GameLayout } from '../../components/App/Game/GameLayout';
import { Lobby } from './Lobby';
import './global.css';
import { PlayBoard } from './PlayBoard';

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

interface IBoardState {}

export class Board extends React.Component<IBoardProps, IBoardState> {
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

  _renderPlayBoard = () => {
    return (
      <PlayBoard
        G={this.props.G}
        ctx={this.props.ctx}
        moves={this.props.moves}
        events={this.props.events}
        playerID={this.props.playerID}
        gameArgs={this.props.gameArgs}
        isActive={this.props.isActive}
        isHost={this.isHost()}
      />
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

    let content;
    if (this.props.ctx.phase === Phases.lobby) {
      content = this._renderLobby();
    } else {
      content = this._renderPlayBoard();
    }
    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        {content}
      </GameLayout>
    );
  }
}

export default Board;
