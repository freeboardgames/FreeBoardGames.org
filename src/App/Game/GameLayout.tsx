import React from 'react';
import { GameOver } from './GameOver';
import { GameDarkSublayout } from './GameDarkSublayout';
import Typography from '@material-ui/core/Typography';

interface IGameLayoutProps {
  children?: React.ReactNode;
  gameOver?: string;
}

export class GameLayout extends React.Component<IGameLayoutProps, {}> {
  render() {
    if (this.props.gameOver) {
      return (<GameOver result={this.props.gameOver} />);
    } else {
      return (
        <GameDarkSublayout>
          {this.props.children}
        </GameDarkSublayout>
      );
    }
  }
}
