/* eslint-disable react/prop-types */
import { IGameDef } from 'gamesShared/definitions/game';
import { createContext, FC, useContext } from 'react';
import React from 'react';
import { getGameDefinition } from './utils';

const Context = createContext<GameContext>({} as GameContext);

export const useCurrentGame = () => useContext(Context);

export const GameProvider: FC<{ gameCode: string }> = ({ children, gameCode }) => {
  return (
    <Context.Provider
      value={{
        game: getGameDefinition(gameCode),
        gameCode,
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
