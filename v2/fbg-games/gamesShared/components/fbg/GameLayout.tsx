import { IGameArgs } from 'fbg-games/gamesShared/definitions/game';
import React, { FC } from 'react';
import { compose, setDisplayName } from 'recompose';
import { GameDarkSublayout, IOptionsItems } from './GameDarkSublayout';
import { GameOver } from './GameOver';

interface IGameLayoutProps {
  gameArgs: IGameArgs;
  children?: React.ReactNode;
  gameOver?: string;
  maxWidth?: string;
  avoidOverscrollReload?: boolean;
  optionsMenuItems?: () => IOptionsItems[];
  extraCardContent?: React.ReactNode;
}
// TODO(vdf): Add notifications back #launch-blocker
const enhance = compose<IGameLayoutProps, IGameLayoutProps>(setDisplayName('GameLayout'));

const GameLayoutInternal: FC<IGameLayoutProps> = (props) => {
  const modifiedOptionsMenuItems = () => props.optionsMenuItems?.() ?? [];
  return props.gameOver ? (
    <GameOver result={props.gameOver} gameArgs={props.gameArgs} extraCardContent={props.extraCardContent} />
  ) : (
    <GameDarkSublayout
      optionsMenuItems={modifiedOptionsMenuItems}
      maxWidth={props.maxWidth}
      avoidOverscrollReload={props.avoidOverscrollReload}
      gameArgs={props.gameArgs}
    >
      {props.children}
    </GameDarkSublayout>
  );
};

export const GameLayout = enhance(GameLayoutInternal);