import React, { VFC } from 'react';
import { GameOver } from './GameOver';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameDarkSublayout } from './GameDarkSublayout';
import { IOptionsItems } from './GameDarkSublayout';
import { useNotificationMenuItems } from 'infra/notification/menu';
import { withNotificationsUiProvider } from 'infra/notification/Provider';

interface IGameLayoutProps {
  gameArgs: IGameArgs;
  children?: React.ReactNode;
  gameOver?: string;
  maxWidth?: string;
  avoidOverscrollReload?: boolean;
  optionsMenuItems?: () => IOptionsItems[];
  extraCardContent?: React.ReactNode;
}

const GameLayoutInternal: VFC<IGameLayoutProps> = (props) => {
  const notificationMenuItems = useNotificationMenuItems();
  const modifiedOptionsMenuItems = () => [...(props.optionsMenuItems?.() ?? []), ...notificationMenuItems];
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

export const GameLayout = withNotificationsUiProvider(GameLayoutInternal);
