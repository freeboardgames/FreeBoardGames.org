import React from 'react';
import { IGameArgs } from 'fbg-games/gamesShared/definitions/game';

export interface GameOverProps {
  result: string;
  gameArgs?: IGameArgs;
  extraCardContent?: React.ReactNode;
}

export const GameOver = function(props: GameOverProps) {
  // TODO(vdf): Import game over page #launch-blocker
  return <h1>GAME OVER!</h1>;
};