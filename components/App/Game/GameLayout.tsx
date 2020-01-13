import React from 'react';
import { GameOver } from './GameOver';
import { IGameArgs } from './GameBoardWrapper';
import { GameDarkSublayout } from './GameDarkSublayout';
import { IOptionsItems } from './GameDarkSublayout';

interface IGameLayoutProps {
  children?: React.ReactNode;
  gameOver?: string;
  gameArgs?: IGameArgs;
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
        <GameDarkSublayout optionsMenuItems={this.props.optionsMenuItems} gameArgs={this.props.gameArgs}>
          {this.props.children}
        </GameDarkSublayout>
      );
    }
  }
}
