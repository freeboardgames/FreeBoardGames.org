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
  children?: React.ReactNode;
};

export const GameProvider: FC<Props> = ({ children, gameCode, matchId }) => {
  const [matchGameCode, setMatchGameCode] = useState<string>();
  // Track loading state: we're loading if we have matchId but no gameCode yet
  const [loading, setLoading] = useState(!gameCode && !!matchId);
  const dispatch = useDispatch();

  useAsyncEffect(async () => {
    if (gameCode || !matchId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const { match } = await LobbyService.getMatch(dispatch, matchId);
      setMatchGameCode(match.gameCode);
    } finally {
      setLoading(false);
    }
  }, [matchId, gameCode]);

  const resolvedGameCode = matchGameCode || gameCode;

  return (
    <Context.Provider
      value={{
        game: resolvedGameCode ? getGameDefinition(resolvedGameCode) : undefined,
        gameCode: resolvedGameCode,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export interface GameContext {
  game?: IGameDef;
  gameCode?: string;
  loading?: boolean;
}
