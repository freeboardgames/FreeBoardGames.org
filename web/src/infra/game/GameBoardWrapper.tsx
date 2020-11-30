import React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import AlertLayer from '../common/components/alert/AlertLayer';
import Typography from '@material-ui/core/Typography';

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
          <Typography variant="h4">Connection lost</Typography>
          <Typography variant="body1">Trying to connect...</Typography>
        </AlertLayer>
      );
    }
  }
  return Board;
}
