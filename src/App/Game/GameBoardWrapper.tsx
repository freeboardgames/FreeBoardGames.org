import React from 'react';
import { GameMode } from './GameModePicker';
import AlertLayer from './AlertLayer';
import { GameSharing } from './GameSharing';

export interface IGameArgs {
  gameCode: string;
  mode: GameMode;
  matchCode?: string;
  playerID?: string;
}

export interface IBoardWrapperArgs {
  gameArgs: IGameArgs
  board: any;
}

export function gameBoardWrapper(args: IBoardWrapperArgs) {
  class Board extends React.Component<any, {}> {
    state = { dismissedSharing: false };
    render() {
      const props: any = {
        ...this.props,
        gameArgs: args.gameArgs,
      };
      let alert = this._getGameSharing();
      if (!this.props.isConnected) {
        alert = this._getConnectionLost();
      }
      const child = React.createElement(args.board, props);
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

    _dismissSharing = () => {
      this.setState({ dismissedSharing: true });
    }

    _getGameSharing() {
      if (!this.state.dismissedSharing && args.gameArgs.matchCode &&
        args.gameArgs.playerID === '0') {
        return (
          <AlertLayer>
            <GameSharing
              gameCode={args.gameArgs.gameCode}
              matchCode={args.gameArgs.matchCode}
              playerID={args.gameArgs.playerID}
              onDismiss={this._dismissSharing}
            />
          </AlertLayer>
        );
      }
      return null;
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
