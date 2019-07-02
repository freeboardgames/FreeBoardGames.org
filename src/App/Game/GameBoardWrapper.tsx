import React from 'react';
import { GameMode } from './GameModePicker';
import AlertLayer from './AlertLayer';
import { IPlayerInRoom } from '../Lobby/LobbyService';

export interface IGameArgs {
  gameCode: string;
  mode: GameMode;
  matchCode?: string;
  playerID?: string;
  players?: IPlayerInRoom[];
}

export interface IBoardWrapperArgs {
  gameArgs: IGameArgs;
  board: any;
}

export function gameBoardWrapper(args: IBoardWrapperArgs) {
  class Board extends React.Component<any, {}> {
    render() {
      const props: any = {
        ...this.props,
        gameArgs: args.gameArgs,
      };
      const child = React.createElement(args.board, props);
      let alert;
      if (!this.props.isConnected) {
        alert = this._getConnectionLost();
      }
      if (!alert) {
        return child;
      }
      return (
        <div style={{ width: '100%', height: '100%' }}>
          {child}
          {alert}
        </div>
      );
    }

    _getConnectionLost() {
      return (
        <AlertLayer>
          <h1>Connection lost</h1>
          Trying to connect...
        </AlertLayer>
      );
    }
  }
  return Board;
}
