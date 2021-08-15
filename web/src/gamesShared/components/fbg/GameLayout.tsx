import React from 'react';
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

export class GameLayout extends React.Component<IGameLayoutProps, {}> {
  render() {
    if (this.props.gameOver) {
      return (
        <GameOver
          result={this.props.gameOver}
          gameArgs={this.props.gameArgs}
          extraCardContent={this.props.extraCardContent}
        />
      );
    } else {
      return (
        <GameDarkSublayout
          optionsMenuItems={this.props.optionsMenuItems}
          maxWidth={this.props.maxWidth}
          avoidOverscrollReload={this.props.avoidOverscrollReload}
          gameArgs={this.props.gameArgs}
        >
          {this.props.children}
        </GameDarkSublayout>
      );
    }
  }
}
