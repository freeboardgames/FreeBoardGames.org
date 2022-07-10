import { IGameArgs } from "fbg-games/gamesShared/definitions/game";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import React, { FC } from "react";
import { ConnectionLost as RawConnectionLost } from "./ConnectionLost";
import { BoardProps } from "boardgame.io/react";
import { useTranslation } from "next-i18next";

export interface IBoardWrapperArgs {
  gameArgs: IGameArgs;
  board: any;
}

export function gameBoardWrapper({
  gameArgs,
  board: RawBoard,
}: IBoardWrapperArgs) {
  // TODO(vdf): Add notification back #launch-blocker
  const ConnectionLost: FC<BoardProps> = (props) => {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <RawBoard {...props} />
        <RawConnectionLost />
      </div>
    );
  };

  const Board: FC<BoardProps> = (props) => {
    const translate = useTranslation(`game-${gameArgs.gameCode}`).t;
    const boardProps = { ...props, gameArgs, translate };
    const isConnectionLost =
      !props.isConnected && gameArgs.mode !== GameMode.LocalFriend;
    if (isConnectionLost) return <ConnectionLost {...boardProps} />;
    return <RawBoard {...boardProps} />;
  };

  return Board;
}
