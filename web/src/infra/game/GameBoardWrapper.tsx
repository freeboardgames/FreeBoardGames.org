import { IGameArgs } from 'gamesShared/definitions/game';
import React from 'react';
import { ConnectionLost } from './ConnectionLost';

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
        alert = <ConnectionLost />;
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
  }
  return Board;
}
