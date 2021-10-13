import React, { VFC } from 'react';
import { GameOver } from './GameOver';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameDarkSublayout } from './GameDarkSublayout';
import { IOptionsItems } from './GameDarkSublayout';

interface IGameLayoutProps {
  gameArgs: IGameArgs;
  children?: React.ReactNode;
  gameOver?: string;
  maxWidth?: string;
  avoidOverscrollReload?: boolean;
  optionsMenuItems?: () => IOptionsItems[];
  extraCardContent?: React.ReactNode;
}

export const GameLayout: VFC<IGameLayoutProps> = (props) => {
  if (props.gameOver) {
    return <GameOver result={props.gameOver} gameArgs={props.gameArgs} extraCardContent={props.extraCardContent} />;
  } else {
    return (
      <GameDarkSublayout
        optionsMenuItems={props.optionsMenuItems}
        maxWidth={props.maxWidth}
        avoidOverscrollReload={props.avoidOverscrollReload}
        gameArgs={props.gameArgs}
      >
        {props.children}
      </GameDarkSublayout>
    );
  }
};
