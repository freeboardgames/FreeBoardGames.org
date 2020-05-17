import React from 'react';
import { GameLayout } from 'components/App/Game/GameLayout';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { isOnlineGame, isAIGame, isLocalGame } from '../common/gameMode';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';
import Typography from '@material-ui/core/Typography';
import { IG } from './game';
import { Soup } from './soup'
import { Ctx } from 'boardgame.io';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  idSelectedPoint: number;
}

export const localPlayerNames = { '0': 'red', '1': 'blue' };

export class Board extends React.Component<IBoardProps, {}> {
  
  _playerInRoom(): IPlayerInRoom {
    return this.props.gameArgs.players[this.props.ctx.currentPlayer];
  }

  _getStatus() {
    if (!this.props.gameArgs) {
      return;
    }

    if (!isLocalGame(this.props.gameArgs)) {
      return `Online Game`;
    }
    return `Normal Game`;
  }

  _getGameOver() {
    if (isOnlineGame(this.props.gameArgs) || isAIGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return 'you lost';
      }
    } else {
      if (this.props.ctx.gameover.winner) {
        return `${localPlayerNames[this.props.ctx.gameover.winner]} won`;
      }
    }
  }  

  _getBoard(boardSize = 100) {

    console.log(this.props.G.puzzel);
    console.log(this.props.G.solution);
    return (
      <Soup 
        boardSize={boardSize} 
        puzzel={this.props.G.puzzel}
        solution={this.props.G.solution}
      />
    );
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getBoard(50)}
          gameArgs={this.props.gameArgs}
        />
      );
    }
    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }}>
          {this._getStatus()}
        </Typography>
        {this._getBoard()}
      </GameLayout>
    );
  }
}
