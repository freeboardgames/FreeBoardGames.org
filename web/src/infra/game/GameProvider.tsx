/* eslint-disable react/prop-types */
import { IGameDef } from 'gamesShared/definitions/game';
import { LobbyService } from 'infra/common/services/LobbyService';
import React, { createContext, FC, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAsyncEffect } from 'use-async-effect';
import { getGameDefinition } from './utils';
const Context = createContext<GameContext>({} as GameContext);

export const useCurrentGame = () => useContext(Context);

type Props = {
  gameCode?: string;
  matchId?: string;
};

export const GameProvider: FC<Props> = ({ children, gameCode, matchId }) => {
  const [matchGameCode, setMatchGameCode] = useState<string>();
  const dispatch = useDispatch();

  useAsyncEffect(async () => {
    if (gameCode || !matchId) return;
    const { match } = await LobbyService.getMatch(dispatch, matchId);
    setMatchGameCode(match.gameCode);
  }, [matchId]);

  return (
    <Context.Provider
      value={{
        game: getGameDefinition(matchGameCode || gameCode),
        gameCode: matchGameCode || gameCode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export interface GameContext {
  game?: IGameDef;
  gameCode?: string;
}
