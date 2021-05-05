/* eslint-disable react/prop-types */
import { GAMES_MAP } from 'games';
import { IGameDef } from 'gamesShared/definitions/game';
import { createContext, FC, useContext } from 'react';
import React from 'react';

const Context = createContext<GameContext>({} as GameContext);

export const useCurrentGame = () => useContext(Context);

export const GameProvider: FC<{ gameCode: string }> = ({ children, gameCode }) => {
  return <Context.Provider value={{ game: GAMES_MAP[gameCode], gameCode }}>{children}</Context.Provider>;
};

export interface GameContext {
  game?: IGameDef;
  gameCode?: string;
}
