import * as React from 'react';
import { IG, Phases, TeamColor } from './definitions';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import css from './board.css';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Lobby } from './Lobby';
import { PlayBoard } from './PlayBoard';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
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

  _renderPlayBoard = (isGameOver?: boolean) => {
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
        isGameOver={isGameOver}
      />
    );
  };

  _getScoreBoard = () => {
    return (
      <div className={[css.winners].join(' ')}>
        <h3>Winners</h3>
        {this.props.ctx.gameover.winner.playersID.map((id) => {
          return <p key={id}>{this.props.gameArgs.players[id].name}</p>;
        })}
        <br />
        {this._renderPlayBoard(true)}
      </div>
    );
  };

  _getGameOverText = (): string => {
    if (this.props.ctx.gameover.winner.color === TeamColor.Blue) {
      return 'Blue Team wins';
    }

    return 'Red Team wins';
  };

  render() {
    if (this.props.ctx.gameover)
      return (
        <GameLayout
          gameOver={this._getGameOverText()}
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
