import { Ctx } from 'boardgame.io';
import { IGameArgs, IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { getGameDefinition } from 'infra/game';
import React, { ComponentType, useEffect } from 'react';
import { useNotificationsHandler } from './config';

type Props = {
  playerID: string;
  matchID: string;
  mode: GameMode;
  game: IGameDef;
  ctx: Ctx;
  G: any;
};

export const notifyOnTurnChange = (gameArgs: IGameArgs) => (Component: ComponentType<Props>) => (props: Props) => {
  const game: IGameDef = getGameDefinition(gameArgs.gameCode);

  const { handleBeginTurn } = useNotificationsHandler({
    playerID: props.playerID,
    matchID: props.matchID,
    mode: gameArgs.mode,
    game,
  });

  useEffect(() => {
    handleBeginTurn(props.G, props.ctx);
  }, [props.ctx.currentPlayer]);

  return <Component {...props} />;
};
