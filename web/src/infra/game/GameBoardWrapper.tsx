import { IGameArgs } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { notifyOnTurnChange } from 'infra/notification/hoc';
import React, { FC } from 'react';
import { compose } from 'recompose';
import { ConnectionLost as RawConnectionLost } from './ConnectionLost';
import { BoardProps } from 'boardgame.io/react';

export interface IBoardWrapperArgs {
  gameArgs: IGameArgs;
  board: any;
}

export function gameBoardWrapper({ gameArgs, board: RawBoard }: IBoardWrapperArgs) {
  const enhance = compose<BoardProps, BoardProps>(notifyOnTurnChange(gameArgs));

  const ConnectionLost: FC<BoardProps> = (props) => {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <RawBoard {...props} />
        <RawConnectionLost />
      </div>
    );
  };

  const Board: FC<BoardProps> = (props) => {
    const boardProps = { ...props, gameArgs };
    const isConnectionLost = !props.isConnected && gameArgs.mode !== GameMode.LocalFriend;
    if (isConnectionLost) return <ConnectionLost {...boardProps} />;
    return <RawBoard {...boardProps} />;
  };

  return enhance(Board);
}
