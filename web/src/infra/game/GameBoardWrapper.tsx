import { IGameArgs } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { Notification } from 'infra/notification/enum';
import { notifyOnTurnChange } from 'infra/notification/hoc';
import React from 'react';
import { compose } from 'recompose';
import { getGameDefinition } from '.';
import { ConnectionLost } from './ConnectionLost';

export interface IBoardWrapperArgs {
  gameArgs: IGameArgs;
  board: any;
}

const orEmpty = <T extends any>(arrayOrNull: T[]) => arrayOrNull ?? [];

export function gameBoardWrapper(args: IBoardWrapperArgs) {
  const gameDef = getGameDefinition(args.gameArgs.gameCode);
  const enhance = compose(
    ...orEmpty(gameDef.notifications?.has(Notification.TurnChanged) && [notifyOnTurnChange(args.gameArgs)]),
  );

  class Board extends React.Component<any, {}> {
    render() {
      const props: any = {
        ...this.props,
        gameArgs: args.gameArgs,
      };
      const child = React.createElement(args.board, props);
      let alert;
      if (!this.props.isConnected && args.gameArgs.mode !== GameMode.LocalFriend) {
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

  return enhance(Board);
}
